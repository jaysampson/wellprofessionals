import Navbar from "../../../Layouts/Navbar/Navbar";
import "../Course/Course.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Footer from "../../../Layouts/Footer/Footer";
import LessonsComp from "./LessonComp/LessonsComp";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../redux/user/userSlice";

const Course = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { courseId, videoIndex } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, courseId]);

  const courseArray = useSelector(
    (state) => state.details.data.data?.courses[videoIndex]
  );
  console.log(courseArray, "array");

  useEffect(() => {
    const courseNameKey = courseArray?.name.slice(0, 10);
    const parsedProgress =
      JSON.parse(localStorage.getItem("courseProgress")) || {};
    const storedIndex = parsedProgress[courseNameKey]?.currentVideoIndex;
    setCurrentVideoIndex(storedIndex ? parseInt(storedIndex, 10) : 0);
  }, [courseArray]);

  const updateLocalStorageIndex = (index) => {
    const courseNameKey = courseArray?.name.slice(0, 10);
    const parsedProgress =
      JSON.parse(localStorage.getItem("courseProgress")) || {};

    parsedProgress[courseNameKey] = {
      ...parsedProgress[courseNameKey],
      currentVideoIndex: index.toString(),
    };

    localStorage.setItem("courseProgress", JSON.stringify(parsedProgress));
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % courseArray.length);
    updateLocalStorageIndex(currentVideoIndex + 1);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < courseArray?.lessonData.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      updateLocalStorageIndex(currentVideoIndex + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
      updateLocalStorageIndex(currentVideoIndex - 1);
    }
  };

  const handleLessonClick = (index) => {
    setCurrentVideoIndex(index);
    updateLocalStorageIndex(index);
  };

  return (
    <div>
      <Navbar />
      <div className="course-page">
        <div className="course-page-hero">
          <div className="coursepage-hero-left">
            <h3>{courseArray?.name}</h3>
            <h4 style={{ display: "flex", gap: "5px" }}>
              <h4 style={{ color: "#af5e41" }}>Now playing </h4>
              {courseArray?.lessonData &&
              courseArray?.lessonData[currentVideoIndex]
                ? courseArray?.lessonData[currentVideoIndex]?.title
                : "No title available"}
            </h4>
            {courseArray?.lessonData?.map((lesson, index) => (
              <div
                className="course-vid"
                key={lesson._id}
                style={{
                  display: index === currentVideoIndex ? "block" : "none",
                }}
              >
                <iframe
                  title={`lesson-${index}`}
                  src={`https://drive.google.com/file/d/${lesson.videoUrl}/preview`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts"
                  width="100%"
                  className="video-player"
                  onEnded={handleVideoEnd}
                ></iframe>
              </div>
            ))}
            <div className="coursepage-left-contents">
              <div className="course-details">
                <div className="controls" onClick={handlePreviousVideo}>
                  {currentVideoIndex !== 0 && (
                    <div className="arrow">
                      <div className="arrow-con">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span>Previous</span>
                      </div>
                      {courseArray?.lessonData &&
                      courseArray?.lessonData[currentVideoIndex]
                        ? courseArray?.lessonData[currentVideoIndex - 1]?.title
                        : "No title available"}
                    </div>
                  )}
                </div>
                <div className="controls" onClick={handleNextVideo}>
                  {currentVideoIndex !==
                    courseArray?.lessonData?.length - 1 && (
                    <div className="arrow-2">
                      <div className="arrow-con">
                        <span>Next</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                      <p>
                        {courseArray?.lessonData &&
                        courseArray?.lessonData[currentVideoIndex]
                          ? courseArray?.lessonData[currentVideoIndex + 1]
                              ?.title
                          : "No title available"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="tutor">
                <h5>TUTOR</h5>
                <div className="img-name">
                  <img src={ladies} alt={ladies} className="tutor-img" />
                  <div className="name-desc">
                    <p>Lorem Ipsum</p>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum, delectus!
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="coursepage-left-subs">
                <div className="picked-display">
                  <LessonsComp
                    course={courseArray}
                    choose={handleLessonClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="coursepage-hero-right">
            {courseArray?.lessonData?.map((lesson, index) => (
              <div className="course-chapters" key={lesson._id}>
                <div className="chapter">
                  <div
                    className="coursename-desc"
                    onClick={() => handleLessonClick(index)}
                  >
                    <h4>{lesson.title}</h4>
                    <div className="coursenum-time">
                      <span>{`${lesson.videoLength} mins`}</span>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color={"#3c3c4399"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
