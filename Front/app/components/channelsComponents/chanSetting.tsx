'use client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChannelCreate from './ChannelCreate';
import ChannelSelect from './channelList';
import DisplayUsersChannel from './displayUsersChannel';
import { RootState } from '../../store/store';
import PasswordParams from './channelpassword';
import { useAppDispatch } from './channelData';
import { fetchChannelSetData, setSelectedChannel } from '@/app/Slices/channelSlice';



function ChanSetting() {
  let channelss = useSelector((state: RootState) => state.channel.channels);
   const loading = useSelector((state: RootState) => state.channel.loading);
  const dispatch = useAppDispatch();
      useEffect(() => {
          dispatch(setSelectedChannel({
            admins : [],
            users : [],
            bandUsers : [],
            mutedUsers : [],
            channelName: ''
          }));
      },[])
return (
  <div className=" w-full flex flex-col justify-between items-center h-full  min-w-screen md:flex-row object-cover">
  <div className="w-full md:w-1/3 h-1/3 bg-[#323232] mr-5 rounded-lg p-2 m-2">
    <ChannelCreate channel={channelss} />
  </div>
  <div className='w-full flex md:w-full h-[800px]  md:h-[700px] mx-px   p-1 flex-col border border-[#E58E27] '>
    <div className="m-2 flex flex-row items-center">
      <div>
        <h1 className="text-lg md:text-xl truncate">Select channel :</h1>
      </div>
      <ChannelSelect loading={loading} channel={channelss} />
    </div>
    <div className = "w-full p-4">
      <DisplayUsersChannel/>
    </div>
    <div className='w-full p-4'>
      <PasswordParams/>
    </div>
  </div>
  </div>
 );
 
}
export default ChanSetting;