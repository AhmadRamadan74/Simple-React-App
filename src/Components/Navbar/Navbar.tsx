import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [handleScroll, setHandleScroll] = useState(false)
    useEffect(()=>{
        // ... (scroll logic remains the same)
        const handleNavScroll = () => {
            if(window.scrollY > 0) {
                setHandleScroll(true);
            }
            else{
                setHandleScroll(false);
            }
        }
        window.addEventListener("scroll" , handleNavScroll);
        // destroy the addeventListners;
        return()=>{
            window.removeEventListener("scroll" , handleNavScroll);
        }
    } , [handleScroll])


    return (
        <>
            {/* ADD z-10 HERE to prevent other elements from scrolling over it */}
            <nav className={`bg-[#2C3E50] z-10 text-white flex justify-around items-center fixed top-0 start-0 end-0 transition-all duration-300 ${handleScroll ? "py-6" : "py-10"}`}>
                <div className="nav-logo">
                    <Link to={""} className='text-4xl uppercase font-bold'>Start FrameWork</Link>
                </div>
                <ul className='nav-links flex gap-3 font-bold uppercase'>
                    <li>
                        <NavLink className="p-3" to={"about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="p-3" to={"portofolio"}>Portofolio</NavLink>
                    </li>
                    <li>
                        <NavLink className="p-3" to={"contact"}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

// import React, { useEffect, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'

// export default function Navbar() {

//     const [handleScroll, setHandleScroll] = useState(false)
//     useEffect(()=>{
//             const handleNavScroll = () => {
//             if(window.scrollY > 0) {
//                 setHandleScroll(true);
//             }
//             else{
//                 setHandleScroll(false);
//             }
//         }
//         window.addEventListener("scroll" , handleNavScroll);
//         // destroy the addeventListners;
//         return()=>{
//             window.removeEventListener("scroll" , handleNavScroll);
//         }
//     } , [handleScroll])



//     return (
//         <>
//             <nav className={`bg-[#2C3E50]  text-white flex justify-around items-center fixed top-0 start-0 end-0 transition-all duration-300 ${handleScroll ? "py-6"  : "py-10"}`}>
//                 <div className="nav-logo">
//                     <Link to={""} className='text-4xl uppercase font-bold'>Start FrameWork</Link>
//                 </div>
//                 <ul className='nav-links flex gap-3 font-bold uppercase'>
//                     <li>
//                         <NavLink className="p-3" to={"about"}>About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className="p-3" to={"portofolio"}>Portofolio</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className="p-3" to={"contact"}>Contact</NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     )
// }
