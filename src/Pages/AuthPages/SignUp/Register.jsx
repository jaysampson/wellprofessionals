import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import worker from "../../../assets/Images/worker.svg";
import back from "../../../assets/Icons/back-arrow.svg";
import googleicon from "../../../assets/Icons/google-icon.svg";
import fbicon from "../../../assets/Icons/facebook-icon.svg";
import "../SignUp/Signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../../redux/auth/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const [toggle, setToggle] = useState();
  const [toggle2, setToggle2] = useState();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  function handleToggle() {
    setToggle(!toggle);
  }
  function handleToggle2() {
    setToggle2(!toggle2);
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Registered Successfully");
      navigate("/auth-login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const registerUser = (e) => {
    e.preventDefault();
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
    console.log("clicked");
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
                  <Link className="back" to="/">
                    <img src={back} alt={back} />
                    <p>Back</p>
                  </Link>
                </div>
                <div className="title">
                  <header>Sign Up</header>
                  <p>Welcome, enter your credentials to create your account</p>
                </div>
              </div>
              <form method="POST" onSubmit={registerUser}>
                <div className="form">
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
                        type={toggle2 ? "text" : "password"}
                        placeholder="* * * * * * * *"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                      />
                      <FontAwesomeIcon
                        icon={toggle2 ? faEye : faEyeSlash}
                        cursor="pointer"
                        color="#000"
                        onClick={handleToggle2}
                      />
                    </div>
                  </div>
                </div>
                <div className="remember">
                  <input type="checkbox" className="checkbox" required />
                  <span>
                    I agree with the{" "}
                    <Link to="/privacy-policy" className="terms">
                      Terms & Conditions
                    </Link>{" "}
                    of Well Professionals
                  </span>
                </div>
                <div className="signup-ctn-btn">
                  <button type="submit">
                    <span>
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        "Sign Up"
                      )}
                    </span>
                  </button>
                </div>
                <div className="no-account">
                  <span>
                    Already have an account?{" "}
                    <Link to="/auth-login" className="new">
                      Sign into your account
                    </Link>
                  </span>
                </div>
              </form>
              <div className="signup-options">
                <div className="or">
                  <hr />
                  <p>Or Sign Up with</p>
                  <hr />
                </div>
                <div className="options">
                  <button
                    className="option-btn"
                    style={{
                      border: "1px solid #D0D5DD",
                      backgroundColor: "white",
                    }}
                  >
                    <img src={googleicon} alt={googleicon} />
                  </button>
                  <button
                    className="option-btn"
                    style={{ backgroundColor: "#1877F2" }}
                  >
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
