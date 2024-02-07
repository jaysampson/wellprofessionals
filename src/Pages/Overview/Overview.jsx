import React, { useState, useEffect } from "react";
import "../Overview/Overview.scss";
import Footer from "../Layouts/Footer/Footer";
import Navbar from "../Layouts/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCheck,
  faStar,
  faArrowUpRightFromSquare,
  faCartShopping,
  faAngleUp,
  faStarHalf,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchACourse } from "../../redux/CourseAPI/courseSlice";
import { getUser } from "../../redux/user/userSlice";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import noimage from "../../assets/Images/noimage.png";
import { addToCart } from "../../redux/addToCart/cartSlice";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const Overview = () => {
  const [drop, setDrop] = useState(true);
  const [drop1, setDrop1] = useState(true);
  const [drop2, setDrop2] = useState(true);
  const [drop3, setDrop3] = useState(true);

  const { courseId } = useParams();
  console.log(courseId, "courseId");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchACourse(courseId));
    dispatch(getCourse());
    dispatch(getUser());
  }, [dispatch, courseId]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );

  const user_course = useSelector(
    (state) => state.details?.data?.data?.courses[0]
  );

  console.log(user_course, "user");

  const courseArray = useSelector((state) => state.course.courseArray);
  const data = useSelector((state) => state.course.data);
  console.log(courseArray.course?.demoUrl, "courseArray");

  function HandleDrop() {
    setDrop(!drop);
  }
  function HandleDrop2() {
    setDrop1(!drop1);
  }
  function HandleDrop3() {
    setDrop2(!drop2);
  }
  function HandleDrop4() {
    setDrop3(!drop3);
  }

  const handleAddToCart = (courses) => {
    dispatch(addToCart(courses));
  };

  function notPurchased() {
    toast.info("Purchase the course to access the lessons");
  }

  const calculateTotalVideoLength = () => {
    if (courseArray?.course?.lessonData) {
      return courseArray.course.lessonData.reduce(
        (totalLength, lesson) => totalLength + lesson.videoLength,
        0
      );
    }
    return 0;
  };

  const formatVideoLength = (totalMinutes) => {
    if (totalMinutes < 60) {
      return `${totalMinutes} mins`;
    } else {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours} hr ${minutes} mins`;
    }
  };

  const [shuffledRecommendations, setShuffledRecommendations] = useState([]);

  // Update shuffled recommendations when data changes
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

    const recommendationsArray = data?.getCourse || [];
    const shuffledArray = shuffleArray(recommendationsArray);

    setShuffledRecommendations(shuffledArray);
  }, [data]);

  return (
    <div>
      <Navbar />
      <div className="overview">
        <div className="overview-con">
          <div className="overview-top">
            <iframe
              src={`https://drive.google.com/file/d/${courseArray?.course?.demoUrl}/preview`}
              height="200px"
              width="100%"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts"
              className="iframe-2"
            ></iframe>
          </div>
          <div className="overview-body">
            <div className="left-con">
              <iframe
                src={`https://drive.google.com/file/d/${courseArray?.course?.demoUrl}/preview`}
                height="350px"
                width="100%"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts"
                className="iframe-1"
              ></iframe>
              <header>
                <p>{courseArray?.course?.category}</p>
                <h2>{courseArray?.course?.name}</h2>
                <span>{courseArray?.course?.description}</span>
              </header>
              <div className="taught-by">
                <p>TAUGHT BY</p>
                <div className="teacher">
                  <img src="" alt="" />
                  <div className="name-desc">
                    <p>David Udoh</p>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="expectation">
                <div className="expect-top">
                  <h3>What you’ll learn</h3>
                  <FontAwesomeIcon
                    icon={drop ? faAngleUp : faAngleDown}
                    onClick={HandleDrop}
                    cursor={"pointer"}
                  />
                </div>
                {drop && (
                  <div className="learnt">
                    {courseArray?.course?.benefits?.map((benefit) => (
                      <p key={benefit.id}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span>{benefit.title}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <hr />
              <div className="overview-lesson">
                <div className="class-overview">
                  <title>
                    <div className="class-drop">
                      <p>CLASS OVERVIEW</p>
                      <FontAwesomeIcon
                        icon={drop1 ? faAngleUp : faAngleDown}
                        onClick={HandleDrop2}
                        cursor={"pointer"}
                      />
                    </div>
                  </title>
                  {drop1 && (
                    <div className="lesson-videos">
                      <div className="videos">
                        {courseArray?.course?.lessonData.map(
                          (lesson, index) => (
                            <div
                              className="vid"
                              key={index}
                              onClick={notPurchased}
                            >
                              <p>
                                {index + 1}. {lesson.title}
                              </p>
                              <FontAwesomeIcon icon={faLock} />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              <div className="for-who">
                <div className="for-who-top">
                  <h3>Who’s this class for?</h3>
                  <FontAwesomeIcon
                    icon={drop2 ? faAngleUp : faAngleDown}
                    onClick={HandleDrop3}
                    cursor={"pointer"}
                  />
                </div>

                {drop2 && (
                  <div className="write-up">
                    {courseArray?.course?.prerequisites?.map(
                      (prerequisite, index) => (
                        <div className="persons" key={prerequisite.id}>
                          <p>{index + 1}</p>
                          <span>{prerequisite.title}</span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
              <hr />
              <div className="course-reviews">
                <title>
                  <FontAwesomeIcon icon={faStar} color="#AF5E41" />
                  <h4>4.91 (642 reviews)</h4>
                </title>
                <div className="review-con">
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <img src="" alt="" />
                      <p>Andrea Udoh</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
                <button>View more reviews</button>
              </div>
            </div>
            <div className="right-con">
              <div className="box">
                <div className="box-top">
                  <img
                    src={courseArray?.course?.thumbnail?.url}
                    alt={courseArray?.thumbnail?.url}
                  />
                  {user_course?.name === courseArray?.course?.name ? (
                    <Link to={`/dashboard`} className="add">
                      <button className="add-btn">
                        Go to this course{" "}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </Link>
                  ) : (
                    <>
                      <h3>{courseArray?.course?.name}</h3>
                      <div className="price">
                        <h4>{`₦${courseArray?.course?.price}`}</h4>
                        <h5 className="slice">{`₦${courseArray?.course?.estimatedPrice}`}</h5>
                      </div>
                      <div className="purchase">
                        <button className="add"> Buy now</button>
                        <button className="buy">
                          <span
                            onClick={() => handleAddToCart(courseArray.course)}
                          >
                            Add to cart
                          </span>
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="cart"
                            size="2x"
                            onClick={() => handleAddToCart(courseArray.course)}
                          />
                        </button>
                      </div>
                    </>
                  )}
                  <div className="offer">
                    <p>Offer ends in </p>
                    <span>9d 8h 0m 54s</span>
                  </div>
                </div>
                <hr />
                <div className="box-bottom">
                  <p>WHAT'S INCLUDED:</p>
                  <div className="included">
                    <div className="items">
                      <p>In-depth video lessons</p>
                    </div>
                    <div className="items">
                      <p>
                        Course Total hours ({" "}
                        {formatVideoLength(
                          Math.round(calculateTotalVideoLength())
                        )}{" "}
                        )
                      </p>
                    </div>

                    <div className="items">
                      <p>Step-by-step curriculum</p>
                    </div>
                    <div className="items">
                      <p>Online and at your own pace</p>
                    </div>
                    <div className="items">
                      <p>Watch on all devices</p>
                    </div>
                    <div className="items">
                      <p>Unlimited lifetime access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend">
            <h2>Topics recommended for you</h2>
            {isLoading ? (
              <Skeleton />
            ) : (
              <div className="courses">
                {shuffledRecommendations.slice(0, 8).map((courses) => (
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
      <Footer />
    </div>
  );
};

export default Overview;
