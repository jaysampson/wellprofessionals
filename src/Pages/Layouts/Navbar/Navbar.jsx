import { faAngleDown, faBars, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
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
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="home-nav">
        <div className="offers">
          <p>
            Limited time launch <span>discount</span> : 20% off 03:25:15
          </p>
        </div>
        <div className="main">
          <FontAwesomeIcon icon={faBars} size="2x" color="#090914" className="ham" />
          <NavLink to='/home'>
            <div className="logo-name">
              <img src={wellslogo} alt={wellslogo} />
              <p> WELL PROFESSIONALS</p>
            </div>
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
          <div className="book-notify">
            <img src={book} alt={book} />
            <img src={notify} alt={notify} />
          </div>
          <div className="auths">
            <NavLink to='/auth-login' className="login-btn">
              Login
            </NavLink>
            <NavLink to='/auth-register' className="create-btn">
              Create Account
            </NavLink>
          </div>
          {/* : <div className="profile">
            <img src="" alt="" />
          </div> */}
        </div>
        <div className="student-options">
          <NavLink to='/home/dashboard' className="options">
            <img src={homeicon} alt={homeicon} />
            <p>Dashboard</p>
          </NavLink>
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

export default Navbar;
