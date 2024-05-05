import { JwtService } from "@nestjs/jwt";
import {  ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { UserDto } from "src/DTOs/User/user.dto";
import { channelDto } from "src/DTOs/channel/channel.dto";
import { channelMessageDto } from "src/DTOs/channel/channel.messages.dto";
import { messageDto } from "src/DTOs/message/message.dto";
import { converationRepositroy } from "src/modules/conversation/conversation.repository";
import { messageRepository } from "src/modules/message/message.repository";
import { UsersRepository } from "src/modules/users/users.repository";
import { ChannelsService } from "./chat.service";
import { chatDto } from "src/DTOs/chat/chat.dto";
import { AllExceptionsSocketFilter } from "./socket.exceptionHandler";
import { Inject, UseFilters } from "@nestjs/common";
import { MatchMaking } from "src/DTOs/User/matchMaking";
import { ClientProxy } from "@nestjs/microservices";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { use } from "passport";
import { email } from "valibot";
import { ConversationDto } from "src/DTOs/conversation/conversation.dto";
import { log } from "console";
import { frontData } from "src/DTOs/chat/conversation.dto";

@WebSocketGateway(8000, {
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true
  }
})
@UseFilters(new AllExceptionsSocketFilter())
export class ChannelGateway implements OnGatewayConnection, OnGatewayDisconnect{
    constructor (
      private jwtService: JwtService, 
      private user: UsersRepository, 
      private conversation : converationRepositroy, 
      private message: messageRepository, 
      private channel : ChannelsService,
      private eventEmitter: EventEmitter2
      ) {
        this.clientsMap = new Map<string, Socket>();
    }
    @WebSocketServer() server: Server;
    private clientsMap: Map<string, Socket>;

    async handleConnection(client: Socket, ...args: any[]) {
        try {
          
              let cookie : string = client.client.request.headers.cookie;
              
              if (cookie) {
                const jwt:string = cookie.substring(cookie.indexOf('=') + 1)
                let user;
                user =  this.jwtService.verify(jwt);
                if (user) {
                  const test = await this.user.getUserById(user.sub);
                  if (test) {
                    let exist : boolean = this.clientsMap.has(test.id);
                    if (exist)
                    {
                      client.emit('ERROR', "YOU ARE ALREADY CONNECTED ...")
                      client.disconnect();
                    }
                    else {
                      this.clientsMap.set(test.id, client);
                    }
                  }
                }
              }
            else {
              client.emit('ERROR', "RAH KAN3REF BAK, IHCHEM")
              client.disconnect();
            }
          }
          catch (error) {
            client.emit('ERROR', "RAH KAN3REF BAK, IHCHEM")
            client.disconnect()
        }
    }
  
        async handleDisconnect(client: Socket) {
          try {
            let cookie : string = client.client.request.headers.cookie;
            if (cookie) {
              const jwt:string = cookie.substring(cookie.indexOf('=') + 1)
              let user;
              user =  this.jwtService.verify(jwt);
              if (user) {
                const test = await this.user.getUserById(user.sub)
                this.clientsMap.delete(user.sub);
              }
            }
          } catch (error) {
            return;
          }
        }

        @SubscribeMessage('channelMessage')
      async handleChannelMessage(@MessageBody() message: channelMessageDto,@ConnectedSocket() client : Socket) {
        try {
          let cookie : string = client.client.request.headers.cookie;
          if (cookie) {
            const jwt:string = cookie.substring(cookie.indexOf('=') + 1)
            let user;
            user = await this.jwtService.verify(jwt);
            if (user) {
              
              const _user = await this.user.getUserById(user.sub)
              if (_user) {
                  let channelId : string = "";
                  if (!_user.achievements.includes('https://res.cloudinary.com/dvmxfvju3/image/upload/v1699322994/vp6r4ephqymsyrzxgd0h.png')) {
                    await this.user.updateAcheivement('https://res.cloudinary.com/dvmxfvju3/image/upload/v1699322994/vp6r4ephqymsyrzxgd0h.png', _user.id)
                  }
                  let tmpChannel : channelDto = await this.channel.getChannelByName(message.channelName)
                  if (tmpChannel) {
                    channelId = tmpChannel.id;
                  }
                  let check : boolean = await this.channel.canSendMessageToChannel(_user.id, message.channelName)
                  let sent : boolean = false;
                  if (check) {
                    let channelUsersIds : string[] = await this.channel.getChannelUsersId(message.channelName)
                    channelUsersIds.map((id)=> {
                    let socket: Socket = this.clientsMap.get(id)
                      if (socket && !_user.bandBy.includes(id) && !_user.bandUsers.includes(id)) {
                        message.sender = _user.username
                        sent = true;
                        socket.emit("channelMessage", message)
                      }
                    })
                  } else {
                    let socket : Socket = this.clientsMap.get(_user.id)
                    if (socket){
                      socket.emit("ERROR", "you can't Send This Message .... ");
                    }
                  }
                  if (sent) {
                    await this.channel.createChannelMessage(message, channelId, _user.id);
                }
            }
          }
        }
        else
          throw('unAuthorized Action ....')
      }
        catch (error) {
        }
      }
}