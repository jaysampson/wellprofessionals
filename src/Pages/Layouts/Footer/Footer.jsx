import twitterfoot from "../../../assets/Icons/twitter-footer.svg";
import fbfoot from "../../../assets/Icons/fb-footer.svg";
import instafoot from "../../../assets/Icons/insta-footer.svg";
import githubfoot from "../../../assets/Icons/github-footer.svg";
import FootLogo from "../../../assets/Images/Foot-Logo.svg";
import React from "react";
import "../Footer/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="headers">
              <header>Our Blog</header>
              <h3>Subscribe to our Newsletter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="newsletter">
              <div className="form">
                <form action="POST">
                  <input type="text" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
                <p>
                  We care about your data in our
                  <Link to="/" className="privacy">
                    privacy policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <hr />
            <div className="getstarted">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </h1>
              <button>
                <p>Get Started</p>
                <FontAwesomeIcon icon={faArrowRight} color="white" />
              </button>
            </div>
            <hr />
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-container">
              <div className="footer-about">
                <h4>About Well Professionals</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dictum aliquet accumsan porta lectus ridiculus in
                  mattis. Netus sodales in volutpat ullamcorper amet adipiscing
                  fermentum.
                </p>
                <div className="footer-icons">
                  <img src={twitterfoot} alt={twitterfoot} />
                  <img src={fbfoot} alt={fbfoot} />
                  <img src={instafoot} alt={instafoot} />
                  <img src={githubfoot} alt={githubfoot} />
                </div>
              </div>
              <div className="footer-links">
                <section>
                  <p>Company</p>
                  <ul>
                    <li>
                      <Link to="/about" className="links">
                        About Well Profs
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="links">
                        Course Creators
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="links">
                        Partner with Wellprofs
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="links">
                        Career
                      </Link>
                    </li>
                  </ul>
                </section>
                <section>
                  <p>Help</p>
                  <ul>
                    <Link to="/support">
                      <li>Customer Support</li>
                    </Link>
                    <Link to="/faq">
                      <li>FAQs</li>
                    </Link>
                    <Link to="/terms-conditions">
                      <li>Terms & Conditions</li>
                    </Link>
                    <Link to="/privacy-policy">
                      <li>Privacy Policy</li>
                    </Link>
                  </ul>
                </section>
                <section>
                  <p>Resources</p>
                  <ul>
                    <li>Get App</li>
                    <li>Earn on Well Profs</li>
                    <li>Upcoming Physical Trainings</li>
                    <li>Accreditations</li>
                    <li>Blog</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="footer-last">
            <hr />
            <div className="foot-logo">
              <div className="bottom-logo">
                <img src={FootLogo} alt={FootLogo} />
                <p>WELL PROFESSIONALS</p>
              </div>
              <p>© 2023 Well professionals. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
