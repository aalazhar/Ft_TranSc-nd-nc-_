import { JwtService } from "@nestjs/jwt";
import {  ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { UserDto } from "src/DTOs/User/user.dto";
import { UsersRepository } from "src/modules/users/users.repository";
import { UseFilters } from "@nestjs/common";
import { AllExceptionsSocketFilter } from "src/chat/socket.exceptionHandler";
import { PrismaService } from "../modules/database/prisma.service";
import { ConfigService } from "@nestjs/config";
import { UserSettingsDto } from "src/DTOs/settings/settings.user.dto";
import { InviteDto } from "src/DTOs/invitation/invite.dto";
import { FriendDto } from "src/DTOs/friends/friend.dto";
import { InvitesRepository } from "../modules/invites/invites.repository";
import { FriendsRepository } from "../modules/friends/friends.repository";


@WebSocketGateway(8800, {
    cors: {
      origin: ['http://localhost:3000'],
      credentials: true
    }
  })
@UseFilters(new AllExceptionsSocketFilter())
export class InvitesGateway implements OnGatewayConnection, OnGatewayDisconnect{
    constructor(
        private jwtService: JwtService,
        private user: UsersRepository,
        private prisma : PrismaService,
        private configService: ConfigService,
        private invite : InvitesRepository,
        private friend : FriendsRepository
    ) {
        this.clientsMap = new Map<string, Socket>();
    }
    @WebSocketServer() server: Server;
    private clientsMap: Map<string, Socket>;

    async handleConnection(client: Socket, ...args: any[]) {
        try {
          let cookie : string = client.client.request.headers.cookie;
          if (cookie) {
            const user =  this.jwtService.verify( cookie.substring(cookie.indexOf('=') + 1), { secret: this.configService.get<string>('JWTSECRET') });
            if (user) {
                    const test: UserDto  = await this.user.getUserById(user.sub);
                    if (test) {
                        let exist : boolean = this.clientsMap.has(test.id);
                    if (exist)
                    {
                        client.disconnect();
                    }
                    else {
                        this.clientsMap.set(test.id, client);
                    }
                  }
                }
              }
          }
          catch (error) {
        }
    }
    
    async handleDisconnect(client: Socket) {
        try {
            let cookie : string = client.client.request.headers.cookie;
            if (cookie) {
            const user =  this.jwtService.verify( cookie.substring(cookie.indexOf('=') + 1), { secret: this.configService.get<string>('JWTSECRET') });
            if (user) {
              const test: UserDto  = await this.user.getUserById(user.sub)
              this.clientsMap.delete(test.id);
            }
          }
        } catch (error) {
        }
    }

    
  @SubscribeMessage('friend')
  async handleFriend(@MessageBody('username') username : string, @ConnectedSocket() client : Socket) {
    try {
        let cookie : string = client.client.request.headers.cookie;
        if (cookie) {
        const user =  this.jwtService.verify( cookie.substring(cookie.indexOf('=') + 1), { secret: this.configService.get<string>('JWTSECRET')});
        if (user) {
          const test : UserDto = await this.user.getUserById(user.sub)
        let tmpUser : UserDto = await this.user.getUserByUsername(username)
        if (!tmpUser || !test || test.id === tmpUser.id) {
            client.emit("ERROR", "THERE'S NO USER WITH THAT NAME ...")
            return
        }else {
            let receiver : Socket = this.clientsMap.get(tmpUser.id)
            if (receiver) {
                receiver.emit("friend", {"name" : test.username})
            }
        }
        }
      }
    }
    catch (error) {
    }
  }

  @SubscribeMessage('invite')
  async handleInvite(@MessageBody('username') username : string, @ConnectedSocket() client : Socket) {
    try {
        let cookie : string = client.client.request.headers.cookie;
        if (cookie) {
        const user =  this.jwtService.verify( cookie.substring(cookie.indexOf('=') + 1), { secret: this.configService.get<string>('JWTSECRET')});
        if (user) {
          const test : UserDto = await this.user.getUserById(user.sub)
        let tmpUser : UserDto = await this.user.getUserByUsername(username)
        if (!tmpUser || !test || test.id === tmpUser.id) {
            client.emit("ERROR", "THERE'S NO USER WITH THAT NAME ...")
            return
        }else {
            let receiver : Socket = this.clientsMap.get(tmpUser.id)
            if (receiver) {
                receiver.emit("invite", {"name" : test.username})
            }
        }
        }
      }
    }
    catch (error) {
      
    }
  }

}
