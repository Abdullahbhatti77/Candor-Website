import React from 'react'
import imgCustom from '../../assets/Images/verifycade.png'
import verifysvg from '../../assets/Svg/groupverify.svg'
import line from '../../assets/Svg/line.svg'
export default function VerifyCade() {
    return (
        <>
            
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">

                <div className="bg-[#94A2F2] flex justify-center items-center flex-col h-screen px-10">
                    <img src={imgCustom} className="w-full h-auto" />
                    {/* <p style={{
                        position: 'absolute',
                        color: '#FFFFFF',
                        width: '434px',
                        height: '126px',
                        left: '246px',
                        top: '761px',

                        fontFamily: 'Lexend',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '50px',
                        lineHeight: '62px',
                        textAlign: 'center',
                        textTransform: 'capitalize'}}>
                        welcome to my website
                    </p> */}
                    <h1 className='text-2xl text-white text-center'>Welcome Back To <br/>Candor</h1>
                </div>

                <div className="bg-white p-10">
                    <div className="shadow-lg rounded-lg py-5 px-10">
                        <div className="flex items-center">
                            <img src={line} className='flex'/>
                            <div className='flex flex-col ml-5'>
                            <p style={{color: '#94A2F2', fontSize: '20px', fontWeight: 'bold'}} className='bg-[#94A2F2] font-bold font-'>Verify Your Code</p>
                            <p style={{color: '#A0A0A0'}}>Please enter your Code here</p></div>
                        </div>

                        <div className="mt-5">
                            <p style={{color: '#A0A0A0'}}>Please enter the 4 digit code send to your email</p>
                            <p style={{color: '#3A37A6', fontSize: '15px'}}>ryanjones@example.com</p>
                        </div>

                        <img src={verifysvg} className='mt-5 w-60'/>

                        <div className="mt-52">
                            <button className="bg-[#94A2F2] text-white py-2 px-4 rounded text-center w-full">Verify</button>
                            <button className="py-2 px-4 rounded text-center w-full text-[#94A2F2] mt-3 outline outline-[#94A2F2]">Cancel</button>
                        </div>


                    </div>
                </div>
            </div>

    </>
)
}
