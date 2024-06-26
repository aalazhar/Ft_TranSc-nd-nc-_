'use client'
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import UserSettings from "./userSettings";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { PropagateLoader } from "react-spinners";
import { fetchUserSettings } from "../Slices/userSettingsSlice";


export default function SettingsForUser() {
  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(fetchUserSettings());
  },[])
  const loading: boolean = useSelector((state: RootState) => state.setuser.loading);
  const error: string | null = useSelector((state: RootState) => state.setuser.error);

  if (loading || error){
   return (
     <div className="text-white flex flex-col justify-center items-center w-full h-[70%] xMedium:h-screen">
       <div className="m-auto flex flex-col justify-center text-xl h-[30%]">
         <div className="absolute top-[45%] left-[42%] medium:left-[45%]">  LOADING . . .</div>
         <div className="absolute top-[50%] left-[48%]"><PropagateLoader color={"#E58E27"} loading={loading} size={20} aria-label="Loading Spinner"/></div>
       </div>
     </div>
   )
 }
    return (
        <div className="flex flex-col text-slate-100 h-[100%] min-h-screen w-full">
                <div className="h-24 w-full Large:h-24"><Navbar pageName="USER SETTINGS" /></div>
                <div className="h-[100%]  mb-96 xMedium:mb-0 "><UserSettings/></div>
        </div>
      )
    }
