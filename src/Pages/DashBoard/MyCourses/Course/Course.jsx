import Navbar from "../../../Layouts/Navbar/Navbar";
import "../Course/Course.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../../../assets/Images/doings.svg";
import { useState, useEffect } from "react";
import video from "../../../../assets/Images/video.mp4";
import den from "../../../../assets/Images/den.mp4";
import denn from "../../../../assets/Images/den2.mp4";
import ReactPlayer from "react-player";
import Footer from "../../../Layouts/Footer/Footer";
import LessonsComp from "./LessonComp/LessonsComp";
import NoteComp from "./NoteComp/NoteComp";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../redux/user/userSlice";

const Course = () => {
  const [active, setActive] = useState("lesson");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const courseArray = useSelector(
    (state) => state.details.data.data?.courses[0]?.lessonData
  );
  const course_details = useSelector(
    (state) => state.details.data.data?.courses[0]
  );
  console.log(courseArray, "purchased");

  useEffect(() => {
    const storedIndex = localStorage.getItem("currentVideoIndex");
    setCurrentVideoIndex(storedIndex ? parseInt(storedIndex, 10) : 0);
  }, []);

  const updateLocalStorageIndex = (index) => {
    localStorage.setItem("currentVideoIndex", index.toString());
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % courseArray.length);
    updateLocalStorageIndex(currentVideoIndex + 1);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < courseArray.length - 1) {
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
            <h3>{course_details?.name}</h3>
            <h4 style={{ display: "flex", gap: "5px" }}>
              <h4 style={{ color: "#af5e41" }}>Now playing </h4>
              {courseArray && courseArray[currentVideoIndex]
                ? courseArray[currentVideoIndex].title
                : "No title available"}
            </h4>
            {courseArray?.map((lesson, index) => (
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
                  width="100%"
                  allow="autoplay"
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
                      {courseArray && courseArray[currentVideoIndex]
                        ? courseArray[currentVideoIndex - 1].title
                        : "No title available"}
                    </div>
                  )}
                </div>
                <div className="controls" onClick={handleNextVideo}>
                  {currentVideoIndex !== courseArray?.length - 1 && (
                    <div className="arrow-2">
                      <div className="arrow-con">
                        <span>Next</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                      <p>
                        {courseArray && courseArray[currentVideoIndex]
                          ? courseArray[currentVideoIndex + 1].title
                          : "No title available"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="tutor">
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
              </div>
              <div className="coursepage-left-subs">
                <div className="subs">
                  <p
                    className={active === "lesson" ? "picked" : ""}
                    onClick={() => handleActive("lesson")}
                  >
                    Lessons
                  </p>
                  <p
                    className={active === "note" ? "picked" : ""}
                    onClick={() => handleActive("note")}
                  >
                    Notes
                  </p>
                </div>

                <div className="picked-display">
                  {active === "lesson" && (
                    <LessonsComp
                      course={courseArray}
                      choose={handleLessonClick}
                    />
                  )}
                  {active === "note" && <NoteComp />}
                </div>
              </div>
            </div>
          </div>
          <div className="coursepage-hero-right">
            {courseArray?.map((lesson, index) => (
              <div className="course-chapters" key={lesson._id}>
                <div className="chapter">
                  <img src={ladies} alt={ladies} className="chapter-img" />
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
