import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <div className="menu">
        <NavLink className="list" to={"/"}>
          Home
        </NavLink>
        <NavLink className="list" to={"/about"}>
          About
        </NavLink>
        <NavLink className="list" to={"/projects"}>
          Projects
        </NavLink>
        <NavLink className="list" to={"/skills"}>
          Skills
        </NavLink>
        <NavLink className="list" to={"/experience"}>
          Experience
        </NavLink>
        <NavLink className="list" to={"/contact"}>
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
