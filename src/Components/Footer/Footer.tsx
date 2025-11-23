import { useEffect, useState } from "react"


export default function Footer() {
    return (
        <>
        <footer>
            {/* Bulid First Section Of Footer */}
            <div className="bg-[#2C3E50] p-20 flex justify-between items-center">
                {/* Left Side */}
                <div className="left-side flex flex-col text-white text-center w-[33.333%]">
                    <p className="uppercase text-[28px] font-semibold">Location</p>
                    <p>2215 John Daniel Drive</p>
                    <p className="mt-5">Clark, MO 65243</p>
                </div>  


                {/* middle Side */}

                <div className="middle-side flex flex-col text-white text-center w-[33.333%]">
                    <div className="content-side">
                        <p className="uppercase text-3xl font-semibold">Around The Web</p>
                    </div>
                    <div className="icons mt-4 space-x-4 flex justify-center">
                            <div  className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-blue-600 transition duration-300">
                                <i className="fab fa-facebook-f"></i> 
                            </div>
                            <div  className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-sky-500 transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div  className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-blue-700 transition duration-300">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <div  className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-gray-800 transition duration-300">
                                <i className="fas fa-globe "></i>
                            </div>
    
                    </div>
                </div>



                {/* Right Side */}
                <div className="right-side flex flex-col text-white text-center w-[33.333%]">
                    <p className="uppercase text-[28px] font-semibold">ABOUT FREELANCER</p>
                    <p className="">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>  

            </div>






            {/* Build The Second Section Of Footer */}
            <div className="bg-[#1A252F]">
                <p className="text-white text-center p-5">Copyright © Your Website 2021</p>
            </div>
        </footer>
        </>
    )
}
