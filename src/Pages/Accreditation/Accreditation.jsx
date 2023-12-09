import React from "react";
import { Link } from "react-router-dom";
import "./Accreditation.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";

const Accreditation = () => {
  return (
    <div>
      <Navbar />
      <div className="accreditation-bgc">
        <div className="accreditation-hero">
          <h1>ACCREDITATION</h1>
          <h3>
            At Well Professionals, we take pride in delivering industry-relevant
            education of the highest quality. Our commitment to excellence is
            reflected in our accreditation through a partnership with a
            reputable third party registered under the Oil & Gas Trainers
            Association of Nigeria (OGTAN).
          </h3>
        </div>
        <body>
          <section>
            <h4>Accreditation through OGTAN:</h4>
            <div className="section-body">
              <p>
                Our certificates are accredited in collaboration with a
                third-party organization that is a proud member of OGTAN, a
                respected authority in the oil and gas training sector in
                Nigeria. This accreditation affirms that our courses meet
                rigorous standards set by industry professionals, ensuring that
                your learning experience is both valuable and recognized in the
                field.
              </p>
            </div>
          </section>

          <section>
            <h4>Why Accreditation Matters:</h4>
            <div className="section-body">
              <p>
                <span>• Industry Recognition: </span> We believe in fostering an
                inclusive workplace that celebrates diverse perspectives,
                backgrounds, and experiences.
              </p>
              <p>
                <span>• Enhanced Employability: </span> : Graduates of Well
                Professionals' accredited courses can showcase their credentials
                with confidence, knowing that their training meets or exceeds
                industry standards.
              </p>
              <p>
                <span>• Continuous Quality Assurance: </span> Our commitment to
                accreditation is an ongoing process, ensuring that our courses
                evolve with industry advancements and adhere to the highest
                standards of quality.
              </p>
            </div>
          </section>
          <section>
            <h4>Certificate Verification:</h4>
            <div className="section-body">
              <p>
                Each certificate issued by Well Professionals carries a unique
                identifier that allows employers and other stakeholders to
                verify its authenticity through our certificate verification
                tool. This adds an extra layer of assurance and transparency to
                the accreditation process.
              </p>
            </div>
          </section>
          <section>
            <h4>Partnering for Success:</h4>
            <div className="section-body">
              <p>
                Our collaboration with OGTAN is a testament to our dedication to
                providing learners with exceptional education and contributing
                to the advancement of the oil and gas industry. Together, we aim
                to empower professionals with the knowledge and skills needed
                for success in this dynamic field.
              </p>
            </div>
          </section>
          <section>
            <h4>Get Started with Accredited Courses:</h4>
            <div className="section-body">
              <p>
                Explore our catalog of accredited courses and take the first
                step toward advancing your career in the oil and gas industry.
              </p>
              <p>
                <Link to="">View Accreditation Courses</Link>
              </p>
            </div>
          </section>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default Accreditation;
