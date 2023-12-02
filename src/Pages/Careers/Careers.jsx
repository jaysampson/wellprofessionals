import React from "react";
import "./Career.scss";

const Careers = () => {
  return (
    <div>
      <div className="careers-bgc">
        <div className="careers-hero">
          <h1>JOIN OUR TEAM AT WELL PROFESSIONALS</h1>
          <h3>
            Welcome to the Well Professionals Careers page, where we believe
            that building a great team is the key to success. If you are
            passionate about education, innovation, and making a positive impact
            in the oil and gas industry, we invite you to explore career
            opportunities with us.
          </h3>
        </div>
        <body>
          <section>
            <h4>Why Work at Well Professionals?</h4>
            <div className="section-body">
              <p>
                <span>• Mission-Driven: </span>
                Be a part of a mission to empower individuals and transform the
                landscape of oil and gas education. At Well Professionals, every
                role contributes to our commitment to excellence.
              </p>
              <p>
                <span>• Innovation: </span>
                Join a dynamic and innovative team that embraces the latest
                technologies and practices in online education. We believe in
                continuous learning and strive to create an environment that
                fosters creativity and forward thinking.
              </p>
              <p>
                <span>• Global Impact: </span> Contribute to a global community
                of learners and professionals. Your work at Well Professionals
                reaches individuals around the world, making a difference in
                their careers and the industry as a whole.
              </p>
            </div>
          </section>
          <section>
            <h4>Current Open Positions</h4>
            <div className="section-body">
              <p>
                Explore the exciting career opportunities currently available at
                Well Professionals. We are always on the lookout for talented
                individuals who share our passion for education and industry
                advancement. Check out our current openings <a href="">here</a>.
              </p>
            </div>
          </section>
          <section>
            <h4>What We Value</h4>
            <div className="section-body">
              <p>
                At Well Professionals, we value diversity, collaboration, and a
                commitment to excellence. Our team members embody these core
                values:
              </p>
              <p>
                <span>• Diversity and Inclusion: </span> We believe in fostering
                an inclusive workplace that celebrates diverse perspectives,
                backgrounds, and experiences.
              </p>
              <p>
                <span>• Collaboration: </span> Teamwork is at the heart of what
                we do. We encourage open communication, idea sharing, and
                collaboration to achieve our common goals.
              </p>
              <p>
                <span>• Continuous Learning: </span> Just as we empower
                learners, we value employees who are dedicated to their own
                professional development.
              </p>
            </div>
          </section>
          <section>
            <h4>How to Apply</h4>
            <div className="section-body">
              <p>
                Ready to embark on a rewarding career with Well Professionals?
                Submit your application for the desired position by following
                the instructions in the job listing. If there isn't a current
                opening that matches your skills, feel free to send us your
                resume and a cover letter outlining your expertise and the type
                of role you're seeking at{" "}
                <a href="careers@wellprofs.com">careers@wellprofs.com</a>.
              </p>
            </div>
          </section>
        </body>
      </div>
    </div>
  );
};

export default Careers;
