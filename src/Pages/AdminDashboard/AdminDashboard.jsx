import React, { useEffect } from "react";
import AdminLayout from "./AdminLayout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import upload from "../../assets/Images/upload.svg";
import "./AdminDashboard.scss";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { getCourse } from "../../redux/CourseAPI/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  return (
    <>
      <AdminLayout content={<Content />} />
    </>
  );
};

const Content = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.course
  );
  const data = useSelector((state) => state.course.data);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  return (
    <div className="dash-home">
      <div className="dash-home-con">
        <BreadCrumb />
        <div className="draw-downs">
          <div className="draw-down">
            <p>TOTAL COURSES</p>
            <span>{data?.getCourse?.length}</span>
          </div>
          <div className="draw-down">
            <p>TOTAL STUDENTS</p>
            <span>6254</span>
          </div>
          <div className="draw-down">
            <p>TOTAL INSTRUCTORS</p>
            <span>432</span>
          </div>
          <div className="draw-down">
            <p>TOTAL IPSUM</p>
            <span>654</span>
          </div>
        </div>
        <div className="upload">
          <div className="upload-top">
            <h2>Upload a course</h2>
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
        <div className="recent-activities">
          <table>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>File name</th>
              <th>File size</th>
              <th>Date Uploaded</th>
              <th>Last Uploaded</th>
              <th>Uploaded by</th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td> Wellprofessionals</td>
              <td>200kb</td>
              <td>1st August 2023</td>
              <td>4th July, 2023</td>
              <td>Ankara Messi</td>
              <td>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td> Wellprofessionals</td>
              <td>200kb</td>
              <td>1st August 2023</td>
              <td>4th July, 2023</td>
              <td>Ankara Messi</td>
              <td>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td> Wellprofessionals</td>
              <td>200kb</td>
              <td>1st August 2023</td>
              <td>4th July, 2023</td>
              <td>Ankara Messi</td>
              <td>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td> Wellprofessionals</td>
              <td>200kb</td>
              <td>1st August 2023</td>
              <td>4th July, 2023</td>
              <td>Ankara Messi</td>
              <td>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td> Wellprofessionals</td>
              <td>200kb</td>
              <td>1st August 2023</td>
              <td>4th July, 2023</td>
              <td>Ankara Messi</td>
              <td>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
