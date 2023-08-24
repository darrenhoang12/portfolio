import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="section" data-anchor="about">
      <div className="about">
        <div className="about-text">
          <h1><strong>hi i'm darren!</strong></h1>
          <p>
          I'm a Computer Science student at UCI, with a strong interest in software engineering and data science.
          The idea of pushing my programming skills further and gaining new experiences through an internship really
          drives my excitement. I have a passion for creating innovative solutions and finding meaningful insights 
          in data. Learning is the biggest part of my tech journey, and I'm determined to make a positive impact in the 
          industry down the line.
          </p>
          <h2><strong>Some of my interests!</strong></h2>
            <ul>
              <li>Golfing &nbsp;<b className='emoji'>⛳</b></li>
              <li>Horror Movies &nbsp;<b className='emoji'>👻</b></li>
              <li>House and Hip-hop &nbsp;<b className='emoji'>🎶</b></li>
              <li>Escape Rooms &nbsp;<b className='emoji'>🔑</b></li>
            </ul>
        </div>
        <div className="about-pic"><img src="images/golf-about.jpeg"/></div>
      </div>
    </div>
  );
};

export default About;
