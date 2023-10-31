import React from "react";
import "../PrivacyPolicy/PrivacyPolicy.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <div className="pp-body">
          <div className="policy">
            <h3>1. Information We Collect</h3>
            <ul>
              <li>
                <span>a. Personal Information:</span> We collect information
                provided during user registration, such as name, email address,
                and payment details.
              </li>
              <li>
                <span>b. Usage Information:</span> We may collect data on how
                you use the Website, such as your browsing history and
                interactions with course content.
              </li>
            </ul>
          </div>
          <div className="policy">
            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>
                <span>a. To Provide Services:</span> We use your information to
                operate and maintain the Website, including processing payments,
                providing customer support, and delivering course content.
              </li>
              <li>
                <span>b. Communications:</span> We may use your email address to
                send you updates, newsletters, or important information about
                your account.
              </li>
            </ul>
          </div>
          <div className="policy">
            <h3>3. Sharing Your Information</h3>
            <ul>
              <li>
                <span>a. Instructors:</span> Your name, profile picture, and
                course enrollment information may be shared with instructors
                whose courses you enroll in.
              </li>
              <li>
                <span>b. Legal Requirements:</span> We may disclose your
                information in response to legal requests or to comply with
                applicable laws.
              </li>
            </ul>
          </div>
          <div className="policy">
            <h3>4. Security</h3>
            <p>
              We take reasonable measures to protect your personal information
              but cannot guarantee complete security. Users are responsible for
              maintaining the confidentiality of their account credentials.
            </p>
          </div>
          <div className="policy">
            <h3>5. Cookies and Tracking</h3>
            <p>
              We use cookies and similar technologies to track user behavior on
              the Website and provide a better user experience.
            </p>
          </div>
          <div className="policy">
            <h3>6. Changes to this Privacy Policy</h3>
            <p>
              We may update this Privacy Policy periodically. Users will be
              notified of any significant changes.
            </p>
          </div>
          <div className="policy">
            <h3>7. Contact Us</h3>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at support@wellprofs.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
