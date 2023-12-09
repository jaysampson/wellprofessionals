import React from "react";
import "./Partner.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";

const Partner = () => {
  return (
    <div>
      <Navbar />
      <div className="partners-bgc">
        <div className="partners-hero">
          <h1>PARTNER WITH WELL PROFESSIONALS</h1>
          <h3>
            At Well Professionals, we believe in the power of collaboration to
            drive innovation and excellence in the oil and gas education
            landscape. Partnering with us opens the door to a world of
            opportunities to contribute to industry advancement and shape the
            future of learning. Whether you are an educational institution,
            industry association, technology provider, or a passionate advocate
            for professional development, we welcome partnerships that align
            with our mission of providing high-quality, accessible education.
          </h3>
        </div>
        <body>
          <section>
            <h4>Why Partner with Well Professionals?</h4>
            <div className="section-body">
              <p>
                <span>• Global Reach: </span>Join a platform with a global
                reach, connecting with professionals and learners from around
                the world. Leverage our extensive network to expand your
                influence and impact.
              </p>
              <p>
                <span>• Industry Credibility: </span> Associate your brand with
                a trusted name in oil and gas education. Well Professionals is
                committed to maintaining the highest standards of quality and
                integrity in all our partnerships.
              </p>
              <p>
                <span>• Collaborative Initiatives: </span>
                Work together on collaborative initiatives that benefit the
                industry as a whole. From co-developing courses to hosting joint
                events, partnering with Well Professionals allows for meaningful
                contributions to professional development.
              </p>
            </div>
          </section>
          <section>
            <h4>Types of Partnerships</h4>
            <div className="section-body">
              <p>
                <span>1. Educational Institutions:</span>
                <ul>
                  <li>• Collaborate on curriculum development.</li>
                  <li>
                    • Provide your students with access to our specialized
                    courses.
                  </li>
                  <li>• Explore joint research and educational initiatives.</li>
                </ul>
              </p>
              <p>
                <span>2. Industry Associations:</span>
                <ul>
                  <li>• Contribute to industry-wide knowledge sharing.</li>
                  <li>• Host events, webinars, or workshops together.</li>
                  <li>• Drive initiatives that address industry challenges.</li>
                </ul>
              </p>
              <p>
                <span>3. Technology Providers:</span>
                <ul>
                  <li>
                    • Integrate your technology solutions into our platform.
                  </li>
                  <li>
                    • Explore joint ventures in creating cutting-edge learning
                    tools.
                  </li>
                  <li>
                    • Enhance the online learning experience with innovative
                    solutions.
                  </li>
                </ul>
              </p>
              <p>
                <span> 4. Advocates for Professional Development:</span>
                <ul>
                  <li>• Support our mission to make education accessible.</li>
                  <li>
                    • Explore sponsorship opportunities for scholarships or
                    initiatives.
                  </li>
                  <li>
                    • Join us in empowering professionals to thrive in the oil
                    and gas sector.
                  </li>
                </ul>
              </p>
            </div>
          </section>
          <section>
            <h4> How to Partner with Well Professionals </h4>
            <div className="section-body">
              <p>
                Interested in exploring a partnership with Well Professionals?
                We'd love to discuss how we can collaborate for mutual success.
                Get in touch with our partnership team here (embed{" "}
                <a href="mailto:partner@wellprofs.com">partner@wellprofs.com</a>{" "}
                to “here”) to start the conversation. Whether you have a
                specific idea in mind or want to explore possibilities, we're
                open to building meaningful partnerships that make a lasting
                impact.e a positive experience with Well Professionals.
              </p>
            </div>
          </section>
          <section>
            <h4> Current Partners </h4>
            <div className="section-body">
              <p>
                Explore the diverse range of partners who have already joined us
                on this exciting journey. From leading educational institutions
                to innovative technology providers, our collaborative network
                continues to grow.
              </p>
            </div>
          </section>
          <section>
            <div className="image">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <p>
              Thank you for considering a partnership with Well Professionals.
              Together, let's shape the future of oil and gas education.
            </p>
          </section>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default Partner;
