import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Siderbar.jsx'
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Navbar setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
        <Footer />
      </>
  )
}

export default Layout