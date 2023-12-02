import React from "react";
import "./FAQ.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="faq-bgc">
        <div className="faq-hero">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <h3>
            Whether you have a question, need technical assistance, or want to
            provide feedback, our customer support team is here to help.
          </h3>
        </div>
        <body>
          <section>
            <h4>1. Account and Registration:</h4>
            <div className="section-body">
              <p>
                <span>
                  Q1: How do I create an account on Well Professionals?
                </span>
                A1: To create an account, click on the "Sign Up" button on the
                homepage, fill in the required information, and follow the
                prompts to complete the registration process.
              </p>
              <p>
                <span>Q2: What should I do if I forgot my password? </span> A2:
                Click on the "Forgot Password" link on the login page, enter
                your email address, and follow the instructions sent to your
                email to reset your password.
              </p>
              <p>
                <span>
                  Q3: Can I change the email address associated with my account?
                </span>
                A3: Yes, you can update your email address in the account
                settings. Go to the "Account" section and select "Change Email."
              </p>
            </div>
          </section>
          <section>
            <h4>2. Courses and Learning Materials:</h4>
            <div className="section-body">
              <p>
                <span>Q1: How do I enroll in a course? </span>
                A1: Browse our course catalog, select your desired course, and
                click "Enroll." Follow the payment process to gain instant
                access to the course materials.
              </p>
              <p>
                <span>
                  Q2: Are course materials accessible after completion?
                </span>
                A2: Yes, you will have continued access to course materials even
                after completing the course.
              </p>
              <p>
                <span>
                  Q3: What types of learning materials are included in the
                  courses?
                </span>
                A3: Our courses include a variety of materials such as video
                lectures, readings, quizzes, and interactive assignments to
                enhance your learning experience.
              </p>
            </div>
          </section>
          <section>
            <h4>3. Payment and Pricing:</h4>
            <div className="section-body">
              <p>
                <span>Q1: What payment methods do you accept? </span>
                A1: We accept major credit cards and other secure payment
                methods. Choose your preferred option during the checkout
                process.
              </p>
              <p>
                <span>
                  Q3: Can I get a refund if I am not satisfied with a course?{" "}
                </span>
                A3: We offer a satisfaction guarantee. If you're not satisfied
                within the first 7 days, contact us for a full refund.
              </p>
              <p>
                <span>
                  Q3: What types of learning materials are included in the
                  courses?
                </span>
                A3: Our courses include a variety of materials such as video
                lectures, readings, quizzes, and interactive assignments to
                enhance your learning experience.
              </p>
            </div>
          </section>
          <section>
            <h4>4. Technical Issues: </h4>
            <div className="section-body">
              <p>
                <span>
                  Q1: I'm having trouble accessing a course. What should I do?{" "}
                </span>
                A1: Check your internet connection and browser settings. If the
                issue persists, contact our technical support team for
                assistance.
              </p>
              <p>
                <span>
                  Q3: Can I get a refund if I am not satisfied with a course?{" "}
                </span>
                A3: We offer a satisfaction guarantee. If you're not satisfied
                within the first 7 days, contact us for a full refund.
              </p>
              <p>
                <span>Q2: Are the courses mobile-friendly? </span>
                A2: Yes, our courses are designed to be accessible on various
                devices, including mobile phones and tablets.
              </p>
            </div>
          </section>
          <section>
            <h4>5. Instructors and course creators</h4>
            <div className="section-body">
              <p>
                <span>
                  Q1: How are instructors and Course Creators selected?
                </span>
                A1: Our instructors and Course Creators are industry
                professionals with proven expertise and a passion for education.
                We carefully vet each candidate to ensure high-quality content.
              </p>
              <p>
                <span>
                  Q2: Can I contact an instructor with questions about the
                  course content?
                </span>
                A2: Yes, you can communicate with instructors through the course
                discussion forums or designated communication channels.
              </p>
              <p>
                <span>Q3: Are the instructors industry professionals?</span> A3:
                Absolutely, our instructors bring real-world experience and
                industry knowledge to the virtual classroom.
              </p>
            </div>
          </section>
          <section>
            <h4>6. Certificates and Accreditation: </h4>
            <div className="section-body">
              <p>
                <span>
                  Q1: Will I receive a certificate upon course completion?
                </span>
                A1: Yes, upon successful completion of a course, you will
                receive a digital certificate that you can share on your
                professional profile.
              </p>
              <p>
                <span>Q2: Is the certificate recognized in the industry? </span>
                A2: Our certificates carry OGTAN accreditation and are designed
                to reflect industry standards; many employers recognize and
                value the skills gained through our courses.
              </p>
              <p>
                <span>Q3: How can I verify my certificate? </span> A3:
                Certificates issued by Well Professionals can be easily verified
                by employers through our certificate verification tool.
              </p>
            </div>
          </section>
          <section>
            <h4>7. Account Security:</h4>
            <div className="section-body">
              <p>
                <span>Q1: How is my personal information secured? </span>
                A1: We take the security of your information seriously. Our
                platform employs industry-standard encryption and security
                measures to protect your data.
              </p>
              <p>
                <span>
                  Q2: What measures are in place to protect my account from
                  unauthorized access?
                </span>
                A2: You can enhance your account security by enabling two-factor
                authentication in the account settings.
              </p>
              <p>
                <span>
                  Q3: Can I enable two-factor authentication for my account?
                </span>{" "}
                A3: Yes, you can enable two-factor authentication for an extra
                layer of security.
              </p>
            </div>
          </section>
          <section>
            <h4>8. Partnerships and Collaborations:</h4>
            <div className="section-body">
              <p>
                <span>
                  Q1: How are instructors and Course Creators selected?
                </span>
                Q1: How can my organization partner with Well Professionals? A1:
                To explore partnership opportunities, please visit our "Partner
                with Well Professionals" page or contact our partnership team at{" "}
                <a href="mailto:partnerships@wellprofs.com">
                  partnerships@wellprofs.com .
                </a>
              </p>
              <p>
                <span>
                  Q2: Are there opportunities for content collaboration?
                </span>
                A2: Yes, we welcome collaboration with educational institutions
                and industry experts for content creation. Reach out to our
                partnership team to discuss collaboration possibilities.
              </p>
              <p>
                <span>
                  Q3: What benefits do educational institutions receive through
                  partnerships?
                </span>{" "}
                A3: Educational institutions partnering with Well Professionals
                gain access to a range of benefits, including co-developing
                courses, expanding their reach, and engaging with a global
                audience.
              </p>
            </div>
          </section>
          <section>
            <h4>9. Career Opportunities:</h4>
            <div className="section-body">
              <p>
                <span>
                  Q1: Are there job opportunities available at Well
                  Professionals?
                </span>
                A1: Explore our <Link to="/careers">"Careers"</Link> page for
                current job openings. We regularly update our listings with new
                opportunities.
              </p>
              <p>
                <span>
                  Q2: How can I apply for a position with Well Professionals?
                </span>
                A2: To apply for a position, follow the application instructions
                provided in the job listing on our{" "}
                <Link to="/careers">"Careers"</Link> page.
              </p>
              <p>
                <span>
                  Q3: What qualities are you looking for in potential team
                  members?
                </span>
                A3: We value individuals who are passionate about education,
                innovation, and making a positive impact. Check the job listings
                for specific qualifications.
              </p>
            </div>
          </section>
          <section>
            <h4>10. Contacting Customer Support:</h4>
            <div className="section-body">
              <p>
                <span>Q1: How can I reach the customer support team? </span>
                A1: Contact our customer support team through live chat, email
                at{" "}
                <a href="mailto:support@wellprofs.com">
                  support@wellprofs.com{" "}
                </a>
                , or by phone at 0700-XX-XXX.
              </p>
              <p>
                <span>
                  Q2: What are the response times for customer support
                  inquiries?
                </span>
                A2: We strive to respond to inquiries within 24 hours. Response
                times may vary based on the nature of the inquiry.
              </p>
              <p>
                <span>Q3: Is customer support available on weekends? </span> A3:
                Our customer support team is available during regular business
                hours. For urgent matters, please use our live chat feature.
              </p>
            </div>
          </section>
        </body>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
