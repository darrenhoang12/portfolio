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
            <a href="https://drive.google.com/file/d/1i6jDusJBVpBMjcaQcEixbO6qcWTFFjw0/view?usp=sharing" target="_blank">resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
