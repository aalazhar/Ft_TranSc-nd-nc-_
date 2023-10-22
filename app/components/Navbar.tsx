import Link from 'next/link';
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
    pageName: string
}

export default function Navbar({pageName}:Props) {
  return (
    <div className='flex justify-between min-w-[640px] h-16 xLarge:h-24 mx-6'>
      <div className='flex w-[50%] text-[#E58E27] justify-normal items-center'>
        <h3 className='md:pr-8 pr-3 md:ml-3 xLarge:text-xl'>{pageName}</h3>
        <div className='relative'>
          <div>
            <input type='text' placeholder='Search' className='text-orange-100 pl-1 py-1 text-sm xLarge:text-md focus:outline-none xLarge:w-[400px] md:w-[300px] xLarge:text-lg w-[300px] border rounded-lg bg-transparent xLarge:py- border-[#E58E27]'></input>
          </div>
          <div className='absolute top-1 md:left-[270px] lg:left-[270px] xLarge:left-[368px] left-[270px] text-2xl xLarge:text-3xl'><AiOutlineSearch/></div>
        </div>
      </div>
      <div className='flex w-[40%] text-[#E58E27] justify-end items-center'>
        <Link href={'/'}><h1 className="text-[#E58E27] mr-2 md:mr-8 font-sans text-md md:text-lg font-bold flex-none xLarge:text-xl">AREA 420</h1></Link>
        <Link href={'/game'} className=' py-1 px-6 xLarge:px-8 bg-[#E58E27] text-sm text-slate-100 rounded-sm flex-none xLarge:text-xl  ml-8'>PLAY</Link>
      </div>
    </div>
  )

}