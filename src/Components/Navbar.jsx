import React from 'react'
import companyLogo from "../img/Footer-logo.svg";
function Navbar() {
  return (
      <div className="container mx-auto border-2 border-red-500 flex justify-between items-center pb-2 pt-5">

        {/* logo */}
         <img src={companyLogo} alt="Logo" />
        
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <a href="#" className="font-base text-lightgrey font-medium">Home</a>
          <a href="#" className="font-base text-lightgrey font-medium">Services</a>
          <a href="#" className="font-base text-lightgrey font-medium">Contact Us</a>
          <a href="#" className="font-base text-lightgrey font-medium">About Us</a>
        </div>
        
        {/* button */}
        <a href="#" className="text-white font-bold bg-bluish px-4 py-3 rounded-full">Chat With Us</a>
        
        {/* hamburder */}
        <div className="hamburder">
        <i className="fa-solid fa-burger md:hidden"></i>
        </div>

      </div>
  )
}

export default Navbar;