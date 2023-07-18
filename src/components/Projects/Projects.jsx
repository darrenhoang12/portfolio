import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section" data-anchor="projects">
      <div className="projects-wrapper">
        <div className="projects">
          <a href="https://github.com/darrenhoang12/nba_mvp_predictor" target="_blank" className="nba_mvp project">
            <h2 className="title">MVP Predictor</h2>
            <p className="description">
              Scraped NBA player data and built regression models to accurately predict the MVP of the
              season based purely on stats. 
            </p>
          </a>
          <a href="https://github.com/darrenhoang12/Mario_RL" target="_blank" className="mario_rl project">
            <h2 className="title">Mario Agent</h2>
            <p className="description">
              Trained a reinforcement learning agent that is capable of playing Super Mario Bros entirely
              on its own.
            </p>
          </a>
          <a href="https://github.com/darrenhoang12/BPS_multi_labeling" target="_blank"className="bps_multi project">
            <h2 className="title">BPS Microscopy</h2>
            <p className="description">
              Description for BPS Microscopy Project
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
