import React from "react";
import whyus1 from "../img/whyus1.webp";
import whyus2 from "../img/whyus2.webp";
import whyus3 from "../img/whyus3.webp";
import whyus4 from "../img/whyus4.webp";
import whyus5 from "../img/whyus5.webp";
import whyus6 from "../img/whyus6.webp";
import styles from "./Whyus.module.css";
import stars from "../img/5stars.svg";
import card1 from "../img/whyuscard1.webp";
import card2 from "../img/whyuscard2.webp";
import card3 from "../img/whyuscard3.webp";
function Whyus() {
  return (
    /* heading and grid container, why business choose Vardaan  */
    <>
      <div className="py-12 my-4 grid gap-12">
        <h1 className="text-4xl text-center font-bold">
          Why business choose <span className="text-green-600">Vardaan</span> !
        </h1>

        {/* grid contaner */}

        <div className={`${styles.gridcontainer} grid gap-8`}>
          <div className="flex flex-col text-center justify-center items-center gap-4">
            <img src={whyus1} alt="" className="w-10" />
            <h1 className="text-2xl font-bold">Smart Engineers</h1>
            <p className="text-2xl text-lightgrey">
              Our team consists of highly skilled engineers who deliver
              innovative solutions tailored to your business needs.
            </p>
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-4">
            <img src={whyus2} alt="" className="w-10" />
            <h1 className="text-2xl font-bold">Total Accountability</h1>
            <p className="text-2xl text-lightgrey">
              We take full ownership of every project, ensuring 200%
              accountability and delivering results you can trust.
            </p>
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-4">
            <img src={whyus3} alt="" className="w-10" />
            <h1 className="text-2xl font-bold">Faster Execution</h1>
            <p className="text-2xl text-lightgrey">
              We work 2-3X faster than in-house teams, accelerating your project
              timeline without sacrificing quality.
            </p>
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-4">
            <img src={whyus4} alt="" className="w-10" />
            <h1 className="text-2xl font-bold">Cost-Effective Solutions</h1>
            <p className="text-2xl text-lightgrey">
              With competitive pricing, our custom software solutions provide
              unmatched value, especially for complex integrations.
            </p>
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-4">
            <img src={whyus5} alt="" className="w-10" />
            <h1 className="text-2xl font-bold">CEO Involvement</h1>
            <p className="text-2xl text-lightgrey">
              Our CEO is personally involved in every project, ensuring
              strategic oversight and high-level attention to detail.
            </p>
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-4">
            <img src={whyus6} alt="" className="w-10" />
            <h1 className="text-2xl font-bold">Flexible Engagement</h1>
            <p className="text-2xl text-lightgrey">
              We offer a 1-day scale up or scale down, and our flexible 1-day
              termination clause makes working with us risk-free.
            </p>
          </div>
        </div>
      </div>

      {/* why us brief */}
      <div className="bg-slate-100 w-100 py-12 md:py-24 space-y-12">

        <div className="container space-y-12 md:space-y-24">

          <h1 className="text-4xl text-center font-bold w-100 md:w-3/4 mx-auto lg:w-4/5">
            Experience tailored solutions for your custom software development
            project
          </h1>

          {/* container */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="container bg-white border-2 border-bluish rounded-2xl space-y-6 py-10">
              <img src={card1} alt="" />
              <h1 className="text-2xl font-bold">Dedicated development team</h1>
              <p className="text-2xl text-lightgrey">We deploy a dedicated, smart team consisting of developers, software testers, and project managers who take full ownership of the entire development process. They treat the project as their own and demonstrate excellence at every stage.</p>
              
              <div className="border-2 container rounded-md  py-4 space-y-6">
              <img src={stars} alt="" />
              <p className="text-lightgrey text-xl font-semibold">"They always treated the work like it was their own and showed pride in every way to the product that they were delivering."</p>
              <p className="font-bold text-xl">George Grabher</p>
              </div>

            </div>
            
            <div className="container bg-white border-2 border-bluish rounded-2xl space-y-6 py-10">
              <img src={card2} alt="" />
              <h1 className="text-2xl font-bold">Software outsourcing</h1>
              <p className="text-2xl text-lightgrey">Driven by passion and ownership, our team is dedicated to delivering software solutions with care and commitment. We listen, innovate, and ensure your success every step of the way.</p>
              
              <div className="border-2 container rounded-md  py-4 space-y-6">
              <img src={stars} alt="" />
              <p className="text-lightgrey text-xl font-semibold">"The Innostax team truly became a part of our team and were totally committed to what we were building. We had a genuinely brilliant experience"</p>
              <p className="text-xl font-bold">Aisling Byrne </p>
              </div>

            </div>
            
            <div className="container bg-white border-2 border-bluish rounded-2xl space-y-6 py-10">
              <img src={card1} alt="" />
              <h1 className="text-2xl font-bold">IT Staff augmentation</h1>
              <p className="text-2xl text-lightgrey">We tailor our team to fit your project’s unique needs, allowing you to choose the required skill sets, experience, and number of professionals. Our goal is to ensure a perfect match for your project.</p>
              
              <div className="border-2 container rounded-md  py-4 space-y-6">
              <img src={stars} alt="" />
              <p className="text-lightgrey text-xl font-semibold">"We are shipping new features nearly every day on a product that is very difficult to build. The quality of the Innostax’s work is very high."</p>
              <p className="font-bold text-xl">Cody Miles</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Whyus;
