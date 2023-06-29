import React from "react";
import contactperson from "../../images/contact-person.svg";
import { Link } from "react-router-dom";
import Footer from "../others/Footer";
import "../../assets/scss/other-pages/Contact.scss";
import LandingNav from "./Navbars/LandingNav";

const Contact = () => {
  return (
    <div>
      <LandingNav />
      <div className="contact">
        <div className="contact-container">
          <div className="contact-hero">
            <div className="contact-hero-con">
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
          <body>
            <div className="form-section">
              <div className="form">
                <div className="heading">
                  <h5>Get in touch</h5>
                  <p>Our friendly team would love to hear from you.</p>
                </div>
                <form action="POST">
                  <div className="names">
                    <div className="fill-names">
                      <label htmlFor="">First name</label>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="fill-names">
                      <label htmlFor="">Last name</label>
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="fill">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="you@company.com" />
                  </div>
                  <div className="fill-number">
                    <label htmlFor="">Phone number</label>
                    <div className="number">
                      <select name="" id=""></select>
                      <input type="email" placeholder="+234 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="fill">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>
                      You agree to our friendly{" "}
                      <Link to="/" className="privacy">
                        privacy policy.
                      </Link>
                    </p>
                  </div>
                </form>
                <button>Send Message</button>
              </div>
              <img src={contactperson} alt={contactperson} />
            </div>
          </body>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
