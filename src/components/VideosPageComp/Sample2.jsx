import React from 'react'
import { useRef, useEffect } from 'react'
import eyepurple from '../../assets/Svg/eyepurple.svg'

export default function Sample2() {
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        modalElement.style.top = `${buttonPosition.y}px`;
        modalElement.style.left = `${buttonPosition.x}px`;
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
    return (
        <>
            <div className="absolute z-10 w-48 h-full" ref={modalRef}>
                <div className="bg-white rounded-lg shadow-lg">

                    <div className="p-2">
                        <div className='relative flex items-center'>
                            <img src={eyepurple} className='absolute left-0 w-4 h-4'></img>
                            <h2 className="pl-10 font-normal cursor-pointer">View</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
