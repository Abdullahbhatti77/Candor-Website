import React from 'react'
import { useState } from 'react'
import bigline from '../../assets/Svg/bigline.svg'
import education from '../../assets/Svg/education.svg'
import cross from '../../assets/Svg/cross.svg'

export default function NewVideoModal() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const closeModal = () => {
        setModalVisible(false);
    }
    const openModal2 = () => {
        setModalVisible2(true);
        setModalVisible(false);
    }
    return (
        <>
                    {/* <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-gray-500 opacity-50"></div> */}
                    {/* modal */}
                    <div className="fixed top-0 right-0 flex items-center justify-center w-full h-full">
                        <div className="bg-white w-11/12 md:w-[35%] rounded-lg shadow-lg">

                            <div className="p-6">
                                <div className='relative'>
                                    <h2 className="text-lg font-normal">Add a new video to...</h2>
                                    <img src={cross} className='absolute right-0 w-5 h-5 cursor-pointer bottom-1' onClick={closeModal}></img>

                                </div>
                            </div>

                            <img src={bigline}></img>

                            <div className='p-6'>
                                <div className='relative'>
                                    <img src={education} className='absolute left-0 w-5 h-5'></img>
                                    <h2 className='pl-10 font-normal cursor-pointer' onClick={openModal2}>Organization folder</h2>
                                    <h2 className='pl-10 text-[#A0A0A0] font-normal cursor-pointer'>Everyone in your organization will have access</h2>
                                </div>
                            </div>

                            <img src={bigline}></img>

                            <div className='flex flex-col gap-5 p-6'>
                                <div className='relative'>
                                    <img src={education} className='absolute w-5 h-5 left-0 color-[#3A37A6]'></img>
                                    <h2 className='pl-10 font-normal cursor-pointer' onClick={openModal2}>Education</h2>
                                </div>
                                <div className='relative'>
                                    <img src={education} className='absolute w-5 h-5 left-0 color-[#3A37A6]'></img>
                                    <h2 className='pl-10 font-normal cursor-pointer' onClick={openModal2}>Taxes</h2>
                                </div>
                            </div>


                        </div>
                    </div>
        </>
    )
}
