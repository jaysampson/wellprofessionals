import React, { useEffect } from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import Footer from "../../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faCircleDot,
  faClapperboard,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../../assets/Images/doings.svg";
import pro from "../../../assets/Images/Pro.svg";
import "../MyCourses/MyCourses.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../redux/CourseAPI/courseSlice";
import { Link } from "react-router-dom";
import noimage from "../../../assets/Images/noimage.png";

const MyCourses = () => {
  let dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const data = useSelector((state) => state.course.data);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="my-courses">
        <div className="user">
          <h2>All My Courses!</h2>
          <span>-Here's an overview of your well professionals journey </span>
        </div>
        <div className="learning">
          <h3>Currently Learning</h3>
          <div className="learning-course">
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <Link to="/dashboard/mycourses/course">
                    <h4>
                      Creative Engineering: Lorem ipsum dolor sit amet,
                      consectetur
                    </h4>
                  </Link>

                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>
                    Creative Engineering: Lorem ipsum dolor sit amet,
                    consectetur
                  </h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>
                    Creative Engineering: Lorem ipsum dolor sit amet,
                    consectetur
                  </h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>
                    Creative Engineering: Lorem ipsum dolor sit amet,
                    consectetur
                  </h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>
                    Creative Engineering: Lorem ipsum dolor sit amet,
                    consectetur
                  </h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>
                    Creative Engineering: Lorem ipsum dolor sit amet,
                    consectetur
                  </h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>
                    Creative Engineering: Lorem ipsum dolor sit amet,
                    consectetur
                  </h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="progress">
                  <progress
                    className="progress"
                    max="100"
                    value="41"
                  ></progress>
                  <p>41%</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="learning">
          <h3>Completed Courses</h3>
          <div className="learning-course">
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h4>Creative Engineering: Lorem</h4>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
            <div className="course-con">
              <img src={ladies} alt={ladies} />
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
                  <h2>Creative Engineering: Lorem</h2>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    color="#000"
                  />
                </div>
                <div className="level">
                  <FontAwesomeIcon icon={faCircleDot} />
                  <p>Completed</p>
                </div>
                <div className="course-duration">
                  <FontAwesomeIcon icon={faClapperboard} />
                  <p>2-3 weeks course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommended">
          <p>Topics recommended for you</p>
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
        <div className="on-picks">
          <div className="top-rated-con">
            <h3>Topics based on your picks</h3>
            <div className="courses">
              {data?.getCourse?.map((courses) => (
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
      <Footer />
    </div>
  );
};

export default MyCourses;
