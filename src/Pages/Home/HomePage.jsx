import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import "../Home/Home.scss";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faCheck,
  faSearch,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import homeicon from "../../assets/Icons/home-icon.svg";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import wellslogo from "../../assets/Images/Wells-Logo.svg";
import noimage from "../../assets/Images/noimage.png";
import gif from "../../assets/Images/Loading.gif";
import { addToCart } from "../../redux/addToCart/cartSlice";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const data = useSelector((state) => state.course.data);

  const [currentPage, setCurrentPage] = useState(0); // State for the current page
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth >= 900 ? 6 : window.innerWidth >= 500 ? 4 : 2
  );
  // const itemsPerPage = 6; // Number of items per page
  const pageCount = Math.ceil(data?.getCourse?.length / itemsPerPage); // Total number of pages

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCourses = data?.getCourse?.slice(startIndex, endIndex);

  // State for mobile view
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);

  // Update isMobileView state on window resize
  useEffect(() => {
    dispatch(getCourse());
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 500);
      setItemsPerPage(
        window.innerWidth >= 900 ? 6 : window.innerWidth >= 500 ? 4 : 2
      );
    };
    window.addEventListener("resize", handleResize);
    // Call handleResize on component mount to set the initial value correctly
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleSearch = () => {
    // Redirect to the search page with the search query as a route parameter
    if (search) {
      navigate(`/search/${encodeURIComponent(search)}`);
      console.log("search: ", search);
    }
  };

  const handleAddToCart = (courses) => {
    dispatch(addToCart(courses));
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
        <div className="home">
          <div className="home-hero">
            <div className="hero-text">
              <div className="top-text">
                <h1>
                  Welcome to Well Professionals, the premier online platform
                  offering affordable oil and gas courses.
                </h1>
                <p>Become Professionals and ready to join the world</p>
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
            <div className="body-con">
              <div className="directory">
                <img src={homeicon} alt={homeicon} />
                <p>Home</p>
              </div>
              <div className="body-main">
                <div className="top-rated">
                  <div className="top-rated-con">
                    <h2>Top rated courses</h2>
                    <div className="courses">
                      {data?.getCourse?.slice(0, 3).map((courses) => (
                        <div className="course-con" key={courses._id}>
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
                  </div>
                  <Link to="/search/">
                    <button>Show more courses</button>
                  </Link>
                </div>
                <div className="all-courses">
                  <h2>Courses For You Based On Your Picks</h2>
                  <div className="courses">
                    {displayedCourses?.map((courses) => (
                      <div className="course-con" key={courses.id}>
                        <img
                          src={courses?.thumbnail?.url || noimage}
                          alt={courses?.thumbnail?.url}
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
                  <div className="pagination">
                    {isMobileView ? (
                      <div className="mobile-pagination">
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          cursor="pointer"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className={currentPage === 0 ? "disabled" : "enabled"}
                        />
                        <p>
                          Page {currentPage + 1}/{pageCount}
                        </p>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          cursor="pointer"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className={
                            currentPage === pageCount - 1
                              ? "disabled"
                              : "enabled"
                          }
                        />
                      </div>
                    ) : (
                      <ReactPaginate
                        previousLabel={
                          <div className="prev">
                            <FontAwesomeIcon
                              icon={faArrowLeft}
                              cursor="pointer"
                            />
                            <p>Previous</p>
                          </div>
                        }
                        nextLabel={
                          <div className="next">
                            <p>Next</p>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              cursor="pointer"
                            />
                          </div>
                        }
                        breakLabel={<div className="ellipses">...</div>}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName="pages"
                        activeClassName="active"
                        pageLinkClassName="page-link"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
