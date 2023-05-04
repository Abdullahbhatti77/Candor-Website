import React from 'react'
import cross from '../../assets/Svg/cross.svg'
import bigline from '../../assets/Svg/bigline.svg'
import bgbrown from '../../assets/Svg/brownbg.svg'
import videocircle from '../../assets/Svg/videocircle.svg'

export default function TrashModal(props) {
    const cancelClick = () => {
        props.closeTrashModal();
    }
    
    return (
        <>
            <div className="absolute top-0 right-0 z-10 flex items-center justify-center w-full h-full">
                <div className="bg-white w-11/12 md:w-[35%] rounded-lg shadow-lg">

                    <div className="p-6">
                        <div className='relative flex items-center'>
                            <h2 className="text-lg font-normal">Move “main greeting” to the trash ?</h2>
                            <img src={cross} className='absolute right-0 w-4 h-4 cursor-pointer' onClick={cancelClick}></img>
                        </div>
                    </div>

                    <img src={bigline}></img>

                    <div className='flex flex-col p-6 gap-7'>
                        <div className='flex'>
                            <p className='text-[#A0A0A0] font-normal'>Your candor video will remain in trash for 30 days befor it is permanetly
                                deletad. you will be able to recover your candor video during this time.
                                All interactions will be restored when the candor video is recovered.</p>
                        </div>
                        <div className='flex justify-center gap-5'>
                            <button className='w-32 h-10 text-[#94A2F2] bg-white outline outline-[#94A2F2] rounded-sm font-normal' onClick={cancelClick}>Cancel</button>
                            <button className='w-32 text-white bg-[#94A2F2] rounded-sm'>Move to trash</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
