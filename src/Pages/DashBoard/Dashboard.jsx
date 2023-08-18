import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleDot,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Layouts/Footer/Footer";
import "../DashBoard/Dashboard.scss";
import { NavLink, useNavigate } from "react-router-dom";
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
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

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
              <div className="my-courses">
                <div className="courses-top">
                  <div className="left-text">
                    <h3>My Courses</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                  </div>
                  <NavLink
                    to="/home/dashboard/mycourses"
                    className="all-course"
                  >
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
                      <span>Lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                      <span>Jan 17, 2022</span>
                    </div>
                    <span>Lorem Ipsum</span>
                    <FontAwesomeIcon icon={faEllipsis} color="#71717a" />
                  </div>
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                      <span>Lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                      <span>Jan 17, 2022</span>
                    </div>
                    <span>Lorem Ipsum</span>
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                      <span>Lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                      <span>Jan 17, 2022</span>
                    </div>
                    <span>Lorem Ipsum</span>
                    <FontAwesomeIcon icon={faEllipsis} color="#71717a" />
                  </div>
                  <div className="body-con">
                    <div className="level">
                      <FontAwesomeIcon icon={faCircleDot} />
                      <p>Completed</p>
                    </div>
                    <div className="course-desc">
                      <p>Lorem ipsum dolor sit amet</p>
                      <span>Lorem ipsum dolor sit amet</span>
                    </div>
                    <div className="dates">
                      <p>2 months</p>
                      <span>Jan 17, 2022</span>
                    </div>
                    <span>Lorem Ipsum</span>
                    <FontAwesomeIcon icon={faEllipsis} color="#71717a" />
                  </div>
                </div>
              </div>
              <div className="bookmark">
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
                <NavLink to="/home/dashboard/mycourses" className="cart">
                  <span>See All My Courses</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </NavLink>
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
              <h3>Topics based on your picks</h3>
              <div className="courses">
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
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                    <div className="price-add">
                      <div className="price">
                        <p>₦2,549.99</p>
                        <div className="slice">₦4,449.99</div>
                      </div>
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
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                    <div className="price-add">
                      <div className="price">
                        <p>₦2,549.99</p>
                        <div className="slice">₦4,449.99</div>
                      </div>
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
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                    <div className="price-add">
                      <div className="price">
                        <p>₦2,549.99</p>
                        <div className="slice">₦4,449.99</div>
                      </div>
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
                      <h2>
                        Creative Engineering: Lorem ipsum dolor sit amet,
                        consectetur
                      </h2>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        color="#000"
                      />
                    </div>
                    <div className="desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                    <div className="price-add">
                      <div className="price">
                        <p>₦2,549.99</p>
                        <div className="slice">₦4,449.99</div>
                      </div>
                    </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
