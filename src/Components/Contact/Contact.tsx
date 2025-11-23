import React, { useState } from 'react'

export default function Contact() {

    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")


    return (
    <>
        <section className='pt-24 h-screen'>
            {/* Title Component */}
            <div className="section-header pt-16 flex flex-col items-center text-center"> 
                <h1 className='uppercase text-[40px] font-bold text-black mb-3'>Contact Section</h1> 

                {/* content and icons */}
                <div className='flex justify-center items-center gap-5'>
                    <div className='bg-black w-[100px] h-[5px]'></div>
                    <i className='fa fa-star'></i>
                    <div className='bg-black w-[100px] h-[5px]'></div>
                </div>
            </div>

            {/* UserName */}
            <div className="inputs w-1/2 mx-auto mt-20">
            <div className='userNameInputs mb-4 overflow-hidden'>
                <p className={`text-green-500 ${userName ? "translate-y-0" : "translate-y-12"} transition-all duration-300 `}>userName</p>
            </div>
                <input onChange={(e)=>{setUserName(e.target.value)}} className='w-full border-b-2 border-b-emerald-200 pb-3 outline-none'  type="text" id='userName' name='userName' placeholder='userName'/>
            </div>

            {/* UserAge */}
            <div className="inputs w-1/2 mx-auto mt-4">
            <div className='userNameInputs mb-4 overflow-hidden'>
                <p className={`text-green-500 ${userAge ? "translate-y-0" : "translate-y-12"} transition-all duration-300 `}>userAge</p>
            </div>
                <input onChange={(e)=>{setUserAge(e.target.value)}} className='w-full border-b-2 border-b-emerald-200 pb-3 outline-none'  type="text" id='userAge' name='userAge' placeholder='userAge'/>
            </div>


            {/* UserEmail */}
            <div className="inputs w-1/2 mx-auto mt-4">
            <div className='userNameInputs mb-4 overflow-hidden'>
                <p className={`text-green-500 ${userEmail ? "translate-y-0" : "translate-y-12"} transition-all duration-300 `}>userEmail</p>
            </div>
                <input onChange={(e)=>setUserEmail(e.target.value)} className='w-full border-b-2 border-b-emerald-200 pb-3 outline-none'  type="email" id='userEmail' name='userEmail' placeholder='userEmail'/>
            </div>


            {/* UserPassword */}
            <div className="inputs w-1/2 mx-auto mt-4">
            <div className='userNameInputs mb-4 overflow-hidden'>
                <p className={`text-green-500 ${userPassword ? "translate-y-0" : "translate-y-12"} transition-all duration-300 `}>userPassword</p>
            </div>
                <input onChange={(e)=>{setUserPassword(e.target.value)}} className='w-full border-b-2 border-b-emerald-200 pb-3 outline-none'  type="password" id='userPassword' name='userPassword' placeholder='userPassword'/>
            </div>


            <div className='w-1/2 mx-auto mt-4'>
            <button className='p-2 bg-[#1ABC9C] rounded-xl text-white hover:cursor-pointer'>Send Message</button>

            </div>

            
        </section>
    </>
)
}
