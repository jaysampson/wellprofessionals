import {
  faAngleDown,
  faArrowRightFromBracket,
  faBars,
  faMinus,
  faPlus,
  faSearch,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wellslogo from "../../../assets/Images/Wells-Logo.svg";
import shop from "../../../assets/Icons/shop-bag.svg";
import lang from "../../../assets/Icons/language-icon.svg";
import book from "../../../assets/Icons/bookmark-2.svg";
import notify from "../../../assets/Icons/notification-bing.svg";
import "../Navbar/Navbar.scss";
import homeicon from "../../../assets/Icons/home-icon.svg";
import settingicon from "../../../assets/Icons/setting-icon.svg";
import carticon from "../../../assets/Icons/cart-icon.svg";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../../redux/auth/authSlice";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState(false);
  const { user } = useSelector((state) => state.auth);
  function toggleMenu() {
    setToggle(!toggle);
  }

  function toggleDrop() {
    setDrop(!drop);
  }
  let dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    dispatch(reset());
  }

  return (
    <nav>
      <div className="home-nav">
        <div className="main">
          <FontAwesomeIcon
            icon={toggle ? faXmark : faBars}
            color="#090914"
            className="ham"
            onClick={toggleMenu}
          />
          <div to="/">
            <div className="logo-name">
              <NavLink to="/" className="logo">
                <img src={wellslogo} alt={wellslogo} />
                <p> WELL PROFESSIONALS</p>
              </NavLink>
              <div className="categories">
                <span>Categories</span>
                <FontAwesomeIcon icon={faAngleDown} color="#64748B" />
              </div>
            </div>
          </div>
          <Link to="/search" className="search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <div className="right-nav">
            <Link to="/search" className="search-2">
              <FontAwesomeIcon icon={faSearch} className="search-input" />
            </Link>
            <div className="shop">
              <img src={shop} alt={shop} />
              <p>2</p>
            </div>
            <div className="book-notify">
              <img src={book} alt={book} />
              <img src={notify} alt={notify} />
            </div>
            {user ? (
              <Link to="/settings/profile" className="profile-img">
                {user.data.image ? (
                  <img
                    src={user.data.image}
                    alt={user.data.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      border: "1px solid #af5e41",
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    color="#af5e41"
                    size="3x"
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                    }}
                  />
                )}
              </Link>
            ) : (
              <div className="auths">
                <NavLink to="/auth-login" className="login-btn">
                  Login
                </NavLink>
                <NavLink to="/auth-register" className="create-btn">
                  Create Account
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="offers">
          <p>
            Limited time launch <span>discount</span> : 20% off 03:25:15
          </p>
        </div>
        {user ? (
          <div className="student-options">
            <NavLink to="/dashboard" className="options">
              <img src={homeicon} alt={homeicon} />
              <p>Dashboard</p>
            </NavLink>
            <div className="options">
              <img src={carticon} alt={carticon} />
              <p>Cart</p>
            </div>
            <NavLink className="options">
              <img src={book} alt={book} />
              <p>Bookmark</p>
            </NavLink>
            <NavLink to="/settings/profile" className="options">
              <img src={settingicon} alt={settingicon} />
              <p>Setting</p>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={toggle ? "sidebar" : "null"}>
        {user ? (
          <Link to="/settings/profile" className="nav-user">
            {user.data.image ? (
              <img
                src={user.data.image}
                alt={user.data.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid #af5e41",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faUserCircle}
                color="#af5e41"
                size="3x"
                style={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                }}
              />
            )}
            <div className="nav-user-dets">
              <h4>{user && user.data.name}</h4>
              <span>{user && user.data.email}</span>
            </div>
          </Link>
        ) : (
          <>
            <NavLink
              to="/auth-login"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/auth-register"
              style={{
                textDecoration: "none",
                color: "#AF5E41",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              Create Account
            </NavLink>
          </>
        )}
        <hr />
        {user ? (
          <>
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/dashboard">
              <h3>Dashboard</h3>
            </Link>
            <Link to="/cart">
              <h3>Cart</h3>
            </Link>
            <Link to="/admin/create">
              <h3>Create Course</h3>
            </Link>
            <h3>Notifications</h3>
            <h3>Instructor</h3>
            <Link to="/settings/profile">
              <h3>Settings</h3>
            </Link>
            <hr />
          </>
        ) : (
          ""
        )}
        <div className="navigate">
          <p>NAVIGATE TO</p>
          <hr />
        </div>
        <div className="side-categories">
          <div className="cat-header">
            <h3>Categories</h3>
            <FontAwesomeIcon
              icon={drop ? faMinus : faPlus}
              width={"30px"}
              height={"30px"}
              onClick={toggleDrop}
              cursor={"pointer"}
            />
          </div>
          {drop && (
            <div className="cats">
              <div className="each-cat">
                <input type="radio" />
                Upstream
              </div>
              <div className="each-cat">
                <input type="radio" />
                Midstream
              </div>
              <div className="each-cat">
                <input type="radio" />
                Downstream
              </div>
            </div>
          )}
        </div>
        <p onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Logout</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
