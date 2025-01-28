import React from "react";
import { Menu } from "lucide-react";
import logo from  "/logo.png"

const Navbar = ({ setIsOpen }) => {
  
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <Menu size={24} />
            </button>
            <span className="text-xl font-semibold text-gray-800 cursor-pointer"> Beneficiary Management </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="ml-4 flex items-center">
              <img className="h-10 w-10" src={logo} alt="User avatar" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;