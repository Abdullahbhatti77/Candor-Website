import React from 'react'
import downarrow from '../../assets/Svg/downarrow.svg'
import { useState } from 'react'

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="inline-block">
                <div>
                    <button
                        type="button"
                        className="inline-flex lg:w-full text-black border border-gray-300 rounded-sm shadow-sm bg-[#F5F5F5] relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="pr-3 lg:text-[10px] text-[7px]">Reader</span>
                        <img src={downarrow} className="absolute right-0 lg:w-2 lg:h-2 lg:top-1 top-1 w-2 h-1" />
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute right-0 w-48 p-1 origin-top-right bg-white rounded-md shadow-lg lg:p-3 lg:w-80">
                        <div className='flex flex-col gap-2'>
                            <div>
                                <p className='text-xs font-normal lg:text-sm'>Reader</p>
                                <p className='text-[#A0A0A0] font-light text-xs lg:text-sm'>Can view the video</p>
                            </div>
                            <div>
                                <p className='text-xs font-normal lg:text-sm'>Writer</p>
                                <p className='text-[#A0A0A0] font-light text-xs lg:text-sm'>Can only view candor video and interactions and send
                                    replies</p>
                            </div>
                            <div>
                                <p className='text-xs font-normal lg:text-sm'>Creator</p>
                                <p className='text-[#A0A0A0] font-light text-xs lg:text-sm'>Can only view candor video and interactions and send
                                    replies, and make changes to the candor video</p>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    )
}
