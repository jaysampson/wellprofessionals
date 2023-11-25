import React, { useEffect, useState } from "react";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import { useNavigate } from "react-router";
import {
  faMinusCircle,
  faPlusCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { BreadCrumb } from "../../../../BreadCrumb/BreadCrumb";
import { createCourse } from "../../../../../redux/CourseAPI/courseSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AdminCreate2.scss";

const AdminCreate2 = () => {
  return (
    <div>
      <AdminLayout content={<Content />} />
    </div>
  );
};

const Content = () => {
  const [lessonData, setLessonData] = useState([
    {
      videoUrl: "",
      title: "",
      videoSection: "",
      description: "",
      videoLength: "",
      links: [{ title: "", url: "" }],
    },
  ]);

  const handleLessonDataChange = (index, field, value, linkIndex) => {
    setLessonData((prevLessonData) => {
      const updatedLessonData = [...prevLessonData];
      if (linkIndex !== undefined) {
        updatedLessonData[index].links[linkIndex][field] = value;
      } else {
        updatedLessonData[index][field] = value;
      }
      console.log(updatedLessonData);

      return updatedLessonData;
    });
  };

  const addLink = (lessonIndex) => {
    const updatedLessonData = [...lessonData];
    updatedLessonData[lessonIndex].links.push({ title: "", url: "" });
    setLessonData(updatedLessonData);
  };

  const removeLink = (lessonIndex, linkIndex) => {
    const updatedLessonData = [...lessonData];
    updatedLessonData[lessonIndex].links.splice(linkIndex, 1);
    setLessonData(updatedLessonData);
  };

  const addLesson = () => {
    setLessonData([
      ...lessonData,
      {
        videoUrl: "",
        title: "",
        videoSection: "",
        description: "",
        videoLength: "",
        links: [{ title: "", url: "" }],
      },
    ]);
  };

  const removeLesson = (index) => {
    const updatedLessonData = [...lessonData];
    updatedLessonData.splice(index, 1);
    setLessonData(updatedLessonData);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (course) {
      toast.success("Course Created Successfully");
      navigate("/admin");
      dispatch(reset());
    }
  }, [isError, course, message, isSuccess, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      lessonData: [...lessonData],
    };
    dispatch(createCourse(courseData));
    console.log(courseData, "mychief");
  };

  return (
    <div className="create" method="POST" onSubmit={handleSubmit}>
      <BreadCrumb />
      <div className="dets">
        <h3>Add Lessons</h3>
        {lessonData.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="lesson-container">
            <h4>Lesson {lessonIndex + 1}</h4>
            <div className="lesson-details">
              <label>Video URL</label>
              <input
                required
                type="text"
                value={lesson.videoUrl}
                placeholder="Put in the video for this lesson"
                onChange={(e) =>
                  handleLessonDataChange(
                    lessonIndex,
                    "videoUrl",
                    e.target.value
                  )
                }
              />
              <label>Title</label>
              <input
                required
                type="text"
                value={lesson.title}
                placeholder="Enter in the lesson title"
                onChange={(e) =>
                  handleLessonDataChange(lessonIndex, "title", e.target.value)
                }
              />
              <label>Video Section</label>
              <input
                required
                type="text"
                value={lesson.videoSection}
                placeholder="Enter the section of your lesson"
                onChange={(e) =>
                  handleLessonDataChange(
                    lessonIndex,
                    "videoSection",
                    e.target.value
                  )
                }
              />
              <label>Description</label>
              <textarea
                required
                value={lesson.description}
                cols="30"
                rows="10"
                placeholder="Enter the description for this lesson"
                onChange={(e) =>
                  handleLessonDataChange(
                    lessonIndex,
                    "description",
                    e.target.value
                  )
                }
              />
              <label>Video Length</label>
              <input
                required
                type="number"
                value={lesson.videoLength}
                placeholder="Enter the video length of the video you just uploaded"
                onChange={(e) =>
                  handleLessonDataChange(
                    lessonIndex,
                    "videoLength",
                    e.target.value
                  )
                }
              />
            </div>

            {/* Links Section */}
            <div className="links-section">
              <h3>Links</h3>
              {lesson.links.map((link, linkIndex) => (
                <div key={linkIndex} className="link-details">
                  <div className="link-labels">
                    <label>Title</label>
                    <input
                      required
                      type="text"
                      value={link.title}
                      placeholder="Enter the title of the link"
                      onChange={(e) =>
                        handleLessonDataChange(
                          lessonIndex,
                          "title",
                          e.target.value,
                          linkIndex
                        )
                      }
                    />
                    <label>URL</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter the link"
                      value={link.url}
                      onChange={(e) =>
                        handleLessonDataChange(
                          lessonIndex,
                          "url",
                          e.target.value,
                          linkIndex
                        )
                      }
                    />
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      color="#303cc"
                      onClick={() => removeLink(lessonIndex, linkIndex)}
                      cursor="pointer"
                    />
                  </div>
                </div>
              ))}
              <div className="add" onClick={() => addLink(lessonIndex)}>
                <FontAwesomeIcon icon={faPlusCircle} color="#af5e41" />
                <span>Add Link</span>
              </div>
            </div>
            <div
              className="remove-lesson"
              onClick={() => removeLesson(lessonIndex)}
            >
              <p>Remove this Lesson</p>
              <FontAwesomeIcon
                icon={faMinusCircle}
                color="#303cc"
                cursor="pointer"
              />
            </div>
          </div>
        ))}
        <div className="add" onClick={addLesson}>
          <FontAwesomeIcon icon={faPlusCircle} color="#af5e41" />
          <span>Add Lesson</span>
        </div>
      </div>
      <button type="submit">
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          "Upload Lesson(s)"
        )}
      </button>
    </div>
  );
};

export default AdminCreate2;
