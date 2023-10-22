import React from 'react'
import Image from 'next/image'

function MCard() {
  return (

        <div className='flex h-40 w-40 m-auto'>
            <div className='flex flex-col'>
                <Image className='rounded-full' alt='' src={'/gsus.jpeg'} height={150} width={150}/>
                <div className='text-center text-slate-500 text-2xl'>name</div>
            </div>
            <div className='m-auto text-2xl pl-4'>29</div>
        </div>
    );
  
}

export default MCard