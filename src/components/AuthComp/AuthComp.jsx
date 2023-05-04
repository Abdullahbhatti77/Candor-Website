import React from 'react'
import ImageComp from '../ImageComp/ImageComp'
// import { Logos } from '../../assets'
const AuthComp = () => {
  return (
    <div className='w-full flex'>
        <div className='w-[50%] bg-[#94A2F2] h-[1200px]'>
            <ImageComp src={Logos.Login.default} />
        </div>
        <div className='w-[50%]'></div>
    </div>
  )
}

export default AuthComp