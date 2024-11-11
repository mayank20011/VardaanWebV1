import React from "react";
import tick from "../img/tick.svg";
function Ourteam() {
  return (
    <div className="container grid py-12 space-y-12 bg-slate-100">

      <h1 className="text-2xl sm:text-5xl text-center font-bold w-100 md:w-4/5 xl:w-2/3  mx-auto">Custom Software Delivered with Passion, Precision, and Accountability</h1>

      <p className="text-2xl text-center mx-auto w-100 md:w-4/5 lg:w-2/3 text-lightgrey">Together, with our team of smart engineers, we’ll accelerate your success through custom software and flexible support. We’re committed to delivering value and ensuring top-tier quality in every project.</p>

      <div className="grid md:grid-cols-3 gap-8 mx-auto pl-1 custom-range:grid-cols-1">
        <div className="grid space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <img src={tick} alt="" className="h-7"/>
            <h2 className="text-xl font-bold text-bluish">High Intelligence</h2>
          </div>

          <p className="text-lightgrey text-lg">
            We hire top talent with super high IQs, ensuring sharp
            problem-solving skills and innovative thinking in every project.
          </p>
        </div>

        <div className="grid space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <img src={tick} alt="" className="h-7"/>
            <h2 className="text-xl font-bold text-bluish">Willing to Learn</h2>
          </div>

          <p className="text-lightgrey text-lg">
            Our team values humility, always eager to listen, learn, and adapt
            to ensure continuous improvement.
          </p>
        </div>

        <div className="grid space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <img src={tick} alt="" className="h-7"/>
            <h2 className="text-xl font-bold text-bluish">Driven by Passion</h2>
          </div>

          <p className="text-lightgrey text-lg">
            We hire engineers who are deeply passionate about technology and
            committed to delivering the best solutions.
          </p>
        </div>

        <div>

        </div>

      </div>

      <h1 className="text-3xl text-center font-bold w-full mx-auto">How Do We Write Excellent Code?</h1>


    </div>
  );
}

export default Ourteam;
