import React from "react";
import "../T&C/T&C.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";

const TC = () => {
  return (
    <>
      <Navbar />
      <div className="tc">
        <h1>Terms and Conditions</h1>
        <div className="tc-body">
          <div className="term">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using the Well Professionals website
              (wellprofs.com), you agree to comply with and be bound by these
              Terms and Conditions. If you do not agree to these terms, please
              do not use the Website.
            </p>
          </div>
          <div className="term">
            <h3>2. User Registration</h3>
            <ul>
              <li>
                <span>a. Students: </span>
                To access and enroll in courses on the Website, users must
                create an account. You agree to provide accurate and complete
                information during the registration process.
              </li>
              <li>
                <span>b. Instructors: </span> Instructors must also register for
                an account to upload and manage courses. You agree to provide
                accurate and complete information during the registration
                process.
              </li>
            </ul>
          </div>
          <div className="term">
            <h3>3. Course Enrollment and Payment</h3>
            <ul>
              <li>
                <span>a. Students: </span>When you enroll in a course, you agree
                to pay the fees associated with that course as specified on the
                Website. and complete information during the registration
                process.
              </li>
              <li>
                <span>b. Instructors: </span>Instructors may upload courses and
                set their own prices. Well Professionals may deduct a commission
                from the course fees as specified in our Instructor Agreement.
              </li>
            </ul>
          </div>
          <div className="term">
            <h3>4. User Content</h3>
            <ul>
              <li>
                <span>a. Students: </span>You retain ownership of any content
                you submit to the Website, such as reviews, comments, or
                questions, but grant Well Professionals a worldwide,
                non-exclusive, royalty-free license to use, reproduce, and
                distribute that content.
              </li>
              <li>
                <span>b. Instructors: </span>You retain ownership of course
                content you upload, but grant Well Professionals a license to
                host, display, and distribute your course materials on the
                Website.
              </li>
            </ul>
          </div>
          <div className="term">
            <h3>5. Privacy</h3>
            <p>
              Our Privacy Policy explains how we collect, use, and protect your
              personal information. By using the Website, you agree to the
              practices outlined in our Privacy Policy.
            </p>
          </div>
          <div className="term">
            <h3>6. Code of Conduct</h3>
            <ul>
              <li>
                <span>a.Users </span>agree to conduct themselves in a respectful
                and appropriate manner on the Website. Harassment, hate speech,
                or any form of abusive behavior will not be tolerated.
              </li>
              <li>
                <span>b. Instructors</span> agree to provide accurate and
                high-quality course content to students.
              </li>
            </ul>
          </div>
          <div className="term">
            <h3>7. Termination</h3>
            <p>
              Well Professionals reserves the right to suspend or terminate user
              accounts for violations of these Terms and Conditions or for any
              other reason deemed necessary.
            </p>
          </div>
          <div className="term">
            <h3>8. Disclaimer of Warranties</h3>
            <p>
              Well Professionals provides the Website on an "as-is" and
              "as-available" basis. We do not guarantee the accuracy,
              reliability, or availability of the Website or its content.
            </p>
          </div>
          <div className="term">
            <h3>9. Limitation of Liability</h3>
            <p>
              Well Professionals is not liable for any direct, indirect,
              incidental, special, or consequential damages resulting from the
              use or inability to use the Website or its content.
            </p>
          </div>
          <div className="term">
            <h3>10. Governing Law</h3>
            <p>
              These Terms and Conditions are governed by the laws of the Federal
              Republic of Nigeria. Any legal actions related to these terms
              shall be filed in the appropriate court within the jurisdiction.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TC;
