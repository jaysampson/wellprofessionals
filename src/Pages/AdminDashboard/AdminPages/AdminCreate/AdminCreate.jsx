import React, { useEffect, useState } from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import { BreadCrumb } from "../../../BreadCrumb/BreadCrumb";
import "../AdminCreate/AdminCreate.scss";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { reset, createCourse } from "../../../../redux/CourseAPI/courseSlice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import upload from "../../../../assets/Images/upload.svg";

import {
  faAngleDown,
  faAngleUp,
  faArrowAltCircleDown,
  faArrowDown,
  faCloudUpload,
  faMinusCircle,
  faPlusCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const AdminCreate = () => {
  return (
    <div>
      <AdminLayout content={<Content />} />
    </div>
  );
};

const Content = () => {
  const [name, setName] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [level, setLevel] = useState("");
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);

  const [thumbnail, setThumbnail] = useState(null);

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditImage = () => {
    document.getElementById("imageInput").click();
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (course) {
      toast.success("Course Created Successfully");
      navigate("/admin/create/lessons");
      dispatch(reset());
    }
  }, [isError, course, message, isSuccess, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      name,
      demoUrl,
      description,
      price,
      estimatedPrice,
      category,
      tags,
      level,
      benefits,
      prerequisites,
      lessonData: [...lessonData],
    };
    dispatch(createCourse(courseData));
    console.log(courseData, "mychief");
  };

  const addPrerequisite = () => {
    setPrerequisites([...prerequisites, { title: "" }]); // Add a new empty prerequisite object
  };

  const removePrerequisite = (index) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites.splice(index, 1); // Remove the prerequisite object at the specified index
    setPrerequisites(updatedPrerequisites);
  };

  const handlePrerequisitesChange = (e, index) => {
    const { value } = e.target;
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index] = { title: value };
    setPrerequisites(updatedPrerequisites);
  };

  const addBenefits = () => {
    setBenefits([...benefits, { title: "" }]); // Add a new empty benefit object
  };

  const removeBenefits = (index) => {
    const updatedBenefits = [...benefits];
    updatedBenefits.splice(index, 1); // Remove the benefit object at the specified index
    setBenefits(updatedBenefits);
  };

  const handleBenefitsChange = (e, index) => {
    const { value } = e.target;
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = { title: value };
    setBenefits(updatedBenefits);
  };

  const [collapsedLessons, setCollapsedLessons] = useState(
    Array(lessonData.length).fill(false)
  );

  const handleToggle = (lessonIndex) => {
    setCollapsedLessons((prevCollapsedLessons) => {
      const updatedCollapseState = [...prevCollapsedLessons];
      updatedCollapseState[lessonIndex] = !updatedCollapseState[lessonIndex];
      return updatedCollapseState;
    });
  };

  return (
    <div className="create">
      <BreadCrumb />
      <div className="create-contents">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="dets">
            <label htmlFor="">Course Name</label>
            <input
              type="text"
              placeholder="Enter Course Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="dets">
            <label htmlFor="">Course Demo Video</label>
            <input
              type="text"
              placeholder="Enter Course Name"
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
              required
            />
            <p>
              This shows your students a preview video of what your course is
              about. It shouldn't be more than 1 minute and 30 seconds.
            </p>
          </div>
          <div className="dets">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter summray of what your course entails"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="dets">
            <label htmlFor="">Category</label>
            <select
              name=""
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select a category your course falls in</option>
              <option value="UpStream">UpStream</option>
              <option value="MidStream">MidStream</option>
              <option value="DownStream">DownStream</option>
            </select>
          </div>
          <div className="dets">
            <label htmlFor="">Price</label>
            <input
              type="number"
              placeholder="Enter a discounted price if applicable for you"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="dets">
            <label htmlFor="">Estimated Price</label>
            <input
              type="number"
              placeholder="Enter the original worth of you course"
              value={estimatedPrice}
              onChange={(e) => setEstimatedPrice(e.target.value)}
              required
            />
          </div>
          <div className="upload">
            <div className="upload-top">
              <p>Upload Course Image</p>
              <div className="buttons">
                <button
                  className="edit"
                  type="button"
                  onClick={handleEditImage}
                >
                  <span>Edit</span>
                </button>
                <button
                  className="upload-btn"
                  type="button"
                  onClick={handleEditImage}
                >
                  <FontAwesomeIcon icon={faCloudUpload} />
                  <span>Upload</span>
                </button>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="upload-box">
              {thumbnail ? (
                <img src={thumbnail} alt="Selected" className="selected-img" />
              ) : (
                <img src={upload} alt="Default" />
              )}
              <p>Upload a course Image here</p>
            </div>
          </div>
          <div className="dets">
            <label htmlFor="">Tag</label>
            <input
              type="text"
              placeholder="Enter a tag for course e.g Mid stream, General protroluem engineering"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </div>
          <div className="dets">
            <label htmlFor="">Level</label>
            <select
              name=""
              id=""
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Recommended Expertise of students</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="dets">
            <label htmlFor="">Learning Objectives</label>
            {benefits.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "5px",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter what students will benefit from this course"
                  value={item?.title}
                  onChange={(e) => handleBenefitsChange(e, index)}
                  required
                />
                {benefits.length > 1 && (
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    color="#303cc"
                    onClick={() => removeBenefits(index)} // Pass the index to removeBenefits
                    cursor="pointer"
                  />
                )}
              </div>
            ))}
            <hr />
            <div className="add" onClick={addBenefits}>
              <FontAwesomeIcon icon={faPlusCircle} color="#af5e41" />
              <span>Add More</span>
            </div>
          </div>
          <div className="dets">
            <label htmlFor="">Who this course is for?</label>
            {prerequisites.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "5px",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter what students may need to carry out this course"
                  value={item?.title}
                  onChange={(e) => handlePrerequisitesChange(e, index)}
                  required
                />
                {prerequisites.length > 1 && (
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    color="#303cc"
                    onClick={() => removePrerequisite(index)}
                    cursor="pointer"
                  />
                )}
              </div>
            ))}
            <hr />
            <div className="add" onClick={addPrerequisite}>
              <FontAwesomeIcon icon={faPlusCircle} color="#af5e41" />
              <span>Add More</span>
            </div>
          </div>
          <div className="create-2" method="POST" onSubmit={handleSubmit}>
            <div className="dets">
              <h4>Add Lessons</h4>
              {lessonData.map((lesson, lessonIndex) => (
                <>
                  <div
                    className="collapse"
                    onClick={() => handleToggle(lessonIndex)}
                  >
                    <h4>Lesson {lessonIndex + 1}</h4>
                    <FontAwesomeIcon
                      icon={
                        collapsedLessons[lessonIndex] ? faAngleDown : faAngleUp
                      }
                      color="#af5e41"
                    />
                  </div>
                  {collapsedLessons[lessonIndex] ? null : (
                    <div key={lessonIndex} className="lesson-container">
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
                            handleLessonDataChange(
                              lessonIndex,
                              "title",
                              e.target.value
                            )
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
                        <h4>Links</h4>
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
                                onClick={() =>
                                  removeLink(lessonIndex, linkIndex)
                                }
                                cursor="pointer"
                              />
                            </div>
                          </div>
                        ))}
                        <div
                          className="add"
                          onClick={() => addLink(lessonIndex)}
                        >
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            color="#af5e41"
                          />
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
                  )}
                </>
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
        </form>
      </div>
    </div>
  );
};

export default AdminCreate;
