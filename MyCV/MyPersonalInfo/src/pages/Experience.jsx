import React from "react";
import "./experience.css";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";

const Experience = () => {
  return (
    <div className="Experience">
      <h1>My Experience</h1>
      <div className="border">
        <div className="card">
          <img src={img1} alt="logo" />
          <div className="card-info">
            <h2>IT Support</h2>
            <h3>Metfone Headquarter</h3>
            <p>
              My first-ever job, both in life and in the tech field, was an
              invaluable experience for me. It served as a platform where I not
              only gained knowledge about various job aspects but also honed my
              programming skills during my free time working there.
            </p>
            <span>Dec 2020 - Nov 2021</span>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="logo" />
          <div className="card-info">
            <h2>IT Support</h2>
            <h3>Metfone Headquarter</h3>
            <p>
              My first-ever job, both in life and in the tech field, was an
              invaluable experience for me. It served as a platform where I not
              only gained knowledge about various job aspects but also honed my
              programming skills during my free time working there.
            </p>
            <span>Dec 2020 - Nov 2021</span>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt="logo" />
          <div className="card-info">
            <h2>IT Support</h2>
            <h3>Metfone Headquarter</h3>
            <p>
              My first-ever job, both in life and in the tech field, was an
              invaluable experience for me. It served as a platform where I not
              only gained knowledge about various job aspects but also honed my
              programming skills during my free time working there.
            </p>
            <span>Dec 2020 - Nov 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
