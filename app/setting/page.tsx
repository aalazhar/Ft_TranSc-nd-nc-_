'use client'
import axios from "axios";
import Navbar from "../components/Navbar"
import Image from "next/image"
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";

export default function setting() {

  const [imageD, setImageD] = useState<File | null>(null);

  const uploadImage = () => {
  if (imageD instanceof File){  
      console.log(imageD);
      const formData = new FormData();
      formData.append("file", imageD);
      formData.append("upload_preset", "jguqci62");
      console.log("__________----");
      console.log(formData);
      console.log("__________----");
      axios.post("https://api.cloudinary.com/v1_1/dvmxfvju3/image/upload", formData
          ).then((res) => {console.log(res);
          })
    }
  }

  return (
          <div className="flex flex-col text-slate-100 h-full min-h-screen min-w-screen w-full">
            <div className="h-16 xLarge:h-24"><Navbar pageName="Profile" /></div>
            <div className="flex items-center h-full xMedium:h-[1200px] medium:min-w-[1000px] gap-12 m-4">
              <div className="flex flex-col w-[40%] Large:h-[63%] xMedium:h-[57%] min-h-[500px] h-[40%] justify-between">
                <div className="flex xMedium:min-w-[600px] justify-center w-[400px] mx-auto">
                  <Image className='rounded-full border-4 w-48 h-48 xMedium:w-[250px] xMedium:h-[250px] border-[#E58E27]' alt='' src={'/gsus.jpeg'} height={250} width={250}/>
                  <label id="file-input-label" htmlFor="file-input" className="flex xMedium:mt-56 cursor-pointer text-[#E58E27]">
                      <FiEdit2 className="text-3xl"/>
                      <div className="xMedium:text-2xl text-xl">image Edit</div>
                  </label>
                  <input type="file" id="file-input" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ 
                    const tmp = e.target.files?.[0];
                    if (tmp)                    
                      setImageD(tmp);
                    else 
                      setImageD(null);}
                    } 
                    className="hidden"/>
                </div>
                <div className="flex justify-between xMedium:h-[5rem] xMedium:text-2xl Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] rounded-3xl bg-[#323232]">
                    <div className="text-[#E58E27] text-xl xMedium:text-2xl m-auto">Username</div>
                    <div className="text-slate-400 text-xl xMedium:text-2xl m-auto w-[160px]">iel-sma</div>
                </div>
                <div className="flex justify-between xMedium:h-[5rem] xMedium:text-2xl Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] rounded-3xl bg-[#323232]">
                    <div className="text-[#E58E27] text-xl xMedium:text-2xl m-auto">Nick name</div>
                    <div className="m-auto bg-[#323232]">
                      <input type="text" placeholder="MyUserName" className="border-none bg-none placeholder-slate-400 bg-[#323232] outline-0 w-[160px] text-xl xMedium:text-2xl" />
                    </div>
                </div>
                <div className="flex justify-between xMedium:h-[5rem] xMedium:text-2xl Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] rounded-3xl bg-[#323232]">
                    <div className="text-[#E58E27] text-xl xMedium:text-2xl m-auto">Enable 2FA</div>
                    <div className="m-auto w-[160px] bg-[#323232]">
                      <label htmlFor="toggleCheck" className="w-[180px] h-20">
                        <input type="checkbox" id="toogleCheck" className="h-8 rounded-full appearance-none w-16 bg-slate-500 opacity-80 checked:bg-slate-200 transition duration-300 relative" />
                        {/* <span className="w-5 h-5 bg-red-400 rounded-full absolute top-1 left-1"></span>
                        <span className="w-20 h-10 bg-slate-400 rounded-full absolute top-1 left-11"></span> */}
                      </label>
                    </div>
                </div>
                <button onClick={uploadImage} className="xMedium:h-[5rem] Large:h-24 h-16 w-[400px] mx-auto  xMedium:min-w-[500px] border-x-2 border-[#E58E27] rounded-3xl bg-[#323232] text-slate-100 text-xl xMedium:text-2xl hover:bg-[#E58E27] hover:opacity-80 transition duration-700">SAVE</button>

              </div>
              <div className=" m-auto xMedium:min-w-[600px] hidden medium:block">
                <Image className='' alt='' src={'/pingPaddles.png'} height={1200} width={1200}/>
              </div>
            </div>
          </div>

  )
}