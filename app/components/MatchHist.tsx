'use client'
import Image from 'next/image'
import React from 'react'
import MCard from './MCard'
import CardM from './CardM'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'


// export interface UserInfos {
//   id: number;
//   firstName: string;
//   lastName: string;
//   login: string;
//   ran?: number;
//   level?: number;
//   avatar: string;
// }

// export interface matchHistory {
//   title: string;
//   icon: string;
//   unlocked:boolean;
// }

// export interface Achievement {
//   id: number;
//   name: string;
//   userName: string;
//   rank: number;
//   level: number;
//   avatar: string;
// }



// export interface userState {
//   userData:UserInfos;
//   Achiev:Achievement[];
//   matches:matchHistory[];
//   loading: boolean;
//   error: string | null;
// }

// export const initialState: userState = {
//   userData: {
//     id: 0,
//     login: '',
//     firstName: '',
//     lastName: '',
//     avatar: '',
//   },
//   Achiev: [],
//   matches: [],
//   loading: false,
//   error: null,
// }

function MatchHist() {

  const {user_Data} = useSelector((state: RootState) => state.user);
  return (
    <div className='flex min-w-[300px] w-[85%] h-32 justify-between m-auto'>
        <div>
          <MCard/>
        </div>
          <div className='text-center m-auto text-xl medium:text-2xl'>vs</div>
        <div>
          <CardM/>
        </div>
    </div>
  )
}

export default MatchHist