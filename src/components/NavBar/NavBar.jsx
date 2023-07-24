import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="wholebar">
      <div className="name">
        <a href="#landing">darren hoang</a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#landing">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <a>resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
