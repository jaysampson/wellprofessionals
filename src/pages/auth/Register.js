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
import { Spinner, FormGroup } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import worker from "../../images/worker.svg";
import back from "../../images/icons/back-arrow.svg";
import googleicon from "../../images/icons/google-icon.svg";
import appleicon from "../../images/icons/apple-icon.svg";
import fbicon from "../../images/icons/facebook-icon.svg";
import eye from "../../images/icons/eye.svg";
import "../../assets/scss/auth-pages/Signup.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
// import { setError, clearError } from "../../redux/auth/reducers/userSlice";
import { setError, setPhoneError, setEmailError, setValError } from "../../redux/auth/reducers/register/userSlice";
import { registerUser, selectLoading, selectError } from "../../redux/auth/reducers/register/authReg";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [eror, setEror] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [valError, setValError] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [toggle, setToggle] = useState();

  // const dispatch = useDispatch();
  // const error = useSelector((state) => state.auth.error);

  function handleToggle() {
    setToggle(!toggle);
  }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   let regobj = { name, password, email, mobile };

  //   fetch("https://wellpro-server.onrender.com/api/user/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", Accept: "application/json" },
  //     body: JSON.stringify(regobj),
  //   })
  //     .then((res) => {
  //       if (res.status == true) {
  //         history.push(`${process.env.PUBLIC_URL}/auth-login`);
  //         alert("Registered successfully");
  //       } else {
  //         return res.json(); // Parse response body as JSON
  //       }
  //     })
  //     .then((data) => {
  //       if (data && data.status === false) {
  //         if (data.message.includes("duplicate")) {
  //           setPhoneError(data.message);
  //           setError("");
  //         } else if (data.message.includes("Email")) {
  //           setEmailError(data.message);
  //           setError("");
  //         } else if (data.message.includes("name")) {
  //           setValError(data.message);
  //           setError("");
  //         } else {
  //           setError(data.message);
  //         }
  //       } else {
  //         throw new Error("Registration failed");
  //       }
  //     })
  //     .catch((err) => {
  //       setError("Failed: " + err.message);
  //     });
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let regobj = { name, password, email, mobile };

    dispatch(registerUser(regobj))
      .unwrap()
      .then(() => {
        history.push(`${process.env.PUBLIC_URL}/auth-login`);
      })
      .catch((err) => {
        if (err.message.includes("duplicate")) {
          dispatch(setPhoneError(err.message));
          dispatch(setEror(""));
        } else if (err.message.includes("Email")) {
          dispatch(setEmailError(err.message));
          dispatch(setEror(""));
        } else if (err.message.includes("mobile")) {
          dispatch(setValError(err.message));
          dispatch(setEror(""));
        } else {
          dispatch(setError(err.message));
        }
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setValError("");
    setEror("");
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setPhoneError("");
    setEror("");
    setValError("");
  };

  return (
    <div>
      <div className="signup-pass-container">
        <div className="signup-pass-content">
          <img className="worker" src={worker} alt={worker} />
          <div className="signup-form-container">
            <div className="signup-form-content">
              <div className="header">
                <div className="back-con">
                  <Link className="back" to={`${process.env.PUBLIC_URL}/`}>
                    <img src={back} alt={back} />
                    <p>Back</p>
                  </Link>
                </div>
                <div className="title">
                  <header>Sign Up</header>
                  <p>Welcome. Enter your credentials to create your account</p>
                </div>
              </div>
              <div className="form">
                <form method="POST">
                  <div className="blank">
                    <label htmlFor="">Full name</label>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Declan Rice"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="blank">
                    <label htmlFor="">Email Address</label>
                    <div className="input">
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                        className={error ? "error-input" : ""}
                        required
                      />
                    </div>
                    {emailError && <p style={{ color: "red", margin: "0px", padding: "0px" }}>{emailError}</p>}
                  </div>
                  <div className="blank">
                    <label htmlFor="">Phone number</label>
                    <div className="input">
                      <input
                        type="number"
                        placeholder="+2345678909876"
                        value={mobile}
                        onChange={handleMobileChange}
                        required
                      />
                    </div>
                    {phoneError && <p style={{ color: "red", margin: "0px", padding: "0px" }}>{phoneError}</p>}
                  </div>
                  <div className="blank">
                    <label htmlFor="">Create password</label>
                    <div className="input">
                      <input
                        type={toggle ? "text" : "password"}
                        placeholder="* * * * * * * *"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                  <input type="checkbox" className="checkbox" required />
                  <p>
                    I agree with the <span>Terms & Conditions</span> of Well Professionals
                  </p>
                </div>
                <div>{valError && <p style={{ color: "red", margin: "0px", padding: "0px" }}>{valError}</p>}</div>
                <div className="signup-ctn-btn">
                  <button type="submit" onClick={handleFormSubmit}>
                    <p>{loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Sign Up"}</p>
                  </button>
                </div>
                <div className="no-account">
                  <p>
                    Already have an account?
                    <span>
                      <Link to={`${process.env.PUBLIC_URL}/auth-login`} className="new">
                        Sign into your account
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="signup-options">
                <div className="or">
                  <hr />
                  <p>Or Sign Up with</p>
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
export default Register;
