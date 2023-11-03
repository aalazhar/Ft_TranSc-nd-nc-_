import Image from 'next/image'
import React from 'react'
import MCard from './MCard'
import CardM from './CardM'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function MatchHist() {

  const {entity} = useSelector((state: RootState) => state.user);
  return (
    <div className='flex min-w-[300px] w-[85%] h-32 justify-between m-auto'>
        <div>
          <MCard login={entity?.userData?.login}/>
        </div>
          <div className='text-center m-auto text-xl medium:text-2xl'>vs</div>
        <div>
          <CardM/>
        </div>
    </div>
  )
}

export default MatchHist