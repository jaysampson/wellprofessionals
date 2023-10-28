import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import {
  faArrowUpFromBracket,
  faArrowUpRightFromSquare,
  faCheck,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import noimage from "../../assets/Images/noimage.png";
import { addToCart } from "../../redux/addToCart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = () => {
  const { categoryName } = useParams(); // Get the category name from the route

  const dispatch = useDispatch();
  const data = useSelector((state) => state.course.data);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const filteredCourses = data.getCourse?.filter((course) => {
    if (
      categoryName &&
      course.category.toLowerCase() === categoryName.toLowerCase()
    ) {
      return true;
    }
    return false;
  });

  console.log(filteredCourses, "filteredCourses");

  const handleAddToCart = (courses) => {
    dispatch(addToCart(courses));
  };

  return (
    <div>
      <Navbar />
      <div className="categories">
        <h2>{categoryName}</h2>
        <div className="courses">
          {filteredCourses?.map((courses) => (
            <div className="course-con" key={courses._id}>
              <img
                src={courses?.thumbnail?.url || noimage}
                alt={courses.thumbnail?.url}
                className="course-img"
              />
              <div className="content">
                <Link to={`/overview/${courses._id}`} className="course-name">
                  <h3>
                    {courses.name.length > 31
                      ? courses.name.slice(0, 29) + "..."
                      : courses.name}
                  </h3>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                    <FontAwesomeIcon icon={faCheck} color="#000" size="2xs" />
                  </p>
                </div>
                <div className="rating">
                  <div className="star">
                    <FontAwesomeIcon icon={faStar} size="sm" color="#F8C51B" />
                    <FontAwesomeIcon icon={faStar} size="sm" color="#F8C51B" />
                    <FontAwesomeIcon icon={faStar} size="sm" color="#F8C51B" />
                    <FontAwesomeIcon icon={faStar} size="sm" color="#F8C51B" />
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
      <Footer />
    </div>
  );
};

export default Categories;
