import React from 'react'
import Image from 'next/image'

function MCard() {
  return (

        <div className='flex h-32 xMedium:h-40 w-40 m-auto'>
            <div className='flex flex-col'>
                <Image className='rounded-full h-16 w-16  medium:h-28 medium:w-28' alt='' src={'/gsus.jpeg'} height={150} width={150}/>
                <div className='text-center text-slate-500 medium:text-2xl'>name</div>
            </div>
            <div className='m-auto medium:text-2xl pl-4'>29</div>
        </div>
    );
  
}

export default MCard