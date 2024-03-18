import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="wholebar">
      <div className="name">
        <a href="#landing" className="name-anchor">
          <img className="logo-nav" src="/images/logo.png" />
        </a>
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
            <a
              href="https://drive.google.com/file/d/1iAe2rXhunGmq6cUDNMIOAqwriWzyKi_w/view?usp=sharing"
              target="_blank"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
