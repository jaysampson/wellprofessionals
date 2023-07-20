import React from "react";
import worker from "../../../../assets/Images/worker.svg";
import arrowright from "../../../../assets/Icons/arrow-right.svg";
import back from "../../../../assets/Icons/back-arrow.svg";
import eye from "../../../../assets/Icons/eye.svg";
import "../ResetPasword/Updatepass.scss";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  return (
    <div>
      <div className="update-pass-container">
        <div className="update-pass-content">
          <img className="worker" src={worker} alt={worker} />
          <div className="update-form-container">
            <div className="update-form-content">
              <div className="header">
                <div className="back-con">
                  <Link className="back" to='/auth-reset'>
                    <img src={back} alt={back} />
                    <p>Back</p>
                  </Link>
                </div>
                <div className="title">
                  <header>Update Password?</header>
                  <p>Enter your new password</p>
                </div>
              </div>
              <div className="form">
                <form action="POST">
                  <div className="blank">
                    <label htmlFor="">Create new password</label>
                    <div className="input">
                      <input type="password" placeholder="* * * * * * * *" />
                      <img src={eye} alt={eye} className="eye" />
                    </div>
                  </div>
                  <div className="blank">
                    <label htmlFor="">Confirm new password</label>
                    <div className="input">
                      <input type="password" placeholder="* * * * * * * *" />
                      <img src={eye} alt={eye} className="eye" />
                    </div>
                  </div>
                </form>
                <div className="update-ctn-btn">
                  <button>
                    <p>CONTINUE</p>
                    <img src={arrowright} alt={arrowright} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
