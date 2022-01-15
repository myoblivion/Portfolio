import React, { useEffect, useState } from "react";
// GLIDE
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

const ProjectsComponent = () => {
  return (
    <div className="project wrapper">
      <div className="section">
        <h1>Projects</h1>
        <div className="grid">
          <div className="card">
            <div className="card__details">
              <a href="https://myoblivion.github.io/frontend-time-tracker/">
                Frontend Mentor | Time Tracker
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__details">
              <a href="https://myoblivion.github.io/order/">
                Frontend Mentor | Order Summary
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__details">
              <a href="https://myoblivion.github.io/three-column-preview-card/">
                Frontend Mentor | Three Column Preview Card
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__details">
              <a href="https://myoblivion.github.io/fem-tip-calculator/">
                Frontend Mentor | Tip Calculator
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__details">
              <a href="https://myoblivion.github.io/stats-preview-card/">
                Frontend Mentor | Stats Preview Card
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card__details">
              <a href="https://myoblivion.github.io/space-tour-fem/#/">
                Frontend Mentor | Space Tourism
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
