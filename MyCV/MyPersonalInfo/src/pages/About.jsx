import React from "react";
import "./about.css";
import profile from "../assets/logo.jpg";

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="photo">
        <img src={profile} alt="photo" />
      </div>
      <p>
        I've been working as a full-stack developer for 2 years. During these
        time, I've worked on various fields such as frontend development with
        NextJS and Angular (legacy code), backend development with Spring,
        Blockchain and Smart Contract with Solidity.
      </p>
    </section>
  );
};

export default About;
