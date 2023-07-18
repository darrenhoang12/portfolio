import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section" data-anchor="projects">
      <div className="projects-wrapper">
        <div className="projects">
          <a href="https://github.com/darrenhoang12/nba_mvp_predictor" target="_blank" className="nba_mvp project">
            <h2 className="title">MVP Predicter</h2>
            <p className="description">
              Description for NBA MVP Predictor
            </p>
          </a>
          <a href="https://github.com/darrenhoang12/Mario_RL" target="_blank" className="mario_rl project">
            <h2 className="title">Mario Agent</h2>
            <p className="description">
              Implemented an autonomous Mario agent that is capable of playing Super Mario Bros entirely
              on its own using PyTorch.
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
