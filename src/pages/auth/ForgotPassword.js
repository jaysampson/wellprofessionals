import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import worker from "../../images/worker.svg";
import arrowright from "../../images/icons/arrow-right.svg";
import back from "../../images/icons/back-arrow.svg";
import "../../assets/scss/auth-pages/Forgotpass.scss";

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
                  <Link className="back" to={`${process.env.PUBLIC_URL}/auth-login`}>
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
                  <Link className="ctn-btn" to={`${process.env.PUBLIC_URL}/auth-update`}>
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
