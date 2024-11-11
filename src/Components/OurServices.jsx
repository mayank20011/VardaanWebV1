import React from 'react'
import {Link} from "react-router-dom";
import ourservices1 from "../img/ourservices1.webp";
import ourservices2 from "../img/ourservices2.webp";
import ourservices3 from "../img/ourservices3.webp";
import ourservices4 from "../img/ourservices4.webp";
import ourservices5 from "../img/ourservices5.webp";
import ourservices6 from "../img/ourservices6.webp";
function OurServices() {
  return (
    <div className="bg-slate-100 my-12 space-y-12 py-12">
      <h1 className="text-center font-bold text-4xl">Our services</h1>
      <p className="text-3xl text-center font-thin">From Idea to Execution: Comprehensive Software Development Services</p>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         
         <div className="grid space-y-6">
          <img src={ourservices1} alt="" />
          <h1 className="text-2xl">Custom Software Development</h1>
          <p className="text-2xl text-lightgrey">Tailored software solutions designed to meet your unique business needs.</p>
          <Link to={''} className="cursor-pointer text-blue-800 text-xl">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
         </div>

         <div className="grid space-y-6">
          <img src={ourservices2} alt="" />
          <h1 className="text-2xl">Mobile App Development</h1>
          <p className="text-2xl text-lightgrey">Deliver engaging mobile experiences that drive growth across platforms.</p>
          <Link to={''} className="cursor-pointer text-blue-800 text-xl">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
         </div>

         <div className="grid space-y-6">
          <img src={ourservices3} alt="" />
          <h1 className="text-2xl">MVP Development</h1>
          <p className="text-2xl text-lightgrey">Rapid prototyping and development to validate your ideas and scale fast.</p>
          <Link to={''} className="cursor-pointer text-blue-800 text-xl">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
         </div>
         
         <div className="grid space-y-6">
          <img src={ourservices4} alt="" />
          <h1 className="text-2xl">Legacy Software Modernization</h1>
          <p className="text-2xl text-lightgrey">Transform outdated systems into modern, scalable, and efficient solutions.</p>
          <Link to={''} className="cursor-pointer text-blue-800 text-xl">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
         </div>

         <div className="grid space-y-6">
          <img src={ourservices5} alt="" />
          <h1 className="text-2xl">Software QA and Testing</h1>
          <p className="text-2xl text-lightgrey">Ensure flawless performance with our thorough testing and quality assurance services.</p>
          <Link to={''} className="cursor-pointer text-blue-800 text-xl">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
         </div>

         <div className="grid space-y-6">
          <img src={ourservices6} alt="" />
          <h1 className="text-2xl">IT Consulting</h1>
          <p className="text-2xl text-lightgrey">Strategic advice and solutions to optimize your IT infrastructure and roadmap.</p>
          <Link to={''} className="cursor-pointer text-blue-800 text-xl">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
         </div>

      </div>
    </div>
  )
}

export default OurServices