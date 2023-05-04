import React from 'react'
import newvideo from '../../assets/Svg/newvideo.svg'
import delete1 from '../../assets/Svg/deleteicon.svg'
import setpermission from '../../assets/Svg/setpermission.svg'
import renamefolder from '../../assets/Svg/renamefolder.svg'
import bigline from '../../assets/Svg/bigline.svg'
import { useState,useRef,useEffect } from 'react'
import SetPermissionModal from './SetPermissionModal'


export default function ThreeDotsMenu({ buttonPosition2,  closeThreeDotsMenu}) {
    const modalRef = useRef(null);
    const [permissionModal, setPermissionModal] = useState(false)

    const openPermissionModal = () => {
        setPermissionModal(true)
    }
    const closePermissionModal = () => {
        setPermissionModal(false)
    }
    useEffect(() => {
        const modalElement = modalRef.current;
        modalElement.style.top = `${buttonPosition2.y}px`;
        modalElement.style.left = `155px`;

        const handleClickOutside = (event) => {
            if (modalElement && !modalElement.contains(event.target)) {
                closeThreeDotsMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeThreeDotsMenu, buttonPosition2]);

    return (
        <>
            <div className="absolute w-48 h-full z-10" ref={modalRef}>
                <div className="bg-white rounded-lg shadow-lg">

                    <div className="p-3">
                        <div className='relative flex items-center'>
                            <img src={newvideo} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-7 font-normal cursor-pointer">New Video</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-3">
                        <div className='relative flex items-center'>
                            <img src={renamefolder} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-7 font-normal cursor-pointer">Rename Folder</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-3">
                        <div className='relative flex items-center'>
                            <img src={setpermission} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-7 font-normal cursor-pointer" onClick={openPermissionModal}>Set Permissions</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-3">
                        <div className='relative flex items-center'>
                            <img src={delete1} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-7 font-normal cursor-pointer">Delete</h2>
                        </div>
                    </div>

                </div>
            </div>

            {permissionModal && <SetPermissionModal closePermissionModal={closePermissionModal}/>}
        </>
    )
}
