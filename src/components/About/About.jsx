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
          drives my excitement. I have a real passion for creating innovative solutions and finding meaningful insights 
          in data. Learning is a big part of my journey, and I'm determined to make a positive impact in the tech industry 
          down the line.
          </p>
          <h2><strong>Some of my current interests</strong></h2>
            <ul>
              <li>Hitting the green &nbsp;<b className='emoji'>⛳</b></li>
              <li>Zelda and Red Dead Redemption &nbsp;<b className='emoji'>👾</b></li>
              <li>House and Hip-hop &nbsp;<b className='emoji'>🎶</b></li>
              <li>Escape Rooms &nbsp;<b className='emoji'>🔑</b></li>
            </ul>
        </div>
        <div className="about-pic">

        </div>
      </div>
    </div>
  );
};

export default About;
