import React from 'react'
import Image from 'next/image'

function CardM() {
  return (

        <div className='flex h-40 w-40 m-auto'>
            <div className='m-auto pr-4 text-2xl'>12</div>
            <div >
                <Image className='rounded-full m-auto' alt='' src={'/gsus.jpeg'} height={150} width={150}/>
                <div className='text-center text-2xl text-slate-500'>name</div>
            </div>
        </div>
    );
  
}

export default CardM