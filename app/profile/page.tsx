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
      <div className="flex gap-12 min-h-[1200px] xLarge:h-[1200px] min-w-[1000px] m-4 ">
        <div className="w-[45%] h-[100%] flex flex-col gap-6">
          <div className="flex w-full h-[30%] rounded-lg mb-2 mx-auto">
            <div className="min-w-[30%] w-72 h-full ">
              <div className="grid h-full w-full content-center ">
                <Image className='rounded-full border-4 mx-auto border-[#E58E27]' alt='' src={'/gsus.jpeg'} height={250} width={250}/>

                {/* <Image className='shadow-neon-light' layout="fill" objectFit="contain" src={'/gsus.jpeg'} alt="PING PONG" /> */}
              </div>
            </div>
            <div className="flex flex-col justify-between text-[9px] md:text-[16px] w-[90%] rounded-2xl min-w-[300px] h-full">
              <div className="flex xLarge:text-2xl justify-between w-full p-5 mx-auto bg-[#30313E] rounded-2xl">
                <div>Name :</div>
                <div>{user.name}</div>
              </div>
              <div className="flex xLarge:text-2xl justify-between w-full p-5 mx-auto bg-[#30313E] rounded-2xl">
                <div>User Name :</div>
                <div>{user.userName}</div>
              </div>
              <div className="flex xLarge:text-2xl justify-between w-full p-5 mx-auto bg-[#30313E] rounded-2xl">
                <div>Rank :</div>
                <div>{user.rank}</div>
              </div>
              <div className="flex xLarge:text-2xl justify-between w-full p-5 mx-auto bg-[#30313E] rounded-2xl">
                <div>Level :</div>
                <div>{user.level}</div>
              </div>
              {/* <div className="flex flex-col justify-between h-[65%] text-lg xLarge:text-2xl m-auto text-slate-500">
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
              </div> */}
            </div>
          </div>
          <Achievements noBadge={user.pathImg}/>
        </div>
        <div className="h-[100%] min-w-[50%] bg-[#30313E] rounded-2xl">
          <h1 className="m-auto xLarge:text-3xl h-[10%] text-center pt-9 text-[#E58E27]">LAST MATCH HISTORY</h1>
          <div className="flex flex-col h-[90%] w-[100%] text-[#E58E27] px-3 min-w-xs">
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