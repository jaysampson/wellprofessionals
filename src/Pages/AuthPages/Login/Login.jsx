import { Link, useNavigate } from "react-router-dom";
import worker from "../../../assets/Images/worker.svg";
import back from "../../../assets/Icons/back-arrow.svg";
import googleicon from "../../../assets/Icons/google-icon.svg";
import fbicon from "../../../assets/Icons/facebook-icon.svg";
import "../Login/Login.scss";
import { useState, useEffect } from "react";
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../../../redux/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/");
      toast.success("Logged in");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  console.log(message);
  function handleToggle() {
    setToggle(!toggle);
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
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
                  <Link className="back" to="/">
                    <img src={back} alt={back} />
                    <p>Back</p>
                  </Link>
                </div>
                <div className="title">
                  <header>Sign In</header>
                  <p>Enter your details below</p>
                </div>
              </div>
              <form method="POST" className="form" onSubmit={loginSubmit}>
                <div className="form">
                  <div className="blank">
                    <label htmlFor="">Email Address</label>
                    <div className="input">
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="blank">
                    <label htmlFor="">Password</label>
                    <div className="input">
                      <input
                        type={toggle ? "text" : "password"}
                        placeholder="* * * * * * * *"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
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
                </div>
                <div className="remember">
                  <input type="checkbox" className="checkbox" required />
                  <p>Remember me</p>
                </div>
                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                <div className="signin-ctn-btn">
                  <button type="submit">
                    <span>
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        "Sign in"
                      )}
                    </span>
                  </button>
                </div>

                <div className="no-account">
                  <p>
                    Don't have an account?{" "}
                    <span>
                      <Link to="/auth-register" className="new">
                        Create free account
                      </Link>
                    </span>
                  </p>
                </div>
              </form>
              <div className="signin-options">
                <div className="or">
                  <hr />
                  <p>Or Sign In with</p>
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
export default Login;
