import React from "react";
import ProfLayout from "./ProfLayout/ProfLayout";
import homeicon from "../../images/icons/home-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import upload from "../../images/upload.svg";

const ProfDashboard = () => {
  return (
    <>
      <ProfLayout content={<Content />} />
    </>
  );
};

const Content = () => {
  return (
    <div className="dash-home">
      <div className="dash-home-con">
        <div className="dash-top">
          <img src={homeicon} alt={homeicon} />
          <p>Home</p>
          <FontAwesomeIcon icon={faAngleRight} />
          <p style={{ color: "#AF5E41" }}>Dashboard</p>
        </div>
        <div className="draw-downs">
          <div className="draw-down">
            <p>LOREM IPSUM</p>
            <span>0</span>
          </div>
          <div className="draw-down">
            <p>LOREM IPSUM</p>
            <span>0</span>
          </div>
          <div className="draw-down">
            <p>LOREM IPSUM</p>
            <span>0</span>
          </div>
          <div className="draw-down">
            <p>LOREM IPSUM</p>
            <span>0</span>
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
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
            <div className="btns">
              <buttom className="cancel">Cancel</buttom>
              <button className="confirm">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfDashboard;
