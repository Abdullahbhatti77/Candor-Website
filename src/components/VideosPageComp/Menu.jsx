import React from 'react'
import { useState, useRef } from 'react'
import cross from '../../assets/Svg/cross.svg'
import bigline from '../../assets/Svg/bigline.svg'
import eyepurple from '../../assets/Svg/eyepurple.svg'
import rename from '../../assets/Svg/rename.svg'
import interactions from '../../assets/Svg/interactions.svg'
import deleteicon from '../../assets/Svg/deleteicon.svg'
import document1 from '../../assets/Svg/document1.svg'
import duplicate from '../../assets/Svg/duplicate.svg'
import share from '../../assets/Svg/share.svg'
import TrashModal from './TrashModal'
import RenameModal from './RenameModal'
import { useEffect } from 'react'

const Menu=({ buttonPosition, closeMenu })=>{
    const [trashModalVisible, setTrashModalVisible] = useState(false);
    const [renameModalVisible, setRenameModalVisible] = useState(false);

    const modalRef = useRef(null);

    // useEffect(() => {
    //     const modalElement = modalRef.current;
    //     modalElement.style.top = `${buttonPosition.y}px`;
    //     modalElement.style.left = `${buttonPosition.x}px`;

    //     const handleClickOutside = (event) => {
    //         if (modalElement && !modalElement.contains(event.target)) {
    //             closeMenu();
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [closeMenu, buttonPosition]);
    useEffect(() => {
        const modalElement = modalRef.current;
        modalElement.style.top = `${buttonPosition.y}px`;
    
        // Set left position based on screen width
        if (window.innerWidth <= 640) {
            modalElement.style.left = '165px';
        } else {
            modalElement.style.left = `${buttonPosition.x}px`;
        }
    
        const handleClickOutside = (event) => {
            if (modalElement && !modalElement.contains(event.target)) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeMenu, buttonPosition]);
    

    const openTrashModal = () => {
        setTrashModalVisible(true);
    };
    const closeTrashModal = () => {
        setTrashModalVisible(false);
    }
    const openRenameModal = () => {
        setRenameModalVisible(true);
    }
    const closeRenameModal = () => {
        setRenameModalVisible(false);
    }

    return (
        <>
            {/* <div className="fixed z-10 w-48 h-full md:w-56 top-56 md:pl-10"> */}
            <div className="absolute z-10 w-48 h-full" ref={modalRef}>
                <div className="bg-white rounded-lg shadow-lg">

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={eyepurple} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer">View</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={interactions} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer">See interactions</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={rename} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer" onClick={openRenameModal}>Rename</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={document1} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer">Move to folder</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={duplicate} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer">Duplicate</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={share} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer">Share</h2>
                        </div>
                    </div>

                    <img src={bigline} className='h-1'></img>

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={deleteicon} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer" onClick={openTrashModal}>Delete</h2>
                        </div>
                    </div>
                </div>
            </div>
            {console.log("BVAL", trashModalVisible)}
            {trashModalVisible && <TrashModal closeTrashModal={closeTrashModal} />}
            {renameModalVisible && <RenameModal closeRenameModal={closeRenameModal} />}
        </>
    )
};
export default Menu;
