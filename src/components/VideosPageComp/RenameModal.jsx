import React from 'react'
import cross from '../../assets/Svg/cross.svg'
import bigline from '../../assets/Svg/bigline.svg'

export default function RenameModal(props) {
    const cancelClick = () => {
        props.closeRenameModal();
    }
    
    return (
        <>
            <div className="absolute top-0 right-0 z-10 flex items-center justify-center w-full h-full">
                <div className="bg-white w-72 md:w-[35%] rounded-lg shadow-lg">

                    <div className="p-6">
                        <div className='relative flex items-center'>
                            <h2 className="text-lg font-normal">Rename "main greeting"</h2>
                            <img src={cross} className='absolute right-0 w-4 h-4 cursor-pointer' onClick={cancelClick}></img>
                        </div>
                    </div>

                    <img src={bigline}></img>

                    <div className='flex flex-col p-6 gap-7'>
                        <div className='flex'>
                            <input type="text" placeholder='Main Greeting' className="font-light block w-full px-3 py-2 bg-[#F5F5F5] border rounded-md text-sm shadow-sm" />
                        </div>
                        <div className='flex justify-center gap-5'>
                            <button className='w-32 h-10 text-[#94A2F2] bg-white outline outline-[#94A2F2] rounded-sm font-normal' onClick={cancelClick}>Cancel</button>
                            <button className='w-32 text-white bg-[#94A2F2] rounded-sm'>Rename</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
