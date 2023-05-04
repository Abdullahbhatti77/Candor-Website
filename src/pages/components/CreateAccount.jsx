import React from 'react'
import createaccount from '../../assets/Svg/createaccount.svg'
import line from '../../assets/Svg/line.svg'
import profile from '../../assets/Svg/profile.svg'
import lock from '../../assets/Svg/lock.svg'
import sms from '../../assets/Svg/sms.svg'
import tick from '../../assets/Svg/tick.svg'
import google from '../../assets/Svg/google.svg'
import eye from '../../assets/Svg/eye.svg'

export default function CreateAccount() {
    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">

                <div className="bg-[#94A2F2] flex justify-center items-center flex-col h-screen px-10">
                    <img src={createaccount} className="w-full h-auto" />
                    <h1 className='text-2xl text-white text-center'>Welcome Back To <br />Candor</h1>
                </div>

                <div className="bg-white p-10">
                    <div className="shadow-lg rounded-lg py-5 px-10">
                        <div className="flex items-center">
                            <img src={line} className='flex' />
                            <div className='flex flex-col ml-5'>
                                <p className='text-[#94A2F2] font-bold text-2xl'>Create an account</p>
                                <p className='text-[#A0A0A0] font-light'>Let,s get started with your 30 day free trial.</p>
                            </div>
                        </div>


                        <div className="mt-5 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <div className="flex">
                                <label>First Name
                                    <div className="relative flex text-black">
                                        <img src={profile} alt="Image" className="w-5 h-5 absolute inset-y-2 left-2"/>
                                        <input type="text" placeholder="First Name" className="w-full pl-10 pr-3 py-2 placeholder-black text-black shadow-lg rounded-lg placeholder:font-light placeholder:text-[#A0A0A0]"/>
                                    </div>
                                </label>
                            </div>
                            <div className="flex">
                                <label>Last Name
                                    <div className="relative flex items-center text-black">
                                        <img src={profile} alt="Image" className="w-5 h-5 absolute left-2"/>
                                        <input type="text" placeholder="Jones" className="w-full pl-10 pr-3 py-2 placeholder-black text-black shadow-lg rounded-lg placeholder:font-light placeholder:text-[#A0A0A0]"/>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className='mt-4 sm:text-sm'>
                            <label >Email
                                <div className="relative flex items-center text-black">
                                    <img src={sms} alt="Image" className="w-5 h-5 absolute left-2"/>
                                    <input type="text" placeholder="ryanjones@example.com"  className="w-full pl-10 pr-3 py-2 placeholder-black text-black shadow-lg rounded-lg placeholder:font-light placeholder:text-[#A0A0A0]"/>
                                </div>
                            </label>
                        </div>

                        <div className='mt-4'>
                            <label>Password
                                <div className="relative flex items-center text-black">
                                    <img src={lock} alt="Image" className="w-5 h-5 absolute left-2"/>
                                    <input type="text" placeholder=". . . . . . ." className=" w-full pl-10 pr-3 py-2 placeholder-black text-black shadow-lg rounded-lg font-bold"/>
                                    <img src={eye} alt="Image" className="w-5 h-5 absolute right-2"/>
                                </div>
                            </label>
                        </div>

                        <div className='mt-4'>
                            <label >Confirm Password
                                <div className="relative flex items-center text-black">
                                    <img src={lock} alt="Image" className="w-5 h-5 absolute left-2"/>
                                    <input type="text" placeholder=". . . . . . ." className="w-full pl-10 py-2 placeholder-black text-black shadow-lg rounded-lg font-bold"/>
                                    <img src={eye} alt="Image" className="w-5 h-5 right-2 absolute"/>
                                </div>
                            </label>
                        </div>

                        <div className='flex mt-4 gap-4'>
                            <div className='flex'>
                                <img src={tick}></img>
                            </div>
                            <div className='flex'>
                                <p>By Creating an account, you agree to our <span className='text-[#3A37A6]'>terms of service and privacy policy</span></p>
                            </div>

                        </div>

                        <div className="mt-4">
                            <button className="bg-[#94A2F2] text-white py-2 px-4 rounded text-center w-full">Create An Account</button>
                            <button className="text-black flex items-center justify-center py-2 px-4 rounded text-center w-full shadow-lg mt-3 gap-3">
                                <img src={google} alt="Your Image" class="h-4 w-4 mr-2" />
                                Sign in with Google
                            </button>
                        </div>

                        <p className='mt-4'>Alredy have an account ? <span className='text-[#3A37A6]'>log in</span></p>


                    </div>
                </div>

            </div>
        </>
    )
}
