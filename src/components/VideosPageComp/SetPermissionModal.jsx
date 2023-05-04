import React from 'react'
import cross from '../../assets/Svg/cross.svg'
import bigline from '../../assets/Svg/bigline.svg'
import billjones from '../../assets/Svg/billjones.svg'
import ryansmith from '../../assets/Svg/ryansmith.svg'
import toggle from '../../assets/Svg/toggle.svg'
import Dropdown from './Dropdown'

export default function SetPermissionModal(props) {
    const cancelClick = () => {
        props.closePermissionModal();
    }

    return (
        <>
            <div className="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-full">
                <div className="bg-white w-[60%] md:w-[35%] rounded-lg shadow-lg">
                    <div className="p-2 lg:p-6">
                        <div className='relative flex items-center'>
                            <h2 className="text-sm font-normal lg:text-lg ">Set premissions for “education” </h2>
                            <img src={cross} className='absolute right-0 w-3 h-3 cursor-pointer lg:w-5 lg:h-5' onClick={cancelClick}></img>
                        </div>
                    </div>

                    <img src={bigline}></img>

                    <div className='relative flex p-2 lg:p-5'>
                        <img src={billjones} className='absolute w-7 h-7 lg:w-10 lg:h-10 left-3 lg:left-5'></img>
                        <div className='flex flex-col ml-10 lg:ml-12'>
                            <p className='text-sm font-normal lg:text-md'>Bill Jones</p>
                            <p className='text-[#A0A0A0] font-light text-[10px] lg:text-xs'>billyjones1997@domain.com</p>
                        </div>
                        <p className='absolute font-normal right-5 lg:text-xs text-[10px]'>Organization Owner</p>
                    </div>

                    <img src={bigline}></img>

                    <div className='relative flex p-2 lg:p-5'>
                        <img src={ryansmith} className='absolute w-7 h-7 lg:w-10 lg:h-10 lg:left-5 left-3'></img>
                        <div className='flex flex-col ml-10 lg:ml-12'>
                            <p className='text-sm font-normal lg:text-md'>Ryan Smith</p>
                            <p className='text-[#A0A0A0] font-light text-[10px] lg:text-xs'>ryansmith1990@domain.com</p>
                        </div>
                        <img src={toggle} className='absolute w-4 h-4 right-4 lg:w-7'></img>
                        <div className='absolute w-14 lg:right-12 right-5 lg:top-4 top-1'>
                            <Dropdown />
                        </div>

                    </div>

                    <div className='flex justify-center gap-5 mt-[80%] mb-4 lg:mt-56 lg:mb-5 lg:gap-7'>
                        <button className='w-16 lg:w-32 h-5 lg:h-10 text-[#94A2F2] bg-white outline outline-[#94A2F2] rounded-sm font-normal' onClick={cancelClick}>Cancel</button>
                        <button className='w-16 lg:w-32 text-white bg-[#94A2F2] rounded-sm'>Save</button>
                    </div>


                </div>

            </div>

        </>
    )
}
