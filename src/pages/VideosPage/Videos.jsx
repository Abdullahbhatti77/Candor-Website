import React from 'react'
import { useState, useEffect, useRef } from 'react'
import videosimage from '../../assets/Svg/videosimage.svg'
import threedots from '../../assets/Svg/threedots.svg'
import horiline from '../../assets/Svg/horizontalline.svg'
import folder from '../../assets/Svg/folder.svg'
import education from '../../assets/Svg/education.svg'
import trash from '../../assets/Svg/trash.svg'
import videologo from '../../assets/Svg/videologo.svg'
import plus from '../../assets/Svg/plus.svg'
import chatlogo from '../../assets/Svg/chatlogo.svg'
import cross from '../../assets/Svg/cross.svg'
import bigline from '../../assets/Svg/bigline.svg'
import Menu from '../../components/VideosPageComp/Menu'
import ThreeDotsMenu from '../../components/VideosPageComp/ThreeDotsMenu'
// import NewVideoModal from '../../components/VideosPageComp/NewVideoModal'

export default function Videos() {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [dotsMenuVisible, setDotsMenuVisible] = useState(false);
    const dotsMenuRef = useRef(null);
    const menuRef = useRef(null);
    // const [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             closeMenu();
    //         }
    //     };
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [menuRef]);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
    //         closeThreedostMenu();
    //       }
    //     };
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     };
    //   }, [dotsMenuRef]);

    const openModal = () => {
        setModalVisible(true);
        setDotsMenuVisible(false);
        setMenuVisible(false);
    }
    const closeModal = () => {
        setModalVisible(false);
    }

    const openModal2 = () => {
        setModalVisible2(true);
        setModalVisible(false);
        setDotsMenuVisible(false);
        setMenuVisible(false);
    }
    const closeModal2 = () => {
        setModalVisible2(false);
    }

    const openModal3 = () => {
        setModalVisible3(true);
        setModalVisible2(false);
        setDotsMenuVisible(false);
        setMenuVisible(false);
    }
    const closeModal3 = () => {
        setModalVisible3(false);
    }
    const openMenu = () => {
        setMenuVisible(true);
        setDotsMenuVisible(false);
    }
    const closeMenu = () => {
        setMenuVisible(false);
    }
    const openThreedostMenu = () => {
        setDotsMenuVisible(true);
        setMenuVisible(false);
    }
    const closeThreeDotsMenu = () => {
        setDotsMenuVisible(false);
    }
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [buttonPosition2, setButtonPosition2] = useState({ x: 0, y: 0 });
    const handleMenuClick = (event) => {
        setMenuVisible(true);
        setButtonPosition({ x: event.clientX, y: event.clientY });
    };
    const threeDotsMenuClick = (event) => {
        setDotsMenuVisible(true);
        setButtonPosition2({ x: event.clientX, y: event.clientY });
    };

    return (
        <>
            <div className="flex flex-col h-screen lg:flex-row">
                {/* Sidebar */}
                <div className="w-full text-black bg-white shadow-lg lg:w-64">
                    <div className="p-3">
                        {/* Chat Menu */}
                        <div className="relative flex items-center rounded-lg">
                            <img src={plus} alt="User" className="absolute w-8 h-8 rounded-full" />
                            <div className="pl-10 font-normal">New Video</div>
                            <img src={folder} alt="User" className="absolute right-0 w-4 h-4" />
                        </div>
                        <img src={horiline} className='mt-3'></img>

                        <div className="flex flex-col gap-10 mt-7">

                            <div className="relative flex items-center rounded-lg">
                                <img src={videologo} alt="User" className="absolute w-5 h-5 rounded-full" />
                                <div className="pl-10 font-normal cursor-pointer" onClick={handleMenuClick}>Main Greeting</div>
                                <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={threeDotsMenuClick} />
                            </div>
                            <div className="relative flex items-center rounded-lg">
                                <img src={videologo} alt="User" className="absolute w-5 h-5 rounded-full" />
                                <div className="pl-10 font-normal cursor-pointer" onClick={handleMenuClick}>Text Messages Cam...</div>
                                <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={threeDotsMenuClick} />
                            </div>
                            <div className="relative flex items-center rounded-lg">
                                <img src={education} alt="User" className="absolute w-5 h-5 rounded-full" />
                                <div className="pl-10 font-normal cursor-pointer" onClick={handleMenuClick}>Education</div>
                                <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={threeDotsMenuClick} />
                            </div>
                            <div className="relative flex items-center rounded-lg">
                                <img src={education} alt="User" className="absolute w-5 h-5 rounded-full" />
                                <div className="pl-10 font-normal cursor-pointer" onClick={handleMenuClick}>Taxes</div>
                                <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={threeDotsMenuClick} />
                            </div>
                            <div className="relative flex items-center rounded-lg">
                                <img src={trash} alt="User" className="absolute w-5 h-5 rounded-full" />
                                <div className="pl-10 font-normal cursor-pointer" onClick={openMenu}>Trash</div>
                                <img src={threedots} alt="User" className="absolute right-0 h-5 cursor-pointer" onClick={openThreedostMenu} />
                            </div>
                        </div>

                        {menuVisible && (
                            <div ref={menuRef}>
                                <Menu closeMenu={closeMenu} buttonPosition={buttonPosition}/>
                            </div>
                        )}
                    
                        {dotsMenuVisible && (
                            <div ref={dotsMenuRef}>
                                <ThreeDotsMenu closeThreeDotsMenu={closeThreeDotsMenu} buttonPosition2={buttonPosition2}/>
                            </div>
                        )}

                    </div>

                </div>

                {/* Screen */}

                <div className="relative flex flex-col items-center justify-center flex-1 shadow-lg md:p-48">
                    <img src={videosimage} alt="Placeholder" className="mb-4" onClick={openModal} />
                    <div className="text-2xl font-medium text-[#3A37A6]">Select or Create a Candor Video</div>
                    <img src={chatlogo} className='absolute bottom-0 right-0 w-16 h-16'></img>
                </div>

                {/* Modal */}
                {modalVisible &&
                    <>
                        <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full">
                            <div className="bg-white w-72 md:w-[35%] rounded-lg shadow-lg">

                                <div className="p-6">
                                    <div className='relative'>
                                        <h2 className="text-lg font-normal">Add a new video to...</h2>
                                        <img src={cross} className='absolute bottom-0 right-0 w-4 h-4 cursor-pointer' onClick={closeModal}></img>

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

                }

                {/* modal 2 */}
                {modalVisible2 &&
                    <>
                        <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full">
                            <div className="bg-white w-72 md:w-[35%] rounded-lg shadow-lg">

                                <div className="p-6">
                                    <div className='relative flex items-center'>
                                        <h2 className="text-lg font-normal">Let's get started</h2>
                                        <img src={cross} className='absolute right-0 w-4 h-4 cursor-pointer' onClick={closeModal2}></img>
                                    </div>
                                </div>

                                <img src={bigline}></img>

                                <div className='flex flex-col p-6 gap-7'>
                                    <div className='flex'>
                                        <input type="text" placeholder='Name your video...' className="font-light block w-full px-3 py-2 bg-[#F5F5F5] border rounded-md text-sm shadow-sm" />
                                    </div>
                                    <div className='flex justify-center gap-5'>
                                        <button className='w-32 h-10 text-[#94A2F2] bg-white outline outline-[#94A2F2] rounded-sm font-normal' onClick={closeModal2}>Cancel</button>
                                        <button className='w-32 text-white bg-[#94A2F2] rounded-sm' onClick={openModal3}>Create Video</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                }

                {/* modal 3 */}
                {modalVisible3 &&
                    <>
                        <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full">
                            <div className="bg-white w-72 md:w-[35%] rounded-lg shadow-lg">

                                <div className="p-6">
                                    <div className='relative flex items-center'>
                                        <h2 className="text-lg font-normal">Create a new folder</h2>
                                        <img src={cross} className='absolute right-0 w-4 h-4 cursor-pointer' onClick={closeModal3}></img>
                                    </div>
                                </div>

                                <img src={bigline}></img>

                                <div className='flex flex-col p-6 gap-7'>
                                    <div className='flex'>
                                        <input type="text" placeholder='Name your new folder...' className="font-light block w-full px-3 py-2 bg-[#F5F5F5] border rounded-md text-sm shadow-sm" />
                                    </div>
                                    <div className='flex justify-center gap-5'>
                                        <button className='w-32 h-10 text-[#94A2F2] bg-white outline outline-[#94A2F2] rounded-sm font-normal' onClick={closeModal3}>Cancel</button>
                                        <button className='w-32 text-white bg-[#94A2F2] rounded-sm'>Create</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                }

            </div>


        </>
    )
}
