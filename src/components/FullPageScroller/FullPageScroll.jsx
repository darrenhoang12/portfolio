import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

import "./FullPageScroll.css";
import NavBar from "../NavBar/NavBar.jsx";
import Links from "../Links/Links.jsx";
import Landing from "../Landing/Landing.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";

const FullPageScroll = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      sectionsColor: ["transparent", "transparent", "transparent", "transparent"], // Set sections to transparent
      navigation: true,
      menu: "#navbar",
      anchors: ["home", "about", "projects", "contact"],
      scrollingSpeed: 700,
      easingcss3: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div id="fullpage-container"></div>
      <NavBar />
      <Links />
      <div id="fullpage">
        <Landing />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default FullPageScroll;
