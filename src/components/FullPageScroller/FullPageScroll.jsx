import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';

import './FullPageScroll.css';
import NavBar from '../NavBar/NavBar.jsx';
import Landing from '../Landing/Landing.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';

const FullPageScroll = () => {
  useEffect(() => {
    new fullpage('#fullpage', {
      sectionsColor: ['#2b2b2b', '#2b2b2b', '#2b2b2b', '#2b2b2b'],
      navigation: true,
      menu: '#navbar',
      anchors: ['home', 'about', 'projects', 'contact'],
      scrollingSpeed: 700,
      easingcss3: 'ease-in-out',
      afterLoad: (origin, destination, direction) => {
        destination.item.classList.add('fade-in');
      },
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div id="fullpage">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default FullPageScroll;