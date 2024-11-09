import React from "react";
import whyus1 from "../img/whyus1.webp";
import whyus2 from "../img/whyus2.webp";
import whyus3 from "../img/whyus3.webp";
import whyus4 from "../img/whyus4.webp";
import whyus5 from "../img/whyus5.webp";
import whyus6 from "../img/whyus6.webp";
import styles from "./Whyus.module.css";
function Whyus() {
  return (
    <div className="py-12 my-4 grid gap-12">
      <h1 className="text-4xl text-center font-bold">
        Why business choose <span className="text-green-600">Vardaan</span> !
      </h1>
      <div className={`${styles.gridcontainer} grid gap-8`}>
        <div className="flex flex-col text-center justify-center items-center gap-4">
          <img src={whyus1} alt="" className="w-10" />
          <h1 className="text-2xl font-bold">Smart Engineers</h1>
          <p className="text-2xl text-lightgrey">
            Our team consists of highly skilled engineers who deliver innovative
            solutions tailored to your business needs.
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
          <p className="text-2xl text-lightgrey">We work 2-3X faster than in-house teams, accelerating your project timeline without sacrificing quality.</p>
        </div>

        <div className="flex flex-col text-center justify-center items-center gap-4">
          <img src={whyus4} alt="" className="w-10" />
          <h1 className="text-2xl font-bold">Cost-Effective Solutions</h1>
          <p className="text-2xl text-lightgrey">With competitive pricing, our custom software solutions provide unmatched value, especially for complex integrations.</p>
        </div>

        <div className="flex flex-col text-center justify-center items-center gap-4">
          <img src={whyus5} alt="" className="w-10" />
          <h1 className="text-2xl font-bold">CEO Involvement</h1>
          <p className="text-2xl text-lightgrey">Our CEO is personally involved in every project, ensuring strategic oversight and high-level attention to detail.</p>
        </div>

        <div className="flex flex-col text-center justify-center items-center gap-4">
          <img src={whyus6} alt="" className="w-10" />
          <h1 className="text-2xl font-bold">Flexible Engagement</h1>
          <p className="text-2xl text-lightgrey">We offer a 1-day scale up or scale down, and our flexible 1-day termination clause makes working with us risk-free.</p>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
