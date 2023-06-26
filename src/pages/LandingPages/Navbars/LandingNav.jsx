import React from "react";
import { faAngleDown, faBars, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
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

const LandingNav = () => {
  return (
    <div>
      <div className="home-nav">
        <div className="offers">
          <p>
            Limited time launch <span>discount</span> : 20% off 03:25:15
          </p>
        </div>
        <div className="main">
          <FontAwesomeIcon className="ham" icon={faBars} size="2x" color="#090914" />
          <div className="logo-name">
            <img src={wellslogo} alt={wellslogo} />
            <p> WELL PROFESSIONALS</p>
          </div>
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
            <p className="login-btn">Login</p>
            <button className="create-btn">Create Account</button>
          </div>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} color="#090914" size="2x" />
          </div>
        </div>
        <div className="student-options">
          <div className="options">
            <img src={homeicon} alt={homeicon} />
            <p>Dashboard</p>
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
      </div>
    </div>
  );
};

export default LandingNav;
