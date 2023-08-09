import Navbar from "../../../Layouts/Navbar/Navbar";
import "../Course/Course.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faAward,
  faCircle,
  faCircleDot,
  faPlay,
  faStar,
  faStarHalf,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../../../assets/Images/doings.svg";
import { useState } from "react";
import video from "../../../../assets/Images/video.mp4";
import ReactPlayer from "react-player";
import Footer from "../../../Layouts/Footer/Footer";
import LessonsComp from "./LessonComp/LessonsComp";
import NoteComp from "./NoteComp/NoteComp";

const Course = () => {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);
  const [drop7, setDrop7] = useState(false);
  const [drop8, setDrop8] = useState(false);
  const [drop9, setDrop9] = useState(false);
  const [active, setActive] = useState("lesson");

  function handleDrop() {
    setDrop(!drop);
  }
  function handleDrop1() {
    setDrop1(!drop1);
  }
  function handleDrop2() {
    setDrop2(!drop2);
  }
  function handleDrop3() {
    setDrop3(!drop3);
  }
  function handleDrop4() {
    setDrop4(!drop4);
  }
  function handleDrop5() {
    setDrop5(!drop5);
  }
  function handleDrop6() {
    setDrop6(!drop6);
  }
  function handleDrop7() {
    setDrop7(!drop7);
  }
  function handleDrop8() {
    setDrop8(!drop8);
  }
  function handleDrop9() {
    setDrop9(!drop9);
  }

  function handleActive(header) {
    setActive(header);
  }

  return (
    <div>
      <Navbar />
      <div className="course-page">
        <div className="course-page-hero">
          <div className="coursepage-hero-left">
            <div className="course-vid">
              <ReactPlayer
                url={video}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
            <div className="coursepage-left-contents">
              <div className="course-details">
                <h2>DRILLING ENGINEERING FUNDAMENTALS</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  iure maxime accusamus cumque voluptates assumenda sapiente
                  excepturi itaque cupiditate quisquam.
                </p>
                <span>
                  Show More <FontAwesomeIcon icon={faAngleDown} />
                </span>
                <div className="rating-members">
                  <div className="star-rating">
                    <div className="star">
                      <FontAwesomeIcon icon={faStar} color={"#F8C51B"} />
                      <FontAwesomeIcon icon={faStar} color={"#F8C51B"} />
                      <FontAwesomeIcon icon={faStar} color={"#F8C51B"} />
                      <FontAwesomeIcon icon={faStar} color={"#F8C51B"} />
                      <FontAwesomeIcon icon={faStarHalf} color={"#F8C51B"} />
                    </div>
                    <span>43K Ratings</span>
                  </div>
                  <div className="perks">
                    <div className="perk">
                      <FontAwesomeIcon icon={faUsers} color={"#71717a"} />
                      <p>1376 members</p>
                    </div>
                    <div className="perk">
                      <FontAwesomeIcon icon={faPlay} color={"#71717a"} />
                      <p>12 lessons</p>
                    </div>
                    <div className="perk">
                      <FontAwesomeIcon icon={faAward} color={"#71717a"} />
                      <p>Certificate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tutor">
                <h4>TUTOR</h4>
                <div className="img-name">
                  <img src={ladies} alt={ladies} className="tutor-img" />
                  <div className="name-desc">
                    <h4>Lorem Ipsum</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum, delectus!
                    </p>
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
                  {active === "lesson" && <LessonsComp />}
                  {active === "note" && <NoteComp />}
                </div>
              </div>
            </div>
          </div>
          <div className="coursepage-hero-right">
            <div className="course-chapters">
              <div className="chapter" onClick={handleDrop}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Course Overview</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#22C55E"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              {drop && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#22C55E"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              {drop && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#22C55E"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop1}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Coal mining</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop1 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop1 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#22C55E"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              {drop1 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#22C55E"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              {drop1 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#22C55E"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop2}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Hope</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop2 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop2 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"#F93232"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="#f93232" />
                    <p>Playing</p>
                  </div>
                </div>
              )}
              {drop2 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop3}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: For</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop3 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop3 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop4}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: A better</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop4 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop4 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop5}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Nigeria</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop5 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop5 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              {drop5 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop6}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Amen</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop6 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop6 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop7}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Drilling</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop7 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop7 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop8}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Mid Stream</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop8 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop8 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
                </div>
              )}
              <div className="chapter" onClick={handleDrop9}>
                <img src={ladies} alt={ladies} className="chapter-img" />
                <div className="coursename-desc">
                  <h3>Chapter: Gas</h3>
                  <div className="coursenum-time">
                    <p>1/12</p>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2xs"
                      color={"#af5e41"}
                    />
                    <span>28mins</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={drop9 ? faAngleDown : faAngleRight}
                  color={"#3c3c4399"}
                />
              </div>
              {drop9 && (
                <div className="chapter-contents">
                  <div className="title-time">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>
                      <FontAwesomeIcon icon={faPlay} color={"green"} />
                      10mins
                    </span>
                  </div>
                  <div className="level">
                    <FontAwesomeIcon icon={faCircleDot} color="green" />
                    <p>Completed</p>
                  </div>
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

export default Course;
