import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section" data-anchor="projects">
      <div className="projects-wrapper">
        <div className="projects">
          <a href="https://github.com/darrenhoang12/Mario_RL" target="_blank" className="mario_rl">
            Mario RL
          </a>
          <a href="https://github.com/darrenhoang12/nba_mvp_predictor" target="_blank" className="nba_mvp">
            NBA MVP
          </a>
          <a href="https://github.com/darrenhoang12/BPS_multi_labeling" target="_blank"className="bps_multi">
            BPS MultiLabeling
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
