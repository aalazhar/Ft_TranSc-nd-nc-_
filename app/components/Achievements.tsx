import React from 'react'
import Image from 'next/image'

type Props = {
    noBadge: string;
  };

function Achievements({noBadge}:Props) {
  return (
    <div className="h-full flex flex-col justify-between rounded-2xl w-full bg-yellow-500">
        <h1 className='text-center xLarge:text-3xl text-[#E58E27] xLarge:mt-11'>ACHIEVEMENTS</h1>
        <div className='xMedium:h-[90%] medium:w-[90%] grid grid-cols-4 gap-6  xLarge:gap-24 m-auto'>
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-3 Large:p-8 bg-[#30313E] Large:h-[150px] medium:p-5 medium:w-[90px] medium:h-[90px] Large:w-[150px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
        </div>
    </div>
  )
}

export default Achievements