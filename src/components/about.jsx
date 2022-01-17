import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// GLIDE
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// img
import img_0 from "../images/me.jpg";

const AboutComponent = () => {
  return (
    <div className="about wrapper">
      <div className="resume-wrapper">
        <section className="profile section-padding">
          <div className="container">
            <div className="picture-resume-wrapper">
              <div className="picture-resume">
                <span>
                  {" "}
                  <img src={img_0} alt="Profile Picture" />{" "}
                </span>
                <svg version="1.1" viewBox="0 0 350 350">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="8"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                        result="cm"
                      />
                    </filter>
                  </defs>

                  <g filter="url(#goo)">
                    <circle
                      id="main_circle"
                      className="st0"
                      cx="171.5"
                      cy="175.6"
                      r="130"
                    />

                    <circle
                      id="circle"
                      className="bubble1 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble2 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble3 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble4 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble5 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble6 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble7 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble8 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble9 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble10 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                  </g>
                </svg>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="name-wrapper">
              <h1>France Lee</h1>
            </div>
            <div className="clearfix"></div>
            <h3>Contact Info</h3>
            <div className="contact-info clearfix">
              <ul className="list-titles">
                <li>Call</li>
                <li>Mail</li>
                <li>Home</li>
              </ul>
              <ul className="list-content ">
                <li>+63 915 427 9838</li>
                <Link to="/contact">
                  <li>francelee594@gmail.com</li>
                </Link>
                <li>Manila, Philippines</li>
              </ul>
            </div>
            <div className="contact-presentation">
              <p>
                Hi! I'm France Lee. I'm a 22-year-old guy from the Philippines.
                I am a self-taught Web Developer. I enjoy coding, especially
                taking a lot of challenges.{" "}
              </p>
            </div>
            <div className="contact-social clearfix">
              <ul className="list-titles">
                <li>Twitter</li>
                <li>Github</li>
                <li>Codepen</li>
              </ul>
              <ul className="list-content">
                <li>
                  <a href="https://twitter.com/my_oblivion1">@my_oblivion1</a>
                </li>
                <li>
                  <a href="">myoblivion</a>
                </li>
                <li>
                  <a href="https://codepen.io/francelee494">@francelee494</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="experience section-padding">
          <div className="container">
            <h3 className="experience-title">Experience</h3>

            <div className="experience-wrapper">
              <div className="company-wrapper clearfix">
                <div className="experience-title">Serendipity Tea Bar</div>
                <div className="time">July 2017 - April 2018</div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">Barista </div>
                <div className="company-description">
                  <p>
                    It was a very nice experience. Especially the tiring days
                    where I'll be satisfied wheneve my shift was over. I made a
                    lot of Milk tea beverages and yeah it was a very lovely
                    experience!
                  </p>
                </div>
              </div>

              <div className="company-wrapper clearfix">
                <div className="experience-title">Tokeru Cafe</div>
                <div className="time"> August 2018 - March 2019</div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">Work Staff</div>
                <div className="company-description">
                  <p>
                    It was a very lovely experience. I make a lot of lava cakes
                    with ice cream on top of it which is very delicious. A lot
                    of people enjoyed the deserts that we serve and you can see
                    their smiles which is awesome!
                  </p>
                </div>
              </div>

              <div className="company-wrapper clearfix">
                <div className="experience-title">Freelancer</div>
                <div className="time">Nov 2021 - Present</div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  {" "}
                  Web Designer / Web Developer{" "}
                </div>
                <div className="company-description">
                  <p>
                    I hope I experience a lot of things about this work, and
                    also learn a lot. I enjoy taking a lot of challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-wrapper clearfix">
              <h3 className="section-title">Skills</h3>
              <ul>
                <li className="skill-percentage">HTML / HTML5</li>
                <li className="skill-percentage">CSS / CSS3 / SASS</li>
                <li className="skill-percentage">Javascript</li>
                <li className="skill-percentage">Jquery</li>
                <li className="skill-percentage">Wordpress</li>
                <li className="skill-percentage">Photoshop</li>
                <li className="skill-percentage">Reactjs</li>
              </ul>
            </div>

            <div className="section-wrapper clearfix">
              <h3 className="section-title">Hobbies</h3>
              <p>
                I draw traditionally most of the time, since I find it very
                relaxing. I also use Photoshop for a lot of things. Memes, logo,
                photo manipulations, and vector.
              </p>
              <p>
                A lot of times, I love to listen to music, whenever I go
                outside, draw, or do any kinds of work. I love music!
              </p>
            </div>
          </div>
        </section>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};
// France Lee
export default AboutComponent;
