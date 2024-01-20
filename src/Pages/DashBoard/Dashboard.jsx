import React, { useEffect, useState } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Layouts/Footer/Footer";
import "../DashBoard/Dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  faArrowUpRightFromSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../assets/Images/doings.svg";
import pro from "../../assets/Images/Pro.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import { getUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import noimage from "../../assets/Images/noimage.png";
import { addToCart } from "../../redux/addToCart/cartSlice";
import books from "../../assets/Images/books.svg";
import { SkeletonFrame } from "../SkeletonFrame/SkeletonFrame";

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
  const [activeTab, setActiveTab] = useState("currentlyLearning");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const { user } = useSelector((state) => state.auth);
  const purchasedcourses = useSelector(
    (state) => state.details.data.data?.courses
  );

  let dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const data = useSelector((state) => state.course.data);

  useEffect(() => {
    dispatch(getCourse());
    dispatch(getUser());
  }, [dispatch]);

  const handleAddToCart = (courses) => {
    dispatch(addToCart(courses));
  };

  const [shuffledCourses, setShuffledCourses] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    const coursesArray = data?.getCourse || [];
    const shuffledArray = shuffleArray(coursesArray);

    setShuffledCourses(shuffledArray);
  }, [data]);

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
              <span>Here's an overview of your well professionals journey</span>
            </div>
          </div>
          <div className="mark-course">
            <div className="my-courses">
              <div className="tabs">
                <header
                  className={
                    activeTab === "currentlyLearning" ? "active-tab" : ""
                  }
                  onClick={() => handleTabClick("currentlyLearning")}
                >
                  Learning
                </header>
                <header
                  className={
                    activeTab === "completedCourses" ? "active-tab" : ""
                  }
                  onClick={() => handleTabClick("completedCourses")}
                >
                  Completed
                </header>
                <header
                  className={activeTab === "allCourses" ? "active-tab" : ""}
                  onClick={() => handleTabClick("allCourses")}
                >
                  All Courses
                </header>
              </div>
              <div className="learning">
                {activeTab === "currentlyLearning" && (
                  <>
                    {isLoading ? (
                      <SkeletonFrame />
                    ) : (
                      <div className="learning-course">
                        {purchasedcourses && purchasedcourses.length > 0 ? (
                          purchasedcourses?.map((purchased) => (
                            // <div
                            //   className="learning-course"
                            //   key={purchased._id}
                            // >
                            <>
                              <div className="course-con">
                                <img
                                  className="course-img"
                                  src={purchased?.thumbnail?.url || noimage}
                                  alt={purchased?.thumbnail?.url}
                                />
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
                                    <Link
                                      to={`/dashboard/mycourses/${purchased._id}`}
                                    >
                                      <h4>{purchased.name}</h4>
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
                            </>
                          ))
                        ) : (
                          <div className="not-purchased">
                            <img src={books} alt={books}></img>
                            <span>You haven't purchased any course yet</span>
                            <span>
                              Reload page if you have courses and they aren't
                              showing
                            </span>
                            <Link to="/search/" className="not-purchased-link">
                              <button className="btn">
                                Purchase a course{" "}
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare}
                                />
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
              {activeTab === "completedCourses" && (
                <div className="learning" style={{ marginTop: "-30px" }}>
                  <div className="not-purchased">
                    <img src={books} alt={books}></img>
                    <span>You haven't completerd any course yet</span>
                    <Link to="/search/" className="not-purchased-link">
                      <button className="btn">
                        Browse Courses{" "}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === "allCourses" && (
                <div className="learning" style={{ marginTop: "-30px" }}>
                  {isLoading ? (
                    <SkeletonFrame />
                  ) : (
                    <>
                      {purchasedcourses && purchasedcourses.length > 0 ? (
                        purchasedcourses?.map((purchased) => (
                          <div className="learning-course" key={purchased._id}>
                            <div className="course-con">
                              <img
                                className="course-img"
                                src={purchased?.thumbnail?.url || noimage}
                                alt={purchased?.thumbnail?.url}
                              />
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
                                  <Link
                                    to={`/dashboard/mycourses/${purchased._id}`}
                                  >
                                    <h4>{purchased.name}</h4>
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
                          </div>
                        ))
                      ) : (
                        <div className="not-purchased">
                          <img src={books} alt={books}></img>
                          <span>You haven't purchased any course yet</span>
                          <Link to="/search/" className="not-purchased-link">
                            <button className="btn">
                              Purchase a course{" "}
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                              />
                            </button>
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
              <hr />
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
              {isLoading ? (
                <SkeletonFrame />
              ) : (
                <div className="courses">
                  {shuffledCourses?.map((courses) => (
                    <div className="course-con" key={Math.random(courses.id)}>
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

export default Dashboard;
