import React from 'react'
import client1 from "../img/client1.webp"
import client2 from "../img/client2.webp"
import client3 from "../img/client3.webp"
import client4 from "../img/client4.webp"
import client5 from "../img/client5.svg"
import client6 from "../img/client6.webp"
import Slider from './Slider.jsx';
function Brief() {
  return (
    <>
      {/* top div */}
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl text-center font-bold md:w-4/5 xl:w-1/2  mx-auto">Custom Software Delivered with Passion, Precision, and Accountability</h1>
        <p className="text-2xl text-center mx-auto md:w-1/2 text-lightgrey">Together, with our team of smart engineers, we’ll accelerate your success through custom software and flexible support. We’re committed to delivering value and ensuring top-tier quality in every project.</p>
        <div className="w-fit flex gap-4 sm:gap-8 mx-auto">
          <a href="#" className="text-white bg-bluish py-5 px-5 rounded-full">Chat With Us</a>
          <a href="#" className="text-bluish bg-white py-5 px-5 rounded-full border-2 border-bluish hover:text-white hover:bg-bluish">View case studies</a>
        </div>
        <div className="w-full space-y-10">
          <p className="text-xl text-center mx-auto md:w-1/2 text-lightgrey font-bold">Hundreds of companies have already built great products with Innostax</p>
          
          {/* client image box */}
          <div className={`mx-auto w-full md:w-4/5 flex flex-wrap justify-center items-center gap-x-10 gap-y-8`}>
          <img src={client1} alt="" className="h-6"/> 
          <img src={client2} alt="" className="h-6"/>
          <img src={client3} alt="" className="h-6"/>
          <img src={client4} alt="" className="h-6"/>
          <img src={client5} alt="" className="h-6"/>
          <img src={client6} alt="" className="h-6"/> 
          </div>

        </div>
      </div>
       
      {/* customer review images */}
      <Slider/>
      
      {/* Expertise and results*/}

        <div className="flex p-5 space-x-3 rounded-2xl py-8 bg-slate-100 flex-col lg:flex-row space-y-8">
          <div className="space-y-5">
            <h1 className="text-2xl text-black font-bold">Proven Expertise, Measurable Results</h1>
            <p className="text-2xl text-lightgrey">With a team of talented engineers and a track record of success, we deliver impactful solutions.</p>
          </div>
           <div className="flex flex-col md:flex-row space-y-5">
            <div className="px-3 border-l-2 border-green-2 space-y-5 h-fit">
              <h1 className="text-4xl text-green-600 font-bold">150+</h1>
              <p className="text-2xl text-lightgrey">Smart Engineers – Expert professionals driving innovation and efficiency.</p>
            </div>
            <div className="px-3 border-l-2 border-green-2 space-y-5 h-fit mt-0">
              <h1 className="text-4xl text-green-600 font-bold">100+</h1>
              <p className="text-2xl text-lightgrey">Successful Projects – Proven results across diverse industries and technologies.</p>
            </div>
            <div className="px-3 border-l-2 border-green-2 space-y-5 h-fit mt-0">
              <h1 className="text-4xl text-green-600 font-bold">200%</h1>
              <p className="text-2xl text-lightgrey">Accountability – We take full ownership of every project to guarantee success.</p>
            </div>
           </div>
        </div>
       </>
  )
}

export default Brief