import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../LessonComp/LessonComp.scss";
import {
  faAngleDown,
  faAngleRight,
  faCircle,
  faCircleDot,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import ladies from "../../../../../assets/Images/doings.svg";
import { useState } from "react";
const LessonsComp = () => {
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

  return (
    <div className="lesson-comp">
      <header className="class-ov-header">CLASS OVERVIEW</header>
      <div className="course-chapters">
        <div className="chapter" onClick={handleDrop}>
          <img src={ladies} alt={ladies} className="chapter-img" />
          <div className="coursename-desc">
            <h3>Chapter: Course Overview</h3>
            <div className="coursenum-time">
              <p>1/12</p>
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
              <FontAwesomeIcon icon={faCircle} size="2xs" color={"#af5e41"} />
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
  );
};

export default LessonsComp;
