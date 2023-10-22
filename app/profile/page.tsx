'use client'
import Navbar from "../components/Navbar"
import Image from "next/image"
import Sidebar from "../components/Sidebar"
import { useState, useEffect } from "react"
import UserProvider, { User, userContext } from "../Contexts/userContext"
import Test from "../ssss/Test"
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from "../store/userStore"
import Achievements from "../components/Achievements"
import MatchHist from "../components/MatchHist"

export default function Pra() {

  const user = useSelector((state: any) => state.user2)

  const disp = useDispatch()

  // localStorage.setItem('user', JSON.stringify({ name: 'anas jaidi', userName: ' mqwed khou anas', rank: 1000000000, level: 100000 }))
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(true)
 
  // useEffect(() => {
  //   fetch('http://10.11.3.8:3000/users/GetUsers')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  return (




    <div className="flex flex-col h-full min-h-screen min-w-screen">
      <div className="h-16 xLarge:h-24"><Navbar pageName="Profile" /></div>
      <div className="flex gap-6 min-h-[1200px] Large:min-h-[1000px] xLarge:h-[1200px] min-w-[1000px] m-4 ">
        <div className="w-[35%] h-[100%] flex flex-col gap-6">
          <div className="flex w-full h-[25%] rounded-lg mb-2 mx-auto">
            <div className="w-[40%] h-full relative ">
              <div className="grid h-96 content-center min-w-[200px]">
                <Image className='shadow-neon-light' layout="fill" objectFit="contain" src={'/batman.png'} alt="PING PONG" />
              </div>
            </div>
            <div className="flex text-[9px] border border-[#E58E27] md:text-[16px] w-[60%] rounded-2xl  min-w-[200px] bg-[#30313E] h-full">
              <div className="flex flex-col justify-between h-[65%] text-lg xLarge:text-2xl m-auto text-slate-500">
                <div className="md:py-2">Name : </div>
                <div className="md:py-2">User Name :</div>
                <div className="md:py-2">Rank :</div>
                <div className="md:py-2">Level :</div>
              </div>
              <div className="flex flex-col justify-between h-[65%] text-lg xLarge:text-2xl m-auto text-white">
                <div className="md:py-2">{user.name}</div>
                <div className="md:py-2">{user.userName}</div>
                <div className="md:py-2">{user.rank}</div>
                <div className="md:py-2">{user.level}</div>
              </div>
            </div>
          </div>
          <Achievements noBadge={user.pathImg}/>
        </div>
        <div className="flex justify-between h-[100%] bg-[#30313E] border border-[#E58E27] w-full rounded-2xl ">
          {/* <h1 className="m-auto xLarge:text-3xl text-[#E58E27]">NO MATCH</h1> */}
          <div className="flex flex-col h-full w-[50%] text-[#E58E27] min-w-xs mx-24">
            <MatchHist/>
            <MatchHist/>
            <MatchHist/>
            <MatchHist/>
            <MatchHist/>
          </div>
          <div className="flex flex-col h-full w-[50%] text-[#E58E27] min-w-xs mx-24">
            <MatchHist/>
            <MatchHist/>
            <MatchHist/>
            <MatchHist/>
            <MatchHist/>
          </div>
        </div>
      </div>

    </div>


  )
}