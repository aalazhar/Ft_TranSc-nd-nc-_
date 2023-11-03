import React from 'react'
import Image from 'next/image'

type Props = {
    noBadge: string;
  };

function Achievements({noBadge}:Props) {
  return (
    <div className="xMedium:h-[60%] Large:h-full h-[50%] flex m-auto items-center mt-7 medium:mt-0 flex-col justify-between rounded-2xl w-full">
        <h1 className='text-center xLarge:text-3xl p-5 xLarge:p-0 text-[#E58E27] xLarge:mt-11'>ACHIEVEMENTS</h1>
        <div className='xMedium:h-[90%] medium:w-[90%] grid content-center grid-cols-3 xLarge:grid-cols-4 gap-4 medium:gap-6 w-full h-full xLarge:gap-20'>
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
            <Image className='rounded-2xl p-5 Large:p-8 bg-[#323232] mx-auto Large:h-[140px] medium:p-5 w-[90px] h-[90px] medium:w-[90px] medium:h-[90px] xMedium:w-[110px] xMedium:h-[110px] Large:w-[140px]' layout='Responsive' width={70} height={70} src={noBadge} alt="PING PONG" />
        </div>
    </div>
  )
}

export default Achievements