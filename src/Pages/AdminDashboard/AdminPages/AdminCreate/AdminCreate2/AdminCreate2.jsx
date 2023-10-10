import React, { useEffect, useState } from "react";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import upload from "../../../../../assets/Images/upload.svg";
import { faCloudUpload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { BreadCrumb } from "../../../../BreadCrumb/BreadCrumb";
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
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [estimatedPrice, setEstimatedPrice] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [tags, setTags] = useState("");
  //   const [level, setLevel] = useState("");
  //   const [benefits, setBenefits] = useState([{ title: "" }]);
  //   const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const { course, isLoading, isError, isSuccess, message } = useSelector(
  //     (state) => state.course
  //   );

  //   useEffect(() => {
  //     if (isError) {
  //       toast.error(message);
  //     }

  //     if (course) {
  //       toast.success("Course Created Successfully");
  //       dispatch(reset());
  //       navigate("/admin/create/2");
  //     }
  //   }, [isError, course, message, dispatch]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const courseData = {
  //       name,
  //       description,
  //       price,
  //       estimatedPrice,
  //       category,
  //       tags,
  //       level,
  //       benefits,
  //       prerequisites,
  //     };
  //     dispatch(createCourse(courseData));
  //     console.log(courseData, "mychief");
  //   };

  //   const addPrerequisite = () => {
  //     setPrerequisites([...prerequisites, { title: "" }]); // Add a new empty prerequisite object
  //   };

  //   const removePrerequisite = (index) => {
  //     const updatedPrerequisites = [...prerequisites];
  //     updatedPrerequisites.splice(index, 1); // Remove the prerequisite object at the specified index
  //     setPrerequisites(updatedPrerequisites);
  //   };

  //   const handlePrerequisitesChange = (e, index) => {
  //     const { value } = e.target;
  //     const updatedPrerequisites = [...prerequisites];
  //     updatedPrerequisites[index] = { title: value };
  //     setPrerequisites(updatedPrerequisites);
  //   };

  //   const addBenefits = () => {
  //     setBenefits([...benefits, { title: "" }]); // Add a new empty benefit object
  //   };

  //   const removeBenefits = (index) => {
  //     const updatedBenefits = [...benefits];
  //     updatedBenefits.splice(index, 1); // Remove the benefit object at the specified index
  //     setBenefits(updatedBenefits);
  //   };

  //   const handleBenefitsChange = (e, index) => {
  //     const { value } = e.target;
  //     const updatedBenefits = [...benefits];
  //     updatedBenefits[index] = { title: value };
  //     setBenefits(updatedBenefits);
  //   };

  return (
    <div className="create">
      <BreadCrumb />
      <div className="create-contents">
        <form>
          <div className="upload">
            <div className="upload-top">
              <h2>Upload Course Image</h2>
              <div className="buttons">
                <button className="edit">
                  <span>Edit</span>
                </button>
                <button className="upload-btn">
                  <FontAwesomeIcon icon={faCloudUpload} />
                  <span>Upload</span>
                </button>
              </div>
            </div>
            <div className="upload-box">
              <img src={upload} alt={upload} />
              <p>Upload a course file here</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </span>
              <div className="btns">
                <buttom className="cancel">Cancel</buttom>
                <button className="confirm">Confirm</button>
              </div>
            </div>
          </div>
          <div className="upload">
            <div className="upload-top">
              <h2>Upload Course Preview Video</h2>
              <div className="buttons">
                <button className="edit">
                  <span>Edit</span>
                </button>
                <button className="upload-btn">
                  <FontAwesomeIcon icon={faCloudUpload} />
                  <span>Upload</span>
                </button>
              </div>
            </div>
            <div className="upload-box">
              <img src={upload} alt={upload} />
              <p>Upload a course file here</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </span>
              <div className="btns">
                <buttom className="cancel">Cancel</buttom>
                <button className="confirm">Confirm</button>
              </div>
            </div>
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faSpinner} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreate2;
