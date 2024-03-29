import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faSearch,
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
import noimage from "../../assets/Images/noimage.png";
import { addToCart } from "../../redux/addToCart/cartSlice";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonFrame } from "../SkeletonFrame/SkeletonFrame";
import { differenceInMonths, parseISO } from "date-fns";

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
    } else {
      toast.info("Type in a course you wish to search for");
    }
  };

  const handleAddToCart = (courses) => {
    dispatch(addToCart(courses));
  };

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  const newClasses = data?.getCourse
    ?.filter(
      (courses) =>
        differenceInMonths(parseISO(courses.createdAt), oneMonthAgo) >= 0
    )
    .sort((a, b) => parseISO(b.createdAt) - parseISO(a.createdAt));

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
                  We are dedicated to providing comprehensive online courses in
                  the field of oil and gas
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
                  <h2>Top rated courses</h2>
                  {isLoading ? (
                    <SkeletonFrame />
                  ) : (
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
                              <h3>
                                {courses.name.length > 26
                                  ? courses.name.slice(0, 26) + "..."
                                  : courses.name}
                              </h3>
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                color="#000"
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
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStarHalf}
                                  size="sm"
                                  color="#F8C51B"
                                />
                              </div>
                              <div className="rated">
                                <p>43k Ratings</p>
                              </div>
                            </div>
                            <div className="price-add">
                              <div className="price">
                                <p> {`₦${courses.price}`}</p>
                                <span className="slice">
                                  {`₦${courses.estimatedPrice}`}
                                </span>
                              </div>
                              <button onClick={() => handleAddToCart(courses)}>
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/search/">
                  <button>Show more courses</button>
                </Link>
              </div>
              <div className="based-on-picks">
                <div className="top-rated-con">
                  <h2>Courses recommended for you</h2>
                  {isLoading ? (
                    <SkeletonFrame />
                  ) : (
                    <div className="courses">
                      {data?.getCourse?.map((courses) => (
                        <div className="course-con" key={courses._id}>
                          <img
                            src={courses?.thumbnail?.url || noimage}
                            alt={courses.thumbnail?.url || noimage}
                            className="course-img"
                          />
                          <div className="content">
                            <Link
                              to={`/overview/${courses._id}`}
                              className="course-name"
                            >
                              <h3>
                                {courses.name.length > 26
                                  ? courses.name.slice(0, 26) + "..."
                                  : courses.name}
                              </h3>
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                color="#000"
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
                              <p style={{ color: "#CD760F" }}>
                                {" "}
                                by Michael Jordan
                              </p>
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
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  size="sm"
                                  color="#F8C51B"
                                />
                                <FontAwesomeIcon
                                  icon={faStarHalf}
                                  size="sm"
                                  color="#F8C51B"
                                />
                              </div>
                              <div className="rated">
                                <p>43k Ratings</p>
                              </div>
                            </div>
                            <div className="price-add">
                              <div className="price">
                                <p> {`₦${courses.price}`}</p>
                                <span className="slice">
                                  {`₦${courses.estimatedPrice}`}
                                </span>
                              </div>
                              <button onClick={() => handleAddToCart(courses)}>
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link to="/search/">
                    <button>Show more courses</button>
                  </Link>
                </div>
              </div>
              <div className="what-course">
                <h2>What course you looking for?</h2>
                <div className="options">
                  <Link to="/category/UpStream">
                    <p>UpStream Courses</p>
                  </Link>
                  <Link to="/category/MidStream">
                    <p>MidStream Courses</p>
                  </Link>
                  <Link to="/category/DownStream">
                    <p>DownStream Courses</p>
                  </Link>
                </div>
              </div>
              <div className="new">
                <h2>New Classes ({newClasses?.length})</h2>
                {isLoading ? (
                  <SkeletonFrame />
                ) : (
                  <div className="courses">
                    {newClasses?.map((courses) => (
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
                            <h3>
                              {courses.name.length > 26
                                ? courses.name.slice(0, 26) + "..."
                                : courses.name}
                            </h3>
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              color="#000"
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
                            <p style={{ color: "#CD760F" }}>
                              {" "}
                              by Michael Jordan
                            </p>
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
                                size="sm"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                size="sm"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                size="sm"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                size="sm"
                                color="#F8C51B"
                              />
                              <FontAwesomeIcon
                                icon={faStarHalf}
                                size="sm"
                                color="#F8C51B"
                              />
                            </div>
                            <div className="rated">
                              <p>43k Ratings</p>
                            </div>
                          </div>
                          <div className="price-add">
                            <div className="price">
                              <p> {`₦${courses.price}`}</p>
                              <span className="slice">
                                {`₦${courses.estimatedPrice}`}
                              </span>
                            </div>
                            <button onClick={() => handleAddToCart(courses)}>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Link to="/search/">
                  {" "}
                  <button>Show more courses</button>
                </Link>
              </div>
              <div className="testimonial">
                <h3>3940+ Happy Well Professionals Users</h3>
                <h4>Don't just take our words</h4>
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
                        <h4>Is there a free trail available?</h4>
                        <img
                          src={toggle1 ? minus : plus}
                          alt="loading"
                          onClick={handleToggle1}
                        />
                      </div>
                      {toggle1 && (
                        <span className="answer">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      )}
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <h4>Is there a free trail available?</h4>
                        <img
                          src={toggle2 ? minus : plus}
                          alt="loading"
                          onClick={handleToggle2}
                        />
                      </div>
                      {toggle2 && (
                        <span className="answer">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      )}
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <h4>Is there a free trail available?</h4>
                        <img
                          src={toggle3 ? minus : plus}
                          alt="loading"
                          onClick={handleToggle3}
                        />
                      </div>
                      {toggle3 && (
                        <span className="answer">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                      )}
                    </div>
                    <div className="question-con">
                      <div className="question">
                        <h4>Is there a free trail available?</h4>
                        <img
                          src={toggle4 ? minus : plus}
                          alt="loading"
                          onClick={handleToggle4}
                        />
                      </div>
                      {toggle4 && (
                        <span className="answer">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
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
                  <h3>Still have questions?</h3>
                  <span>
                    Can’t find the answer you’re looking for? Please chat to our
                    friendly team.
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
};

export default LandingPage;
