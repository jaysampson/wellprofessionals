import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../LessonComp/LessonComp.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ladies from "../../../../../assets/Images/doings.svg";
const LessonsComp = ({ course, choose }) => {
  return (
    <div className="lesson-comp">
      <header className="class-ov-header">CLASS OVERVIEW</header>
      {course?.map((lesson) => (
        <div className="course-chapters" key={lesson._id}>
          <div className="chapter">
            <img src={ladies} alt={ladies} className="chapter-img" />
            <div className="coursename-desc" onClick={() => choose(index)}>
              <h3>{lesson.title}</h3>
              <div className="coursenum-time">
                <span>{`${lesson.videoLength} mins`}</span>
              </div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} color={"#3c3c4399"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonsComp;
