import Image from 'next/image'
import React from 'react'
import MCard from './MCard'
import CardM from './CardM'

function MatchHist() {
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