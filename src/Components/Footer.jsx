import { Link } from "react-router-dom";
import React from "react";
import companyLogo from "../img/Vardanlogo.png";
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={`bg-custom-image bg-cover bg-no-repeat ${style.footercontainerbackground}`}>
      <div className="container flex justify-end items-center mt-12 py-4 space-x-3 max-620:flex-col-reverse">

        <div className="grid gap-4">

          <div className={`text-md sm:text-xl flex flex-wrap gap-4 md:gap-6`}>
            <Link
              to={"/"}
              className="font-base text-lightgrey font-medium border-b-2 border-transparent transition hover:border-b-2 duration-300 hover:border-green-600 w-fit max-620:text-white max-620:hover:border-b-white"
            >
              Home
            </Link>
            <Link
              to={"/services"}
              className="font-base text-lightgrey font-medium border-b-2 border-transparent transition hover:border-b-2 duration-300 hover:border-green-600 w-fit max-620:text-white max-620:hover:border-b-white"
            >
              Services
            </Link>
            <Link
              to={"/contactUs"}
              className="font-base text-lightgrey font-medium border-b-2 border-transparent transition hover:border-b-2 duration-300 hover:border-green-600 w-fit max-620:text-white max-620:hover:border-b-white"
            >
              Contact Us
            </Link>
            <Link
              to={"/aboutUs"}
              className="font-base text-lightgrey font-medium border-b-2 border-transparent transition hover:border-b-2 duration-300 hover:border-green-600 w-fit max-620:text-white max-620:hover:border-b-white"
            >
              About Us
            </Link>
          </div>

          <p className="text-lightgrey text-xl text-center max-620:text-white">© 2024 Vardaan. All rights reserved.</p>

        </div>

        <img src={companyLogo} alt="" className="w-40"/>

      </div>
    </div>
  );
}

export default Footer;
