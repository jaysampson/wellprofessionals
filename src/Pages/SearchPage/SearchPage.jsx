import React, { useEffect, useState } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faSearch,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import "./SearchPage.scss";
import noimage from "../../assets/Images/noimage.png";
import { addToCart } from "../../redux/addToCart/cartSlice";
import { SkeletonFrame2 } from "../SkeletonFrame/SkeletonFrame";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [totalHours, setTotalHours] = useState({
    "1hour": false,
    "20-35mins": false,
    "4hours": false,
    "6hours": false,
    "10-15mins": false,
  });
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const data = useSelector((state) => state.course.data);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const filteredCourses = data.getCourse?.filter((course) => {
    const coursePrice = parseFloat(course.price);

    if (isNaN(coursePrice)) {
      // Handle cases where course price is not a valid number
      return false;
    }

    // Convert input values to numbers, or set them to null if empty
    const minPrice = priceRange.min ? parseFloat(priceRange.min) : null;
    const maxPrice = priceRange.max ? parseFloat(priceRange.max) : null;

    if (
      (minPrice !== null && coursePrice < minPrice) ||
      (maxPrice !== null && coursePrice > maxPrice)
    ) {
      return false;
    }

    // Search query filter
    if (
      searchQuery &&
      !course.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true; // Include the course if it passes the price range and search query filter
  });

  const handleSearch = () => {
    // Redirect to the search page with the search query as a route parameter
    if (search) {
      navigate(`/search/${encodeURIComponent(search)}`);
    }
  };

  const handleAddToCart = (courses) => {
    dispatch(addToCart(courses));
  };

  return (
    <div>
      <Navbar />
      <div className="search-page">
        <div className="left-layout">
          <div className="price-range">
            <h4>Price, $</h4>
            <div className="price-input">
              <input
                type="number"
                placeholder="min"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="max"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
              />
            </div>
            <div className="filters">
              <ul>
                <h4>Category</h4>
                <li>
                  <input type="checkbox" />
                  <p>UpStream</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>MidStream</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>DownStream</p>
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
              <input
                type="text"
                placeholder="Search for online courses"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="right-layout-top">
            <h3>
              Found {filteredCourses?.length} results for{" "}
              <span className="result">{searchQuery || "All courses"}</span>
            </h3>
            <div className="sort-arrange">
              <div className="sort">
                <p>Sort by</p>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Price</option>
                </select>
              </div>
            </div>
          </div>
          <div className="search-result">
            <div className="top-rated-con">
              {isLoading ? (
                <SkeletonFrame2 />
              ) : (
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
                            {courses.name.length > 31
                              ? courses.name.slice(0, 29) + "..."
                              : courses.name}
                          </h3>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
