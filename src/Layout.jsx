import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Siderbar.jsx'
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
      <>
        <Navbar setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Outlet context={{ isModalOpen, setIsModalOpen }} />
        <Footer />
      </>
  )
}

export default Layout