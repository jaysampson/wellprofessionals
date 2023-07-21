import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import "../LandingPage/Landingpage.scss";
import star from "../../assets/Icons/Star.svg";
import halfstar from "../../assets/Icons/Half-star.svg";
import emptystar from "../../assets/Icons/emptystar.svg";
import testy from "../../assets/Images/testy.svg";
import question from "../../assets/Images/question.svg";
import think from "../../assets/Images/think.svg";
import bulb from "../../assets/Images/bulb.svg";
import statue from "../../assets/Images/statue.svg";
import plus from "../../assets/Icons/plus-circle.svg";
import minus from "../../assets/Icons/minus-circle.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  function handleToggle1() {
    setToggle1(!toggle1);
  }
  function handleToggle2() {
    setToggle2(!toggle2);
  }
  function handleToggle3() {
    setToggle3(!toggle3);
  }
  function handleToggle4() {
    setToggle4(!toggle4);
  }

  return (
    <div>
      <Navbar />
      <div className="landing">
        <div className="landing-con">
          <div className="hero">
            <div className="hero-con">
              <h1>Create your own unique path to knowledge</h1>
              <p>
                Are you looking to kick-start your career, or you’re a seasoned professional seeking to enhance your
                knowledge and skills, our courses are designed to meet your specific needs
              </p>
              <div className="btn-text">
                <Link to='/auth-register'>
                  <button>Get Started</button>
                </Link>
                <div className="trust">
                  <p>Trusted by 50k+ users</p>
                  <div className="star">
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>
                      4.1/5 <span>(14k Reviews)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <body>
            <main>
              <div className="top-rated">
                <div className="top-rated-con">
                  <h3>Top rated courses</h3>
                  <div className="courses">
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <Link to='/overview' className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </Link>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button>Show more courses</button>
              </div>
              <div className="based-on-picks">
                <div className="top-rated-con">
                  <h3>Courses for you based on our picks</h3>
                  <div className="courses">
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="students">
                          <div className="images">
                            <img className="first" src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                          </div>
                          <div className="total-date">
                            <p>867+ Students</p>
                            <span>20 Jan 2022</span>
                          </div>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="students">
                          <div className="images">
                            <img className="first" src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                          </div>
                          <div className="total-date">
                            <p>867+ Students</p>
                            <span>20 Jan 2022</span>
                          </div>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="course-con">
                      <img src={ladies} alt={ladies} className="course-img" />
                      <div className="content">
                        <div className="admin">
                          <div className="admin-title">
                            <img src={pro} alt={pro} />
                            <p>Michael Jordan</p>
                          </div>
                          <p className="check">
                            <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                          </p>
                        </div>
                        <div className="course-name">
                          <h2>Creative Engineering: Lorem ipsum dolor sit amet, consectetur</h2>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#000" />
                        </div>
                        <div className="desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="students">
                          <div className="images">
                            <img className="first" src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                            <img src={pro} alt={pro} />
                          </div>
                          <div className="total-date">
                            <p>867+ Students</p>
                            <span>20 Jan 2022</span>
                          </div>
                        </div>
                        <div className="price-add">
                          <div className="price">
                            <p>₦2,549.99</p>
                            <div className="slice">₦4,449.99</div>
                          </div>
                          <button>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                    <button>Show more courses</button>
                  </div>
                </div>
              </div>
              <div className="what-course">
                <p>What course you looking for?</p>
                <div className="options">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
              <div className="new">
                <h2>New Classes (1093)</h2>
                <div className="new-courses">
                  <div className="course-con">
                    <img src={ladies} alt={ladies} className="course-img" />
                    <div className="content">
                      <div className="admin-title">
                        <p>John Doe</p>
                        <p className="check">
                          <FontAwesomeIcon icon={faCheck} size="2xs" color="black" />
                        </p>
                      </div>
                      <div className="desc">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam dolorum minima
                          accusantium eos quisquam facere? Doloribus quam doloremque veritatis!
                        </p>
                      </div>
                      <div className="rating">
                        <div className="star">
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={halfstar} alt={halfstar} />
                          <img src={emptystar} alt={emptystar} />
                        </div>
                        <div className="rated">
                          <p>43k Ratings</p>
                        </div>
                      </div>
                      <div className="price">
                        <p>₦2,300</p>
                        <div className="slice">₦4,300</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-con">
                    <img src={ladies} alt={ladies} className="course-img" />
                    <div className="content">
                      <div className="admin-title">
                        <p>John Doe</p>
                        <p className="check">
                          <FontAwesomeIcon icon={faCheck} size="2xs" color="black" />
                        </p>
                      </div>
                      <div className="desc">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam dolorum minima
                          accusantium eos quisquam facere? Doloribus quam doloremque veritatis!
                        </p>
                      </div>
                      <div className="rating">
                        <div className="star">
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={halfstar} alt={halfstar} />
                          <img src={emptystar} alt={emptystar} />
                        </div>
                        <div className="rated">
                          <p>43k Ratings</p>
                        </div>
                      </div>
                      <div className="price">
                        <p>₦2,300</p>
                        <div className="slice">₦4,300</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-con">
                    <img src={ladies} alt={ladies} className="course-img" />
                    <div className="content">
                      <div className="admin-title">
                        <p>John Doe</p>
                        <p className="check">
                          <FontAwesomeIcon icon={faCheck} size="2xs" color="black" />
                        </p>
                      </div>
                      <div className="desc">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam dolorum minima
                          accusantium eos quisquam facere? Doloribus quam doloremque veritatis!
                        </p>
                      </div>
                      <div className="rating">
                        <div className="star">
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={halfstar} alt={halfstar} />
                          <img src={emptystar} alt={emptystar} />
                        </div>
                        <div className="rated">
                          <p>43k Ratings</p>
                        </div>
                      </div>
                      <div className="price">
                        <p>₦2,300</p>
                        <div className="slice">₦4,300</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-con">
                    <img src={ladies} alt={ladies} className="course-img" />
                    <div className="content">
                      <div className="admin-title">
                        <p>John Doe</p>
                        <p className="check">
                          <FontAwesomeIcon icon={faCheck} size="2xs" color="black" />
                        </p>
                      </div>
                      <div className="desc">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam dolorum minima
                          accusantium eos quisquam facere? Doloribus quam doloremque veritatis!
                        </p>
                      </div>
                      <div className="rating">
                        <div className="star">
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={star} alt={star} />
                          <img src={halfstar} alt={halfstar} />
                          <img src={emptystar} alt={emptystar} />
                        </div>
                        <div className="rated">
                          <p>43k Ratings</p>
                        </div>
                      </div>
                      <div className="price">
                        <p>₦2,300</p>
                        <div className="slice">₦4,300</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button>Show more courses</button>
              </div>
              <div className="testimonial">
                <p>3940+ Happy Well Professionals Users</p>
                <h3>Don’t just take our words</h3>
                <div className="testimony-main">
                  <div className="testimony-con">
                    <img src={testy} alt={testy} className="testy" />
                    <div className="rating-text">
                      <div className="sta">
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                      </div>
                      <p>"We love Wells professionals! Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                      <span>Eze Wilson</span>
                    </div>
                  </div>
                  <div className="testimony-con">
                    <img src={testy} alt={testy} className="testy" />
                    <div className="rating-text">
                      <div className="sta">
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                      </div>
                      <p>"We love Wells professionals! Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                      <span>Eze Wilson</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <div className="faq-con">
                  <div className="faq-questions">
                    <div className="top-text">
                      <h3>Frequently asked questions</h3>
                      <p>Everything you need to know about the product and billing.</p>
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <p>Is there a free trail available?</p>
                        <img src={toggle1 ? minus : plus} alt="loading" onClick={handleToggle1} />
                      </div>
                      <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <p>Is there a free trail available?</p>
                        <img src={toggle2 ? minus : plus} alt="loading" onClick={handleToggle2} />
                      </div>
                      <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <p>Is there a free trail available?</p>
                        <img src={toggle3 ? minus : plus} alt="loading" onClick={handleToggle3} />
                      </div>
                      <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <p>Is there a free trail available?</p>
                        <img src={toggle4 ? minus : plus} alt="loading" onClick={handleToggle4} />
                      </div>
                      <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                  </div>
                  <img src={question} alt={question} className="faq-img" />
                </div>
              </div>
              <div className="other-faq">
                <div className="group-image">
                  <img src={think} alt={think} className="think" />
                  <img src={bulb} alt={bulb} className="bulb" />
                  <img src={statue} alt={statue} className="statue" />
                </div>
                <div className="text">
                  <p>Still have questions?</p>
                  <span>Can’t find the answer you’re looking for? Please chat to our friendly team.</span>
                </div>
                <Link to='/contact'>
                  <button>Get in touch</button>
                </Link>
              </div>
            </main>
          </body>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
