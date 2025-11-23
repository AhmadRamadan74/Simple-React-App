import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
const location = useLocation();

// to navigate between the components.
    useEffect(() => {
        const pageName = location.pathname.replace("/","");
        document.title = pageName;
    }, [location])

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
