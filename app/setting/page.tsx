import Navbar from "../components/Navbar"
import Image from "next/image"
import { FiEdit2 } from "react-icons/fi";

export default function setting() {

  return (
          <div className="flex flex-col text-slate-100 h-full min-h-screen min-w-screen w-full">
            <div className="h-16 xLarge:h-24"><Navbar pageName="Profile" /></div>
            <div className="flex items-center gap-12 min-h-[1200px] xLarge:h-[1200px] min-w-[1000px] m-4">
              <div className="flex flex-col w-[40%] h-[65%] justify-between">
                <div className="flex min-w-[600px] justify-center w-[40%] mx-auto">
                  <Image className='rounded-full border-4 border-[#E58E27]' alt='' src={'/gsus.jpeg'} height={250} width={250}/>
                  <label id="file-input-label" htmlFor="file-input" className="flex mt-56 text-[#E58E27]">
                      <FiEdit2 className="text-3xl"/>
                      <div className="text-2xl">image Edit</div>
                  </label>
                  <input type="file" id="file-input" className="hidden"/>
                </div>
                <div className="flex justify-between h-24 w-[50%] mx-auto  min-w-[500px] rounded-3xl bg-[#323232]">
                    <div className="text-[#E58E27] text-2xl m-auto">Username</div>
                    <div className="text-slate-400 text-2xl m-auto w-[160px]">iel-sma</div>
                </div>
                <div className="flex justify-between h-24 w-[50%] mx-auto  min-w-[500px] rounded-3xl bg-[#323232]">
                    <div className="text-[#E58E27] text-2xl m-auto">Nick name</div>
                    <div className="m-auto bg-[#323232]">
                      <input type="text" placeholder="MyUserName" className="border-none bg-none placeholder-slate-400 bg-[#323232] outline-0 w-[160px] text-2xl" />
                    </div>
                </div>
                <div className="flex justify-between h-24 w-[50%] mx-auto  min-w-[500px] rounded-3xl bg-[#323232]">
                    <div className="text-[#E58E27] text-2xl m-auto">Enable 2FA</div>
                    <div className="m-auto w-[160px] bg-[#323232]">
                      <label htmlFor="toggleCheck" className="w-[180px] h-20">
                        <input type="checkbox" id="toogleCheck" className="h-8 rounded-full appearance-none w-16 bg-slate-500 opacity-80 checked:bg-slate-200 transition duration-300 relative" />
                        {/* <span className="w-5 h-5 bg-red-400 rounded-full absolute top-1 left-1"></span>
                        <span className="w-20 h-10 bg-slate-400 rounded-full absolute top-1 left-11"></span> */}
                      </label>
                    </div>
                </div>
                <div className="h-24 w-[50%] mx-auto  min-w-[500px] rounded-3xl bg-[#323232]"></div>

              </div>
              <div className=" m-auto min-w-[600px]">
                <Image className='' alt='' src={'/pingPaddles.png'} height={1200} width={1200}/>
              </div>
            </div>
          </div>

  )
}