import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import worker from "../../../assets/Images/worker.svg";
import back from "../../../assets/Icons/back-arrow.svg";
import googleicon from "../../../assets/Icons/google-icon.svg";
import fbicon from "../../../assets/Icons/facebook-icon.svg";
import "../Signup/Signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../../redux/auth/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate()

  const [toggle, setToggle] = useState();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  function handleToggle() {
    setToggle(!toggle);
  }

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
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   let regobj = { name, password, email, mobile };

  //   dispatch(registerUser(regobj))
  //     .unwrap()
  //     .then(() => {
  //       history.push(`${process.env.PUBLIC_URL}/auth-login`);
  //     })
  //     .catch((err) => {
  //       if (err.message.includes("duplicate")) {
  //         dispatch(setPhoneError(err.message));
  //         dispatch(setEror(""));
  //       } else if (err.message.includes("Email")) {
  //         dispatch(setEmailError(err.message));
  //         dispatch(setEror(""));
  //       } else if (err.message.includes("mobile")) {
  //         dispatch(setValError(err.message));
  //         dispatch(setEror(""));
  //       } else {
  //         dispatch(setError(err.message));
  //       }
  //     });
  // };

  // const handleEmailChange = (e) => {

  //   setEmail(e.target.value);
  //   setEmailError("");
  //   setValError("");
  //   setEror("");
  // };

  // const handleMobileChange = (e) => {
  //   setMobile(e.target.value);
  //   setPhoneError("");
  //   setEror("");
  //   setValError("");
  // };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/auth-login');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, history, dispatch]);

  const onSubmit = (e) => {
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        mobile,
      };
      dispatch(register(userData));
    }
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
                  <Link className="back" to='/'>
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="blank">
                    <label htmlFor="">Phone number</label>
                    <div className="input">
                      <input
                        type="number"
                        placeholder="+2345678909876"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
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
                  <div className="blank">
                    <label htmlFor="">Confirm password</label>
                    <div className="input">
                      <input
                        type={toggle ? "text" : "password"}
                        placeholder="* * * * * * * *"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
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
                <div className="signup-ctn-btn">
                  <button type="submit" onClick={onSubmit}>
                    <p>{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Sign Up"}</p>
                  </button>
                </div>
                <div className="no-account">
                  <p>
                    Already have an account?
                    <span>
                      <Link to='/auth-login' className="new">
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
