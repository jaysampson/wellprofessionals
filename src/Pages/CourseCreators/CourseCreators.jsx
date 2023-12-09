import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import "./CourseCreators.scss";
import { Link } from "react-router-dom";

const CourseCreators = () => {
  return (
    <div>
      <Navbar />
      <div className="creators-bgc">
        <div className="creators-hero">
          <h1>COURSE CREATORS</h1>
          <h3>
            Welcome to the heart of Well Professionals, where industry expertise
            meets educational excellence. Our Course Creators are the driving
            force behind the high-quality, specialized courses that make our
            online learning platform a hub of knowledge in the oil and gas
            sector.
          </h3>
        </div>
        <body>
          <section>
            <h4>Who Are Our Course Creators?</h4>
            <div className="section-body">
              <p>
                Our Course Creators are seasoned professionals, experts, and
                thought leaders in the upstream, midstream, and downstream
                sectors of the oil and gas industry. They bring a wealth of
                real-world experience, cutting-edge insights, and a passion for
                sharing knowledge with aspiring professionals like you.xtensive
                network to expand your influence and impact.
              </p>
            </div>
          </section>
          <section>
            <h4>Why Choose Courses Created by Our Instructors?</h4>
            <div className="section-body">
              <p>
                <span>• Industry Insight: </span>
                Benefit from the expertise of professionals who have navigated
                the complexities of the oil and gas sector. Our Course Creators
                provide unique insights and practical knowledge that goes beyond
                textbooks.
              </p>
              <p>
                <span>• Relevance: </span>
                Stay at the forefront of industry trends with courses designed
                to address the current challenges and opportunities in the
                ever-evolving landscape of oil and gas.
              </p>
              <p>
                <span>• Hands-On Experience: </span>
                Learn from instructors who have not only mastered the theory but
                have also applied their knowledge in the field. Our Course
                Creators bring a hands-on approach to education.
              </p>
            </div>
          </section>
          <section>
            <h4> The Well Professionals Differences </h4>
            <div className="section-body">
              <p>
                <span>• Diverse Perspectives: </span>
                Our Course Creators come from various backgrounds, ensuring a
                diverse range of perspectives and approaches in the courses they
                create. This diversity enriches your learning experience.
                insights and practical knowledge that goes beyond textbooks.
              </p>
              <p>
                <span>• Passion for Teaching: </span>
                Teaching is not just a job for our instructors; it's a passion.
                They are committed to empowering the next generation of
                professionals and sharing their love for the oil and gas
                industry.
              </p>
              <p>
                <span>• Collaboration: </span>
                Experience the collaborative spirit that defines Well
                Professionals. Our Course Creators work together, leveraging
                their collective expertise to create courses that are
                comprehensive, engaging, and impactful.
              </p>
            </div>
          </section>
          <section>
            <h4> Become a Course Creator </h4>
            <div className="section-body">
              <p>
                Are you a seasoned professional with a passion for sharing
                knowledge? Join our community of Course Creators and contribute
                to the growth of the next generation of oil and gas
                professionals. Explore the benefits of becoming an instructor
                with Well Professionals <Link to="/auth-register">here</Link>{" "}
                and be a part of shaping the future of industry education.
              </p>
            </div>
          </section>
          <section>
            <h4> Explore Courses by Our Instructors </h4>
            <div className="section-body">
              <p>
                Ready to embark on a learning journey guided by industry
                experts? Browse through our catalog of courses created by our
                Course Creators and take the first step towards advancing your
                career in the oil and gas sector.
              </p>
            </div>
          </section>
          <section>
            <div className="section-images">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </section>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default CourseCreators;
