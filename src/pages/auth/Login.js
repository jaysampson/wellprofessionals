import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import worker from "../../images/worker.svg";
import back from "../../images/icons/back-arrow.svg";
import googleicon from "../../images/icons/google-icon.svg";
import appleicon from "../../images/icons/apple-icon.svg";
import fbicon from "../../images/icons/facebook-icon.svg";
import eye from "../../images/icons/eye.svg";
import "../../assets/scss/auth-pages/Login.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="signin-pass-container">
        <div className="signin-pass-content">
          <img className="worker" src={worker} alt={worker} />
          <div className="signin-form-container">
            <div className="signin-form-content">
              <div className="header">
                <div className="back-con">
                  <Link className="back" to={`${process.env.PUBLIC_URL}/`}>
                    <img src={back} alt={back} />
                    <p>Back</p>
                  </Link>
                </div>
                <div className="title">
                  <header>Sign In</header>
                  <p>Enter your details below</p>
                </div>
              </div>
              <div className="form">
                <form action="POST">
                  <div className="blank">
                    <label htmlFor="">Email Address</label>
                    <div className="input">
                      <input type="email" placeholder="yourname@gmail.com" />
                    </div>
                  </div>
                  <div className="blank">
                    <label htmlFor="">Password</label>
                    <div className="input">
                      <input type="password" placeholder="* * * * * * * *" />
                      <img src={eye} alt={eye} className="eye" />
                    </div>
                  </div>
                </form>
                <div className="remember">
                  <input type="checkbox" className="checkbox" />
                  <p>Remember me</p>
                </div>
                <NavLink to={`${process.env.PUBLIC_URL}/home`} className="signin-ctn-btn">
                  <button>
                    <p>Sign In</p>
                  </button>
                </NavLink>

                <div className="no-account">
                  <p>
                    Don't have an account?{" "}
                    <span>
                      <Link to={`${process.env.PUBLIC_URL}/auth-register`} className="new">
                        Create free account
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="signin-options">
                <div className="or">
                  <hr />
                  <p>Or Sign In with</p>
                  <hr />
                </div>
                <div className="options">
                  <button className="option-btn" style={{ border: "1px solid #D0D5DD", backgroundColor: "white" }}>
                    <img src={googleicon} alt={googleicon} />
                  </button>
                  <button className="option-btn" style={{ backgroundColor: "black" }}>
                    <img src={appleicon} alt={appleicon} />
                  </button>
                  <button className="option-btn" style={{ backgroundColor: "#1877F2" }}>
                    <img src={fbicon} alt={fbicon} />
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
export default Login;
