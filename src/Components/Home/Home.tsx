import React from 'react'
import siteImg from '../../assets/Images/avataaars.svg'
export default function Home() {
    return (
        <>
            <section className='bg-[#1ABC9C] h-[97vh] flex justify-center items-center flex-col text-white gap-5'>
                <div className="site-image">
                    <img src={siteImg} alt="" className='w-[80%] mx-auto' />
                </div>
                <div className="home-content">
                    <h1 className='uppercase text-[40px] font-semibold'>start Framework</h1>
                    <div className='flex justify-center items-center gap-5'>
                        <div className='bg-white w-[100px] h-[5px]'></div>
                        <i className='fa fa-star'></i>
                        <div className='bg-white w-[100px] h-[5px]'></div>
                    </div>
                    <div className="sub-content flex justify-center items-center py-4">
                        Graphic Artist - Web Designer - Illustrator
                    </div>
                </div>
            </section>
        </>
    )
}