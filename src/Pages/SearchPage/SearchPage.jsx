import React, { useEffect, useState } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faList,
  faSearch,
  faStar,
  faStarHalf,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import "./SearchPage.scss";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  // const { isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.course
  // );
  const data = useSelector((state) => state.course.data);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const filteredCourses = data.getCourse?.filter(
    (course) =>
      searchQuery.toLowerCase() === "" ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Search Query:", searchQuery);
  console.log("Course Data:", data.getCourse);
  console.log("Filtered Courses:", filteredCourses);

  return (
    <div>
      <Navbar />
      <div className="search-page">
        <div className="left-layout">
          <div className="price-range">
            <h4>Price, $</h4>
            <div className="price-input">
              <input type="number" placeholder="min" />
              <input type="number" placeholder="max" />
            </div>
            <div className="filters">
              <ul>
                <h4>Features</h4>
                <li>
                  <input type="checkbox" />
                  <p>Downloadable content</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Subtitles</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Test</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Lorem</p>
                </li>
              </ul>
              <ul>
                <h4>Language</h4>
                <li>
                  <input type="checkbox" />
                  <p>French</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>English</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Spanish</p>
                </li>
              </ul>
              <ul>
                <h4>Level</h4>
                <li>
                  <input type="checkbox" />
                  <p>Beginner</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Intermediate</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Professional</p>
                </li>
              </ul>
              <ul>
                <h4>Total hours</h4>
                <li>
                  <input type="checkbox" />
                  <p>1hour</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>20-35mins</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>4hours</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>6hours</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>10-15mins</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-layout">
          <div className="input-search">
            <div className="search">
              <FontAwesomeIcon icon={faSearch} color="#667085" />
              <input type="text" placeholder="Search for online courses" />
            </div>
            <Link to="/search">
              <button>Search</button>
            </Link>
          </div>
          <div className="right-layout-top">
            <h2>
              Found 376 results for <span>Oil Sector</span>
            </h2>
            <div className="sort-arrange">
              <div className="sort">
                <p>Sort by</p>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Price</option>
                </select>
              </div>
              <div className="filter">
                <FontAwesomeIcon icon={faTableCells} className="awesome" />
                <FontAwesomeIcon icon={faList} className="awesome-2" />
              </div>
            </div>
          </div>
          <div className="search-result">
            <div className="top-rated-con">
              <div className="courses">
                {filteredCourses?.map((courses) => (
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
                        <p style={{ color: "#CD760F" }}> by Michael Jordan</p>
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
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
