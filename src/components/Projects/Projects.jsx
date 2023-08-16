import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section" data-anchor="projects">
      <div className="projects">
        <a
          href="https://github.com/darrenhoang12/nba_mvp_predictor"
          target="_blank"
          className="nba_mvp project"
        >
          <h2 className="title">MVP Predictor</h2>
          <ul className="tech">
            <li>python</li>
            <li>sk-learn</li>
            <li>bs4</li>
            <li>selenium</li>
          </ul>
          <p className="description">
            Scraped NBA player data and built regression models to accurately
            predict the MVP of the season based purely on stats.
          </p>
        </a>
        <a
          href="https://github.com/darrenhoang12/Mario_RL"
          target="_blank"
          className="mario_rl project"
        >
          <h2 className="title">Mario Agent</h2>
          <ul className="tech">
            <li>python</li>
            <li>pytorch</li>
            <li>gym</li>
          </ul>
          <p className="description">
            Trained a reinforcement learning agent that is capable of playing
            Super Mario Bros entirely on its own using the Double Q-Learning
            algorithm.
          </p>
        </a>
        <a
          href="https://github.com/darrenhoang12/BPS_multi_labeling"
          target="_blank"
          className="bps_multi project"
        >
          <h2 className="title">BPS Microscopy</h2>
          <ul className="tech">
            <li>python</li>
            <li>pytorch</li>
            <li>wandb</li>
            <li>aws</li>
          </ul>
          <p className="description">
            Retrieved irradiated mouse cell image data from AWS and implemented
            a supervised learning model to predict types of radiation and damage
            incurred. Collaborated with NASA GeneLab Scientists.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
