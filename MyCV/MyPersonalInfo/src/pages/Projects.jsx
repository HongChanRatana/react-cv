import React from "react";
import "./projects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="cart">
        <div className="left">
          <h2>CamDL KYC Portal</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ab
            animi id, non nemo laudantium? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Impedit ab animi id, non nemo
            laudantium?
          </p>
          <div className="used">
            <span>REACT</span>
            <span>NEXT.JS</span>
            <span>PRISMA</span>
          </div>
        </div>
        <div className="right">
          <img src={project1} alt="" />
        </div>
      </div>
      {/* ---------- */}
      <div className="cart">
        <div className="left">
          <h2>CamDL KYC Portal</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ab
            animi id, non nemo laudantium? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Impedit ab animi id, non nemo
            laudantium?
          </p>
          <div className="used">
            <span>REACT</span>
            <span>NEXT.JS</span>
            <span>PRISMA</span>
          </div>
        </div>
        <div className="right">
          <img src={project2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
