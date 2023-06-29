import React, { useState } from "react";
import { faAngleDown, faBars, faCaretDown, faMinus, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wellslogo from "../../../images/Wells-Logo.svg";
import shop from "../../../images/icons/shop-bag.svg";
import lang from "../../../images/icons/language-icon.svg";
import book from "../../../images/icons/bookmark-2.svg";
import notify from "../../../images/icons/notification-bing.svg";
import "../../../assets/scss/other-pages/Navbars/LandingNav.scss";
import homeicon from "../../../images/icons/home-icon.svg";
import settingicon from "../../../images/icons/setting-icon.svg";
import carticon from "../../../images/icons/cart-icon.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

const LandingNav = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }
  return (
    <div className="home-nav">
      <div className="offers">
        <p>
          Limited time launch <span>discount</span> : 20% off 03:25:15
        </p>
      </div>
      <div className="main">
        <FontAwesomeIcon className="ham" icon={faBars} size="2x" color="#090914" />
        <NavLink to={`${process.env.PUBLIC_URL}`} className="logo-name">
          <img src={wellslogo} alt={wellslogo} />
          <p> WELL PROFESSIONALS</p>
        </NavLink>
        <div className="search-input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search Courses" />
        </div>
        <div className="categories">
          <span>Categories</span>
          <FontAwesomeIcon icon={faAngleDown} color="#64748B" />
        </div>
        <div className="shop">
          <img src={shop} alt={shop} />
          <p>2</p>
        </div>
        <div className="language">
          <img src={lang} alt={lang} />
          <span>English</span>
          <FontAwesomeIcon icon={faCaretDown} color="#64748B" />
        </div>
        <div className="auths">
          <NavLink to={`${process.env.PUBLIC_URL}/auth-login`} className="login-btn">
            Login
          </NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/auth-register`} className="create-btn">
            Create Account
          </NavLink>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} color="#090914" size="2x" />
        </div>
      </div>
      <div className="student-options">
        <div className="options">
          <img src={homeicon} alt={homeicon} />
          <NavLink to={`${process.env.PUBLIC_URL}/home/dashboard`} className="dash-link">
            Dashboard
          </NavLink>
        </div>
        <div className="options">
          <img src={carticon} alt={carticon} />
          <p>Cart</p>
        </div>
        <div className="options">
          <img src={book} alt={book} />
          <p>Bookmark</p>
        </div>
        <div className="options">
          <img src={settingicon} alt={settingicon} />
          <p>Setting</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <div className="sidebar">
        <NavLink
          to={`${process.env.PUBLIC_URL}/auth-login`}
          style={{ textDecoration: "none", color: "black", fontWeight: "700", fontSize: "1rem" }}
        >
          Login
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/auth-register`}
          style={{ textDecoration: "none", color: "#AF5E41", fontWeight: "700", fontSize: "1rem" }}
        >
          Create Account
        </NavLink>
        <hr />
        <h3>Top rated courses</h3>
        <h3>Courses for you</h3>
        <h3>New Courses</h3>
        <hr />
        <div className="navigate">
          <p>NAVIGATE TO</p>
          <hr />
        </div>
        <div className="side-categories">
          <div className="cat-header">
            <h3>Categories</h3>
            <FontAwesomeIcon icon={toggle ? faMinus : faPlus} width={"30px"} height={"30px"} onClick={toggleMenu} />
          </div>
          <div className="cats">
            <div className="each-cat">
              <input type="radio" />
              Lorem Ipusm
            </div>
            <div className="each-cat">
              <input type="radio" />
              Lorem Ipusm
            </div>
            <div className="each-cat">
              <input type="radio" />
              Lorem Ipusm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingNav;
