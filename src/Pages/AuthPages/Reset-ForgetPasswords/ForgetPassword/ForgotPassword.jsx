import React from "react";
import { Link } from "react-router-dom";
import worker from "../../../../assets/Images/worker.svg";
import arrowright from "../../../../assets/Icons/arrow-right.svg";
import back from "../../../../assets/Icons/back-arrow.svg";
import "../ForgetPassword/Forgotpass.scss";

const ForgotPassword = () => {
  return (
    <div>
      <div className="forgot-pass-container">
        <div className="forgot-pass-content">
          <img className="worker" src={worker} alt={worker} />
          <div className="reset-form-container">
            <div className="reset-form-content">
              <div className="header">
                <div className="back-con">
                  <Link className="back" to='/auth-login'>
                    <img src={back} alt={back} />
                    <p>Back</p>
                  </Link>
                </div>
                <div className="title">
                  <header>Forgot Password?</header>
                  <p>Enter you registered email address to retrieve your password</p>
                </div>
              </div>
              <div className="form">
                <form action="POST">
                  <div className="blank">
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder="yourname@gmail.com" />
                  </div>
                  <div className="or">
                    <hr />
                    <p>OR</p>
                    <hr />
                  </div>
                  <div className="blank">
                    <label htmlFor="">Phone number</label>
                    <input type="number" />
                  </div>
                </form>
                <div className="reset-ctn-btn">
                  <Link className="ctn-btn" to='/auth-update'>
                    <button>
                      <p>CONTINUE</p>
                      <img src={arrowright} alt={arrowright} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
