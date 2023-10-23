import React from 'react'
import Image from 'next/image'

type Props = {
    noBadge: string;
  };

function Achievements({noBadge}:Props) {
  return (
    <div className="h-[70%] flex flex-col justify-between min-h-[500px] rounded-2xl w-full">
        <h1 className='text-center h-[15%] mt-5 xLarge:text-3xl text-[#E58E27] xLarge:mt-11'>ACHIEVEMENTS</h1>
        <div className='h-[80%] grid grid-cols-4 gap-8 Large:gap-24 m-auto'>
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl xLarge:p-8 xLarge:bg-[#30313E] xLarge:h-[150px] xLarge:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
        </div>
    </div>
  )
}

export default Achievements