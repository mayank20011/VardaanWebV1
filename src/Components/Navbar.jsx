import React from 'react'
import styles from "./Navbar.module.css";
import companyLogo from "../img/Vardanlogo.png";
import { useRef } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {

  const hamtoggle=useRef(null);
  function menuPopUp()
  {
      hamtoggle.current.classList.toggle(styles.in);
      hamtoggle.current.classList.toggle(styles.out);
  } 

  return (
    <nav className="fixed w-full bg-white top-0 box-border z-30">
      <div className="container mx-auto flex justify-between items-center pb-2 pt-5 box-border">

        {/* logo */}
         <img src={companyLogo} alt="Logo" className="h-14"/>
        
        {/* Links */}
        <div className={`flex flex-col gap-6 md:flex-row absolute left-0 top-0 bg-white z-5 w-3/5 border-r-2 border-b-2 border-s-teal-600 h-screen p-10 sm:w-1/2 md:relative md:w-fit md:border-0 md:h-fit md:p-0 md:pl-6 transition ease-in-out duration-300 ${styles.in} opacity-90 md:opacity-1`} ref={hamtoggle}>
          <Link to={"/"} className="font-base text-lightgrey font-medium border-b-2 pt-2 pb-4 md:border-0 md:border-b-2 md:border-b-white md:p-0  hover:border-b-2 hover:border-bluish transition mt-2" onClick={menuPopUp}>Home</Link>
          <Link to={"/services"} className="font-base text-lightgrey font-medium border-b-2 pt-2 pb-4 md:border-0 md:border-b-2 md:border-b-white md:p-0  hover:border-b-2 hover:border-bluish transition mt-2" onClick={menuPopUp}>Services</Link>
          <Link to={"/contactUs"} className="font-base text-lightgrey font-medium border-b-2 pt-2 pb-4 md:border-0 md:border-b-2 md:border-b-white md:p-0  hover:border-b-2 hover:border-bluish transition mt-2" onClick={menuPopUp}>Contact Us</Link>
          <Link to={"/aboutUs"} className="font-base text-lightgrey font-medium border-b-2 pt-2 pb-4 md:border-0 md:border-b-2 md:border-b-white md:p-0  hover:border-b-2 hover:border-bluish transition mt-2" onClick={menuPopUp}>About Us</Link>
        </div>
        
        {/* button */}
        <div className="flex flex-row-reverse grow pr-6 md:pr-0 md:grow-0">
        <a href="#" className="text-white font-bold bg-bluish px-4 py-3 rounded-full">Chat With Us</a>
        </div>
        
        
        {/* hamburder */}
        <div className={styles.hamburger}>
        <i className="fa-solid fa-burger text-3xl hover:opacity-50 cursor-pointer" onClick={menuPopUp}></i>
        </div>

      </div>
      </nav>
  )
}

export default Navbar;