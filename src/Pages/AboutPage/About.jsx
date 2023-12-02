import React from "react";
import Footer from "../Layouts/Footer/Footer";
import mission from "../../assets/Images/mission-image.svg";
import member from "../../assets/Images/member.svg";
import video from "../../assets/Images/Video.svg";
import "../AboutPage/About.scss";
import check from "../../assets/Icons/circle-check.svg";
import arrowtilt from "../../assets/Icons/arrow-tilt.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-container">
          <div className="about-hero">
            <div className="about-hero-con">
              <h1>About Us</h1>
              <p>
                Welcome to Well Professionals, your premier online learning
                platform dedicated to advancing knowledge in the dynamic field
                of oil and gas. At Well Professionals, we are committed to
                providing affordable and accessible courses that empower
                individuals to thrive in the upstream, midstream, and downstream
                sectors of the industry.
              </p>
            </div>
          </div>
          <body>
            <div className="why-choose">
              <div className="why-choose-con">
                <header>
                  <p>Say hello to Well Professionals</p>
                  <h2>Why Choose Well Professionals</h2>
                </header>
                <div className="reasons">
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Comprehensive Courses: </span>
                        Explore our curated catalog of courses designed to cover
                        the entire spectrum of the oil and gas industry. Whether
                        you're interested in upstream exploration, midstream
                        transportation, or downstream refining, we have the
                        knowledge you need.
                      </p>
                    </div>
                  </div>
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Affordability: </span>We understand the importance
                        of accessible education. That's why we strive to keep
                        our courses affordable without compromising on quality.
                        Investing in your professional development shouldn't
                        break the bank, and at Well Professionals, it doesn't.
                      </p>
                    </div>
                  </div>
                  <div className="reasons-con">
                    <img src={check} alt={check} />
                    <div className="reason">
                      <p>
                        <span>Industry-Driven Instructors: </span>Learn from
                        seasoned professionals and experts who bring real-world
                        experience to the virtual classroom. Our instructors are
                        dedicated to sharing their insights and preparing you
                        for success in your oil and gas career.
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
                    <h3>Our Mission</h3>
                    <p>
                      “Our mission is to bridge the gap between industry
                      expertise and aspiring professionals by offering
                      high-quality, specialized courses. We believe that
                      education is the cornerstone of success in the
                      ever-evolving oil and gas landscape, and we are dedicated
                      to fostering a learning community that drives innovation
                      and excellence.”
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
                  <h2>What Sets Us Apart?</h2>
                </div>
                <div className="members">
                  <div className="each-member">
                    <div className="name-role">
                      <h4>Innovation</h4>
                      <p>
                        Embrace the latest advancements in the industry with
                        courses that reflect the cutting-edge technologies and
                        practices shaping the oil and gas sector.
                      </p>
                    </div>
                  </div>
                  <div className="each-member">
                    <div className="name-role">
                      <h4>Flexibility</h4>
                      <p>
                        Life is busy, and we understand that. Our online
                        learning platform offers flexibility, allowing you to
                        learn at your own pace and schedule, making education
                        accessible to professionals worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="each-member">
                    <div className="name-role">
                      <h4>Community</h4>
                      <p>
                        Join a vibrant community of learners, industry
                        professionals, and mentors. Connect with like-minded
                        individuals, share experiences, and collaborate on
                        projects that push the boundaries of your knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video">
              <h3>Get Started on Your Learning Journey</h3>
              <p>
                Whether you're a seasoned professional looking to stay ahead of
                industry trends or a newcomer eager to enter the world of oil
                and gas, Well Professionals is here to guide you on your
                learning journey. Explore our courses, meet our passionate
                instructors, and discover how we can help you reach new heights
                in your career. Thank you for choosing Well Professionals. We
                look forward to being a part of your success story.
              </p>
            </div>
          </body>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
