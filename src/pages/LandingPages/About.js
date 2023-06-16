import React from "react";
import Footer from "../others/Footer";
import mission from "../../images/mission-image.svg";
import member from "../../images/member.svg";
import video from "../../images/Video.svg";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "../../assets/scss/other-pages/About.scss";
import check from "../../images/icons/circle-check.svg";
import arrowtilt from "../../images/icons/arrow-tilt.svg";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-container">
          <div className="about-hero">
            <div className="about-hero-con">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <body>
            <div className="why-choose">
              <div className="why-choose-con">
                <header>
                  <p>Say hello to Well Professionals</p>
                  <h3>Why Choose Well Professionals</h3>
                </header>
                <div className="reasons">
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Lorem Ipsum : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Lorem Ipsum : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Lorem Ipsum : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Lorem Ipsum : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission">
              <div className="mission-con">
                <img src={mission} alt={mission} className="mission-img" />
                <div className="mission-writeup">
                  <div className="writeup">
                    <main>Our Mission</main>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac
                      convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”
                    </p>
                  </div>
                  <Link className="read">
                    Read full case study <img src={arrowtilt} alt={arrowtilt} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="team">
              <div className="team-con">
                <div className="team-top">
                  <main>The Brains!</main>
                  <h4>Meet our team</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                  </p>
                </div>
                <div className="members">
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                  <div className="each-member">
                    <img src={member} alt={member} />
                    <div className="name-role">
                      <h5>Lorem ipsum dolor</h5>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video">
              <img src={video} alt={video} />
            </div>
          </body>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
