import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { Link } from "react-router-dom";
import "./Earn.scss";

const Earn = () => {
  return (
    <div>
      <Navbar />
      <div className="earn-bgc">
        <div className="earn-hero">
          <h1>EARN MONEY ON WELL PROFESSIONALS</h1>
          <h3>
            Unlock opportunities to share your expertise and contribute to the
            growth of the oil and gas education community while earning income.
            At Well Professionals, we offer two distinct ways for you to make
            money: by becoming an instructor or joining our affiliate program.
          </h3>
        </div>
        <body>
          <section>
            <h4>1. Become an Instructor:</h4>
            <p>
              <span>Share Your Knowledge: </span>
              Have industry expertise? Become an instructor and share your
              knowledge with professionals worldwide. Create engaging courses
              that empower learners in the oil and gas sector.
            </p>
            <div className="section-body">
              <p>
                <span>Why Teach on Well Professionals?</span>
                <ul>
                  <li>
                    <span>• Global Reach: </span>
                    Reach a diverse audience of learners from around the world.
                  </li>
                  <li>
                    <span>• Flexibility: </span>
                    Create courses on your schedule and share your insights on
                    your terms.
                  </li>
                  <li>
                    <span>• Earn Income: </span>
                    Receive competitive compensation for your contributions.
                  </li>
                </ul>
              </p>
            </div>
            <div className="section-body">
              <p>
                <span>How to Get Started:</span>
                <ul>
                  <li>
                    <span>• Apply: </span>
                    Submit your application to become an instructor{" "}
                    <Link to="/auth-register">here</Link>.
                  </li>
                  <li>
                    <span>• Review: </span>
                    Our team will review your application and assess your
                    expertise.
                  </li>
                  <li>
                    <span>• Create: </span>
                    Once approved, start creating your courses using our
                    user-friendly platform.
                  </li>
                  <li>
                    <span>• Earn : </span>Earn income for every enrolled student
                    in your courses.
                  </li>
                </ul>
              </p>
            </div>
          </section>
          <section>
            <h4>2. Join Our Affiliate Program:</h4>
            <p>
              <span>Promote Well Professionals: </span>
              Promote Well Professionals: Become an affiliate and help us reach
              a wider audience. Promote Well Professionals courses and earn
              commissions for every successful enrollment generated through your
              unique affiliate link.
            </p>
            <div className="section-body">
              <p>
                <span>Why Join the Affiliate Program?</span>
                <ul>
                  <li>
                    <span>• Passive Income: </span>Earn commissions for every
                    sale driven through your referral.
                  </li>
                  <li>
                    <span>• Marketing Resources: </span>
                    Access marketing materials and support to boost your
                    efforts.
                  </li>
                  <li>
                    <span>• Track Performance: </span>
                    Monitor your earnings with our transparent tracking system.
                  </li>
                </ul>
              </p>
            </div>
            <div className="section-body">
              <p>
                How to Get Started:
                <ul>
                  <li>
                    <span>• Apply: </span>
                    Apply for the affiliate program <Link to="">here</Link>.
                  </li>
                  <li>
                    <span>• Receive Your Link: </span>: Upon approval, receive a
                    unique affiliate link.
                  </li>
                  <li>
                    <span>• Promote: </span>
                    Share your link through your network, social media, or
                    website.
                  </li>
                  <li>
                    <span>• Earn Commissions: </span>Earn a commission for every
                    successful enrollment through your link.
                  </li>
                </ul>
              </p>
            </div>
          </section>
          <section>
            <h4>Additional Information:</h4>
            <div className="section-body">
              <p>
                <span>• Comprehensive Support: </span>
                Our team is here to assist you every step of the way, whether
                you're creating courses or participating in our affiliate
                program.
              </p>
              <p>
                <span>• Transparent Earnings: </span>
                Track your earnings and performance through our user-friendly
                dashboard.
              </p>
              <p>
                <span>• Collaborative Community: </span> Join a community of
                instructors and affiliates who share insights and support each
                other.
              </p>
            </div>
            <section>
              <h4>
                Ready to turn your knowledge into income? Join Well
                Professionals and be a part of a thriving community of educators
                and contributors in the oil and gas industry.
              </h4>
              <div className="section-body">
                <p>
                  <Link to="auth-register">• Become an Instructor</Link>
                </p>
                <p>
                  <Link to="auth-register">• Join the Affiliate Program</Link>
                </p>
              </div>
            </section>
          </section>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default Earn;
