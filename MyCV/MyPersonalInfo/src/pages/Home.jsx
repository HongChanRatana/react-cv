import React from "react";
import "./home.css";
import Profile from "../assets/logo.jpg";
import About from "./About";
import Projects from "./Projects";
import { NavLink } from "react-router-dom";
import Skills from "./Skills";
import Experience from "./Experience";

const Home = () => {
  return (
    <section className="bg-home">
      <div className="home">
        <div className="profile">
          <img src={Profile} alt="profile" />
        </div>
        <h1>Hi, I'm Mr. SiNeth</h1>
        <p>
          Full-stack Developer, constantly fueling my passion for learning.{" "}
          <br /> I'm always on the lookout for new things to try.
        </p>
        <button className="btn-contact">
          <NavLink className="link" to={"/contact"}>
            Contact Me
          </NavLink>
        </button>
      </div>
      {/* import Page */}
      <About />
      <Projects />
      <Skills />
      <Experience />
    </section>
  );
};

export default Home;
