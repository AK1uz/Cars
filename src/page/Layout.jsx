import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout