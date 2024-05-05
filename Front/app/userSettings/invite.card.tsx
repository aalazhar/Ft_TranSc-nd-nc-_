import Modal from "../components/modal"
import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { Action, fetchUserSettings } from "../Slices/userSettingsSlice";
import { Socket } from "socket.io-client";
import { useSelector } from "react-redux";

type CardData = {
    title : string;
    socket : Socket;
};

type bodyData = {
  username : string;
}

function InviteCard(props : CardData) {
    const dispatch = useAppDispatch();
    const invitations : string[] = useSelector((state: RootState) => state.setuser.entity?.invitations as string[])
    
    function handleClick(endpoint: string | undefined, username: string) {
        if (!endpoint)
          return
        const bodyData : bodyData = {
          username : username,
        }
        if (endpoint === "accepteInvite")
          props.socket.emit("friend", username);
        dispatch(Action({endpoint : endpoint, bodyData : bodyData}));
      }
      useEffect(()=> {
        props.socket.on("friend", (username : string)=> {
          setTimeout(() => {
            dispatch(fetchUserSettings());
          }, 200);
        });
        return ()=> {
          props.socket.off("friend");
        }
       },[props.socket])
      let myMap = new Map<string, string>();
      myMap.set("Invitations","accepteInvite");
      myMap.set("Invitationsx","deleteInvite");
      
    return (
        <div className="w-[80%] xMedium:w-[30%] mt-16 ml-11 medium:ml-24 xMedium:ml-12 min-h-[200px] medium:h-[800px] Large:h-[1000px] flex flex-col m-5 p-5 items-center rounded-md bg-[#323232]">
            <div className="w-full flex flex-row justify-around ">
                <h3>{props.title}</h3>
                {props.title  && <Modal content="+" title={props.title} socket={props.socket}/>}
            </div>
            <div className="w-full flex flex-col h-[180px] xMedium:h-[80%] overflow-y-auto scrollbar-none">
             {invitations && Array.isArray(invitations)  && invitations?.map((user, index)=> {
                return (
                    <div key={index} className="flex flex-row justify-around">
                        {user && <p>{user}</p>} 
                        {user && <button className="text-red-600" onClick={() => handleClick(myMap.get(`${props.title}x`), user)}>X</button>}
                        {user && <button className="text-red-600" onClick={() => handleClick(myMap.get(props.title), user)}>Y</button>}
                    </div>
                    )
                })}
            </div>
        </div>
    );
}


export default InviteCard;