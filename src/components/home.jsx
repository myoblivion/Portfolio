import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="home wrapper">
      <div className="title-home">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <h2>F R A N C L E E</h2>
        <h3>Web Developer</h3>
        <h4>Thanks for visiting my website!</h4>
      </div>
      <div className="button-explore">
        <Link to="/about">
          <div className="btn">
            <p href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>E X P L O R E
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;
