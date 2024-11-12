import React from "react";
import tick from "../img/tick.svg";
import Ec1 from "../img/Ec1.svg";
import Ec2 from "../img/Ec2.svg";
import Ec3 from "../img/Ec3.svg";
import Ec4 from "../img/Ec4.svg";
import Ec5 from "../img/Ec5.svg";
import Ec6 from "../img/Ec6.svg";
import Ec31 from "../img/Ec3.1.svg";
import Ec32 from "../img/Ec3.2.svg";

function Ourteam() {
  return (
    <div className="container grid py-12 space-y-12 bg-slate-100 lesspadding:px-1">
      <h1 className="text-2xl sm:text-5xl text-center font-bold w-100 md:w-4/5 xl:w-2/3  mx-auto">
        We hire smart engineers for web application development
      </h1>

      <p className="text-2xl text-center mx-auto w-100 md:w-4/5 lg:w-2/3 text-lightgrey">
        Our hiring process starts with testing the candidate's IQ, and we select
        those who possess the qualities mentioned below.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mx-auto pl-1 custom-range:grid-cols-1">
        <div className="grid space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <img src={tick} alt="" className="h-7" />
            <h2 className="text-xl font-bold text-bluish">High Intelligence</h2>
          </div>

          <p className="text-lightgrey text-lg">
            We hire top talent with super high IQs, ensuring sharp
            problem-solving skills and innovative thinking in every project.
          </p>
        </div>

        <div className="grid space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <img src={tick} alt="" className="h-7" />
            <h2 className="text-xl font-bold text-bluish">Willing to Learn</h2>
          </div>

          <p className="text-lightgrey text-lg">
            Our team values humility, always eager to listen, learn, and adapt
            to ensure continuous improvement.
          </p>
        </div>

        <div className="grid space-y-4">
          <div className="flex flex-row space-x-3 items-center">
            <img src={tick} alt="" className="h-7" />
            <h2 className="text-xl font-bold text-bluish">Driven by Passion</h2>
          </div>

          <p className="text-lightgrey text-lg">
            We hire engineers who are deeply passionate about technology and
            committed to delivering the best solutions.
          </p>
        </div>
      </div>

      <h1 className="text-3xl text-center font-bold w-full mx-auto">
        How Do We Write Excellent Code?
      </h1>

      <div className="bg-white w-100">
        <div className="px-4 py-6 space-y-12 md:w-3/5">
          <div className="grid md:flex gap-3 items-center">
            <img src={Ec1} alt="" />
            <div className="grid space-y-2">
              <h3 className="text-xl font-bold">Comprehension Tests</h3>
              <p className="text-sm text-lightgrey">
                A AI-powered test deeply pre-screens the technical knowledge of
                all candidates. This process helps us hire the best and the
                brightest by identifying the candidates with high critical
                thinking and problem solving skills.
              </p>
            </div>
          </div>

          <div className="grid md:flex gap-3 items-center">
            <img src={Ec2} alt="" />
            <div className="grid space-y-2">
              <h3 className="text-xl font-bold">Internal Training</h3>
              <p className="text-sm text-lightgrey">
                Before our new hires begin writing code for your product, they
                spend months learning our processes by building products and
                open source tools for Innostax.
              </p>
            </div>
          </div>

          <div className="grid md:flex gap-3 items-center">
            <img src={Ec3} alt="" />
            <div className="grid space-y-2">
              <h3 className="text-xl font-bold">Code Quality Reviews</h3>
              <p className="text-sm text-lightgrey">
                We implement a multi-channel approach to our code reviews.
              </p>
              <div className="grid md:flex gap-3 items-center border-2 rounded-md p-2">
                <img src={Ec31} alt="" />

                <div className="grid space-y-2">
                  <h3 className="text-xl font-bold">Automated Code Analysis</h3>
                  <p className="text-sm text-lightgrey">
                    We use open source tools as a first-level of defense against
                    bugs. Every pull-request is flagged for issues.
                  </p>
                </div>
              </div>
              <div className="grid md:flex gap-3 items-center border-2 rounded-md p-2">
                <img src={Ec32} alt="" />

                <div className="grid space-y-2">
                  <h3 className="text-xl font-bold">
                    Three Manual Code Reviews
                  </h3>
                  <p className="text-sm text-lightgrey">
                    Every pull-request is reviewed by three top contributors
                    before merging
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:flex gap-3 items-center">
            <img src={Ec4} alt="" />
            <div className="grid space-y-2">
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-sm text-lightgrey">
                We keep a full audit trail on our productivity and provide
                detailed end-of-day reports on our productivity. Our invoices
                keep the same level of transparency and clarity.
              </p>
            </div>
          </div>

          <div className="grid md:flex gap-3 items-center">
            <img src={Ec5} alt="" />
            <div className="grid space-y-2">
              <h3 className="text-xl font-bold">Team Structure</h3>
              <p className="text-sm text-lightgrey">
                Evrry product team has a lead that manages your developers.
              </p>
            </div>
          </div>

          <div className="grid md:flex gap-3 items-center">
            <img src={Ec6} alt="" />
            <div className="grid space-y-2">
              <h3 className="text-xl font-bold">
                Top Engineers Become Highly Incentivized
              </h3>
              <p className="text-sm text-lightgrey">
                Before our new hires begin writing code for your product, they
                spend months learning our processes by building products and
                open source tools for Innostax.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
