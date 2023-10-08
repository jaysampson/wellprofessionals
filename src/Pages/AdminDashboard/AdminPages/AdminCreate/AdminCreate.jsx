import React, { useEffect, useState } from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import { BreadCrumb } from "../../../BreadCrumb/BreadCrumb";
import "../AdminCreate/AdminCreate.scss";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { reset, createCourse } from "../../../../redux/CourseAPI/courseSlice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [level, setLevel] = useState("");
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
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
      navigate("/admin/create/2");
      dispatch(reset());
    }
  }, [isError, course, message, isSuccess, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      name,
      description,
      price,
      estimatedPrice,
      category,
      tags,
      level,
      benefits,
      prerequisites,
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

  return (
    <div className="create">
      <BreadCrumb />
      <div className="create-contents">
        <form>
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
          <button type="submit" onClick={handleSubmit}>
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Next >>"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreate;
