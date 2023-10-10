import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleDot,
  faClapperboard,
  faShare,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Layouts/Footer/Footer";
import "../DashBoard/Dashboard.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  faArrowUpRightFromSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import star from "../../assets/Icons/Star.svg";
import halfstar from "../../assets/Icons/Half-star.svg";
import emptystar from "../../assets/Icons/emptystar.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import { useDispatch } from "react-redux";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import noimage from "../../assets/Images/noimage.png";

const chartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Student Report",
      data: [0, 58, 42, 85, 79],
      fill: false,
      borderColor: "#AF5E41",
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
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
      <div className="dashboard">
        <div className="dashboard-con">
          <div className="dash-top">
            <div className="routes">
              <BreadCrumb />
            </div>
            <div className="user">
              <h2>Welcome, {user && user.data.name}!</h2>
              <span>
                -Here's an overview of your well professionals journey{" "}
              </span>
            </div>
          </div>
          <div className="mark-course">
            <div className="course-book">
              {/* <div className="my-courses">
                <div className="courses-top">
                  <div className="left-text">
                    <h3>My Courses</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                  </div>
                  <NavLink to="/dashboard/mycourses" className="all-course">
                    <span>See All My Courses</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </NavLink>
                </div>
                <div className="course-body">
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                    </div>
                    <FontAwesomeIcon icon={faShare} cursor="pointer" />
                  </div>
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                    </div>
                    <FontAwesomeIcon icon={faShare} cursor="pointer" />
                  </div>
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                    </div>
                    <FontAwesomeIcon icon={faShare} cursor="pointer" />
                  </div>
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                    </div>
                    <FontAwesomeIcon icon={faShare} cursor="pointer" />
                  </div>
                </div>
              </div> */}
              {/* <div className="bookmark">
                <div className="mark-top">
                  <h3>Bookmarked courses</h3>
                  <p>Lorem ipsum dolor sit ametis.</p>
                </div>
                <div className="bookmark-body">
                  <img src={pro} alt={pro} />
                  <div className="course-desc">
                    <h3>Lorem ipsum dolor sit ametis.</h3>
                    <p>Lorem ipsum dolor sit ametis.</p>
                  </div>
                  <div className="price-text">
                    <p>₦499</p>
                    <span>Lorem</span>
                  </div>
                </div>
                <div className="bookmark-body">
                  <img src={pro} alt={pro} />
                  <div className="course-desc">
                    <h3>Lorem ipsum dolor sit ametis.</h3>
                    <p>Lorem ipsum dolor sit ametis.</p>
                  </div>
                  <div className="price-text">
                    <p>₦499</p>
                    <span>Lorem</span>
                  </div>
                </div>
                <div className="bookmark-body">
                  <img src={pro} alt={pro} />
                  <div className="course-desc">
                    <h3>Lorem ipsum dolor sit ametis.</h3>
                    <p>Lorem ipsum dolor sit ametis.</p>
                  </div>
                  <div className="price-text">
                    <p>₦499</p>
                    <span>Lorem</span>
                  </div>
                </div>
                <div className="bookmark-body">
                  <img src={pro} alt={pro} />
                  <div className="course-desc">
                    <h3>Lorem ipsum dolor sit ametis.</h3>
                    <p>Lorem ipsum dolor sit ametis.</p>
                  </div>
                  <div className="price-text">
                    <p>₦499</p>
                    <span>Lorem</span>
                  </div>
                </div>
                <NavLink to="/dashboard/mycourses" className="cart">
                  <span>See All My Courses</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </NavLink>
              </div> */}
            </div>
            <div className="my-courses">
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#000"
                            size="2xs"
                          />
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
                </div>
              </div>
            </div>
          </div>
          <div className="chart-recent">
            <div className="chart">
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className="recent">
              <div className="recent-con">
                <div className="recent-top">
                  <h3>My recent Studies</h3>
                  <select name="" id="">
                    <option value="">Last 7 days</option>
                  </select>
                </div>
                <div className="progress-main">
                  <div className="progress-con">
                    <div className="course">
                      <p>Lorem ipsum dolor sit.</p>
                      <p>72%</p>
                    </div>
                    <progress
                      className="progress"
                      max="100"
                      value="72"
                    ></progress>
                  </div>
                  <div className="progress-con">
                    <div className="course">
                      <p>Lorem ipsum dolor sit.</p>
                      <p>62%</p>
                    </div>
                    <progress
                      className="progress"
                      max="100"
                      value="62"
                    ></progress>
                  </div>
                  <div className="progress-con">
                    <div className="course">
                      <p>Lorem ipsum dolor sit.</p>
                      <p>41%</p>
                    </div>
                    <progress
                      className="progress"
                      max="100"
                      value="41"
                    ></progress>
                  </div>
                  <div className="progress-con">
                    <div className="course">
                      <p>Lorem ipsum dolor sit.</p>
                      <p>23%</p>
                    </div>
                    <progress
                      className="progress"
                      max="100"
                      value="23"
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="on-picks">
            <div className="top-rated-con">
              <h2>Topics recommended for you</h2>
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
                        <h4>
                          {courses.name.length > 26
                            ? courses.name.slice(0, 26) + "..."
                            : courses.name}
                        </h4>
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

export default Dashboard;
