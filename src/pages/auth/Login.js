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
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { faEye, faEyeSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login, setLoggedIn } from "../../redux/auth/reducers/login/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eror, setEror] = useState("");
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  function handleToggle() {
    setToggle(!toggle);
  }

  const history = useHistory();
  // async function login() {
  //   const values = {
  //     email: email,
  //     password: password,
  //   };

  //   try {
  //     let response = await fetch("https://wellpro-server.onrender.com/api/user/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     if (response.status == true) {
  //       const result = await response.json();
  //       history.push(`${process.env.PUBLIC_URL}/home`);
  //     } else {
  //       const errorResponse = await response.json();
  //       setError(`Login failed: ${errorResponse.message}`); // Display failure message with reason
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     alert(`An error occurred during login ${error.message}`); // Display error message
  //   }
  // }

  const handleLogin = async () => {
    const values = {
      email: email,
      password: password,
    };

    try {
      await dispatch(login(values));
      dispatch(setLoggedIn(true));
      history.push(`${process.env.PUBLIC_URL}/home`);
    } catch (error) {
      console.error("Login error:", error);
      // alert(`An error occurred during login ${error.message}`);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEror("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setEror("");
  };

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
                <form method="POST">
                  <div className="blank">
                    <label htmlFor="">Email Address</label>
                    <div className="input">
                      <input type="email" placeholder="yourname@gmail.com" value={email} onChange={handleEmailChange} />
                    </div>
                  </div>
                  <div className="blank">
                    <label htmlFor="">Password</label>
                    <div className="input">
                      <input
                        type={toggle ? "text" : "password"}
                        placeholder="* * * * * * * *"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <FontAwesomeIcon
                        icon={toggle ? faEye : faEyeSlash}
                        cursor="pointer"
                        color="#000"
                        onClick={handleToggle}
                      />
                    </div>
                  </div>
                </form>
                <div className="remember">
                  <input type="checkbox" className="checkbox" />
                  <p>Remember me</p>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="signin-ctn-btn">
                  <button type="submit" onClick={handleLogin}>
                    <p>{loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Sign in"}</p>
                  </button>
                </div>

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
