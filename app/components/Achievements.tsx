import React from 'react'
import Image from 'next/image'

type Props = {
    noBadge: string;
  };

function Achievements({noBadge}:Props) {
  return (
    <div className="h-[75%] flex flex-col justify-between bg-[#30313E] border border-[#E58E27] min-h-[500px] rounded-2xl w-full">
        <h1 className='text-center h-[15%] mt-5 xLarge:text-3xl text-[#E58E27] xLarge:mt-11'>ACHIEVEMENTS</h1>
        <div className='h-[80%] grid grid-cols-3 gap-8 Large:gap-16 m-auto'>
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='xLarge:h-[100px] xLarge:w-[100px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
        </div>
    </div>
  )
}

export default Achievements