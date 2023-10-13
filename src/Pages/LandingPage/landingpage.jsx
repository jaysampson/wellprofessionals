import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faSearch,
  faSpinner,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import "../LandingPage/Landingpage.scss";
import star from "../../assets/Icons/Star.svg";
import testy from "../../assets/Images/testy.svg";
import question from "../../assets/Images/question.svg";
import think from "../../assets/Images/think.svg";
import bulb from "../../assets/Images/bulb.svg";
import statue from "../../assets/Images/statue.svg";
import plus from "../../assets/Icons/plus-circle.svg";
import minus from "../../assets/Icons/minus-circle.svg";
import { Link, useNavigate } from "react-router-dom";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import wellslogo from "../../assets/Images/Wells-Logo.svg";
import noimage from "../../assets/Images/noimage.png";
import gif from "../../assets/Images/Loading.gif";

const LandingPage = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const data = useSelector((state) => state.course.data);

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

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const handleSearch = () => {
    // Redirect to the search page with the search query as a route parameter
    if (search) {
      navigate(`/search/${encodeURIComponent(search)}`);
      console.log("search: ", search);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-page">
        <img src={gif} alt={gif} />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {message}</div>;
  } else {
    return (
      <div>
        <Navbar />
        <div className="landing">
          <div className="landing-con">
            <div className="home-hero">
              <div className="hero-text">
                <div className="top-text">
                  <h1>Mastering Oil & Gas, one course at a time</h1>
                  <p>
                    We are dedicated to providing comprehensive online courses
                    in the field of oil and gas
                  </p>
                </div>
                <div className="input-search">
                  <div className="search">
                    <FontAwesomeIcon icon={faSearch} color="#fff" />
                    <input
                      type="text"
                      value={search}
                      placeholder="What course do you want to learn?"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                      <button className="search-1" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="search-2">
                    <button onClick={handleSearch}>Search Course</button>
                  </div>
                </div>
              </div>
              <div className="hero-bottom-colors">
                <div className="brown"></div>
                <div className="blue"></div>
              </div>
            </div>
            <body>
              <main>
                <div className="top-rated">
                  <div className="top-rated-con">
                    <h3>Top rated courses</h3>
                    <div className="courses">
                      {data?.getCourse?.slice(0, 3).map((courses) => (
                        <div className="course-con" key={courses.id}>
                          <img
                            src={courses?.thumbnail?.url || noimage}
                            alt={courses.thumbnail?.url}
                            className="course-img"
                          />
                          <div className="content">
                            <Link
                              to={`/overview/${courses._id}`}
                              className="course-name"
                            >
                              <h5>
                                {courses.name.length > 26
                                  ? courses.name.slice(0, 26) + "..."
                                  : courses.name}
                              </h5>
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                color="#000"
                                size="sm"
                              />
                            </Link>
                            <div className="desc">
                              <span>
                                {courses.description.length > 65
                                  ? courses.description.slice(0, 65) + "..."
                                  : courses.description}
                              </span>
                            </div>
                            <div className="admin">
                              <span style={{ color: "#CD760F" }}>
                                {" "}
                                by Michael Jordan
                              </span>
                              <p className="check">
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#000"
                                  size="2xs"
                                />
                              </p>
                            </div>
                            <div className="rating">
                              <div className="star">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStarHalf}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                              </div>
                              <div className="rated">
                                <span>43k Ratings</span>
                              </div>
                            </div>
                            <div className="price-add">
                              <div className="price">
                                <p> {`₦${courses.price}`}</p>
                                <span className="slice">
                                  {`₦${courses.estimatedPrice}`}
                                </span>
                              </div>
                              <button>Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button>Show more courses</button>
                </div>
                <div className="based-on-picks">
                  <div className="top-rated-con">
                    <h2>Courses for you based on your picks</h2>
                    <div className="courses">
                      {data?.getCourse?.slice(0, 3).map((courses) => (
                        <div className="course-con" key={courses.id}>
                          <img
                            src={courses?.thumbnail?.url || noimage}
                            alt={courses.thumbnail?.url}
                            className="course-img"
                          />
                          <div className="content">
                            <Link
                              to={`/overview/${courses._id}`}
                              className="course-name"
                            >
                              <h5>
                                {courses.name.length > 26
                                  ? courses.name.slice(0, 26) + "..."
                                  : courses.name}
                              </h5>
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                color="#000"
                                size="sm"
                              />
                            </Link>
                            <div className="desc">
                              <span>
                                {courses.description.length > 65
                                  ? courses.description.slice(0, 65) + "..."
                                  : courses.description}
                              </span>
                            </div>
                            <div className="admin">
                              <span style={{ color: "#CD760F" }}>
                                {" "}
                                by Michael Jordan
                              </span>
                              <p className="check">
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#000"
                                  size="2xs"
                                />
                              </p>
                            </div>
                            <div className="rating">
                              <div className="star">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStarHalf}
                                  size="2xs"
                                  color="#F8C51B"
                                />
                              </div>
                              <div className="rated">
                                <span>43k Ratings</span>
                              </div>
                            </div>
                            <div className="price-add">
                              <div className="price">
                                <p> {`₦${courses.price}`}</p>
                                <span className="slice">
                                  {`₦${courses.estimatedPrice}`}
                                </span>
                              </div>
                              <button>Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button>Show more courses</button>
                  </div>
                </div>
                <div className="what-course">
                  <h2>What course you looking for?</h2>
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
                  <div className="courses">
                    {data?.getCourse?.slice(0, 3).map((courses) => (
                      <div className="course-con" key={courses.id}>
                        <img
                          src={courses?.thumbnail?.url || noimage}
                          alt={courses.thumbnail?.url}
                          className="course-img"
                        />
                        <div className="content">
                          <Link
                            to={`/overview/${courses._id}`}
                            className="course-name"
                          >
                            <h5>
                              {courses.name.length > 26
                                ? courses.name.slice(0, 26) + "..."
                                : courses.name}
                            </h5>
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              color="#000"
                              size="sm"
                            />
                          </Link>
                          <div className="desc">
                            <span>
                              {courses.description.length > 65
                                ? courses.description.slice(0, 65) + "..."
                                : courses.description}
                            </span>
                          </div>
                          <div className="admin">
                            <span style={{ color: "#CD760F" }}>
                              {" "}
                              by Michael Jordan
                            </span>
                            <p className="check">
                              <FontAwesomeIcon
                                icon={faCheck}
                                color="#000"
                                size="2xs"
                              />
                            </p>
                          </div>
                          <div className="rating">
                            <div className="star">
                              <FontAwesomeIcon
                                icon={faStar}
                                size="2xs"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                size="2xs"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                size="2xs"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                size="2xs"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStarHalf}
                                size="2xs"
                                color="#F8C51B"
                              />
                            </div>
                            <div className="rated">
                              <span>43k Ratings</span>
                            </div>
                          </div>
                          <div className="price-add">
                            <div className="price">
                              <p> {`₦${courses.price}`}</p>
                              <span className="slice">
                                {`₦${courses.estimatedPrice}`}
                              </span>
                            </div>
                            <button>Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button>Show more courses</button>
                </div>
                <div className="testimonial">
                  <p>3940+ Happy Well Professionals Users</p>
                  <h3>Don't just take our words</h3>
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
                        <p>
                          "We love Wells professionals! Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit."
                        </p>
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
                        <p>
                          "We love Wells professionals! Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit."
                        </p>
                        <span>Eze Wilson</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="faq">
                  <div className="faq-con">
                    <div className="faq-questions">
                      <div className="top-text">
                        <h2>Frequently asked questions</h2>
                        <h3>
                          Everything you need to know about the product and
                          billing.
                        </h3>
                      </div>
                      <div className="question-con">
                        <div className="question">
                          <p>Is there a free trail available?</p>
                          <img
                            src={toggle1 ? minus : plus}
                            alt="loading"
                            onClick={handleToggle1}
                          />
                        </div>
                        {toggle1 && (
                          <div className="answer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </div>
                        )}
                      </div>
                      <div className="question-con">
                        <div className="question">
                          <p>Is there a free trail available?</p>
                          <img
                            src={toggle2 ? minus : plus}
                            alt="loading"
                            onClick={handleToggle2}
                          />
                        </div>
                        {toggle2 && (
                          <div className="answer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </div>
                        )}
                      </div>
                      <div className="question-con">
                        <div className="question">
                          <p>Is there a free trail available?</p>
                          <img
                            src={toggle3 ? minus : plus}
                            alt="loading"
                            onClick={handleToggle3}
                          />
                        </div>
                        {toggle3 && (
                          <div className="answer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </div>
                        )}
                      </div>
                      <div className="question-con">
                        <div className="question">
                          <p>Is there a free trail available?</p>
                          <img
                            src={toggle4 ? minus : plus}
                            alt="loading"
                            onClick={handleToggle4}
                          />
                        </div>
                        {toggle4 && (
                          <div className="answer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </div>
                        )}
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
                    <span>
                      Can’t find the answer you’re looking for? Please chat to
                      our friendly team.
                    </span>
                  </div>
                  <Link to="/contact">
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
  }
};

export default LandingPage;
