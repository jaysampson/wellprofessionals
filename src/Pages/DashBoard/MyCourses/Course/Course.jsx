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
    const storedIndex = localStorage.getItem("lastPlayedVideoIndex");
    setCurrentVideoIndex(storedIndex ? parseInt(storedIndex, 10) : 0);
  }, []);

  function handleActive(header) {
    setActive(header);
  }

  function handleVideoEnd() {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % courseArray.length);
    localStorage.setItem("lastPlayedVideoIndex", currentVideoIndex.toString());
  }

  function handleNextVideo() {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % courseArray.length);
  }

  function handlePreviousVideo() {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + courseArray.length) % courseArray.length
    );
  }

  function handleLessonClick(index) {
    setCurrentVideoIndex(index);
  }

  return (
    <div>
      <Navbar />
      <div className="course-page">
        <div className="course-page-hero">
          <div className="coursepage-hero-left">
            <h3>{course_details?.name}</h3>
            {courseArray?.map((lesson, index) => (
              <div
                className="course-vid"
                // key={lesson._id}
                style={{
                  display: index === currentVideoIndex ? "block" : "none",
                }}
              >
                {/* <ReactPlayer
                  url={`https://drive.google.com/file/d/${lesson.videoUrl}`}
                  controls={true}
                  width="100%"
                  height="100%"
                /> */}
                <iframe
                  title={`lesson-${index}`}
                  src={`https://drive.google.com/file/d/${lesson.videoUrl}/view`}
                  width="100%"
                  height="500px"
                  allow="autoplay"
                  onEnded={handleVideoEnd}
                ></iframe>
              </div>
            ))}
            <div className="coursepage-left-contents">
              <div className="course-details">
                <div className="controls">
                  <div className="arrow" onClick={handlePreviousVideo}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Previous</span>
                  </div>
                  <p>
                    {courseArray && courseArray[currentVideoIndex]
                      ? `Chapter ${courseArray[currentVideoIndex].title}`
                      : ""}
                  </p>
                </div>
                <div className="controls">
                  <div className="arrow" onClick={handleNextVideo}>
                    <span>Next</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p>
                    {courseArray &&
                    courseArray[(currentVideoIndex + 1) % courseArray.length]
                      ? `Chapter ${
                          courseArray[
                            (currentVideoIndex + 1) % courseArray.length
                          ].title
                        }`
                      : ""}
                  </p>
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
            {courseArray?.map((lesson) => (
              <div className="course-chapters" key={lesson._id}>
                <div className="chapter">
                  <img src={ladies} alt={ladies} className="chapter-img" />
                  <div className="coursename-desc" onClick={handleLessonClick}>
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
