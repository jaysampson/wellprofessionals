import React from "react";
import Logo from "../../../assets/Images/Wells-Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faCertificate,
  faCircleNotch,
  faComment,
  faCreditCard,
  faPlay,
  faShield,
  faShieldAlt,
  faStar,
  faThumbsUp,
  faUserCheck,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../SettingLayout/SettingLayout.scss";
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb";
import { Link, NavLink } from "react-router-dom";

const SettingLayout = ({ content }) => {
  return (
    <div className="setting-layout">
      <div className="side-layout">
        <Link to="/">
          <img src={Logo} alt={Logo} />
        </Link>
        <div className="layout-contents">
          <div className="contents">
            <h4>General</h4>
            <ul>
              <NavLink
                to="/settings-profile"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                <li>
                  <FontAwesomeIcon icon={faUserCircle} />
                </li>
              </NavLink>
              <NavLink
                to="/settings-cards"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                <li>
                  <FontAwesomeIcon icon={faCreditCard} />
                </li>
              </NavLink>
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                <li>
                  <FontAwesomeIcon icon={faCertificate} />
                </li>
              </NavLink>
              <NavLink
                to="/settings-verification"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                <li>
                  <FontAwesomeIcon icon={faUserCheck} />
                </li>
              </NavLink>
            </ul>
          </div>
          <hr />
          <div className="contents">
            <h4>Classes</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleNotch} />
              </li>
              <li>
                <FontAwesomeIcon icon={faBookBookmark} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} />
              </li>
            </ul>
          </div>
          <hr />
          <div className="contents">
            <h4>More</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faThumbsUp} />
              </li>
              <li>
                <FontAwesomeIcon icon={faShield} />
              </li>
              <li>
                <FontAwesomeIcon icon={faShieldAlt} />
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-layout">
        <BreadCrumb />
        <div className="displayed-content">{content}</div>
      </div>
    </div>
  );
};

export default SettingLayout;
