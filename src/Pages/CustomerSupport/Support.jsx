import React from "react";
import "./Support.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="support-bgc">
        <div className="support-hero">
          <h1>CUSTOMER SUPPORT</h1>
          <h3>
            Whether you have a question, need technical assistance, or want to
            provide feedback, our customer support team is here to help.
          </h3>
        </div>
        <body>
          <section>
            <h4>How We Can Assist You?</h4>
            <div className="section-body">
              <p>
                <span>1. General Inquiries: </span>Have a question about our
                courses, policies, or platform features? Our customer support
                team is ready to provide timely and helpful information.{" "}
              </p>
              <p>
                <span>2. Technical Support:</span> Encountering technical
                issues? We're here to troubleshoot and ensure you have a smooth
                learning experience. Contact us for assistance with login
                issues, course access, or any technical difficulties.
              </p>
              <p>
                <span> 3. Feedback and Suggestions:</span>
                Your feedback is invaluable to us. Share your thoughts on how we
                can improve and better serve your learning needs. We appreciate
                hearing from our users.
              </p>
            </div>
          </section>
          <section>
            <h4>Contact Options</h4>
            <div className="section-body">
              <p>
                <span>1. Live Chat:</span>Connect with a customer support
                representative in real-time through our live chat feature. Look
                for the chat icon in the bottom right corner of your screen.
              </p>
              <p>
                <span>2. Email Support:</span> Encountering technical issues?
                We're here to troubleshoot and ensure you have a smooth learning
                experience. Contact us for assistance with login issues, course
                access, or any technical difficulties.
              </p>
              <p>
                <span>3. Frequently Asked Questions (FAQs):</span> Explore our
                comprehensive FAQ section for quick answers to common questions.
                It's a convenient resource available 24/7.
              </p>
              <p>
                <span> 4. Phone Support:</span>
                For urgent matters or direct assistance, you can reach our
                customer support team by phone at 0700-XX-XX-XX.
              </p>
            </div>
          </section>
          <section>
            <h4> Our Commitment to You </h4>
            <div className="section-body">
              <p>
                <span>1. Timely Responses:</span> We strive to respond to your
                inquiries promptly. Our goal is to provide timely and effective
                solutions to ensure a positive experience with Well
                Professionals.
              </p>
              <p>
                <span>2. User-Centric Approach:</span> Your satisfaction is our
                priority. We listen to your needs and continuously work to
                enhance our platform based on user feedback.
              </p>
              <p>
                <span>3. Continuous Improvement:</span> We are committed to
                continuous improvement in our customer support processes and
                services. Your input helps us refine and enhance the Well
                Professionals experience for all users.
              </p>
            </div>
          </section>
          <section>
            <h4> Report an Issue </h4>
            <div className="section-body">
              <p>
                If you encounter any issues with our platform or services,
                please report them to our support team at
                <a href="mailto:report-issue@wellprofs.com.">
                  {" "}
                  report-issue@wellprofs.com
                </a>
                " " . We appreciate your assistance in maintaining the integrity
                and functionality of our online learning environment.
              </p>
            </div>
          </section>
        </body>
      </div>
      <Footer />
    </>
  );
};

export default Support;
