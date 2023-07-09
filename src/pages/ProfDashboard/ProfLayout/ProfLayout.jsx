import React from "react";
import DashNav from "../../LandingPages/Navbars/DashNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBell,
  faChartArea,
  faChartSimple,
  faFolder,
  faGears,
  faHome,
  faMousePointer,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/scss/ProfDashboard/ProfLayout/ProfLayout.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "../../../assets/scss/ProfDashboard/ProfPages/ProfDashboard.scss";

const ProfLayout = ({ content }) => {
  return (
    <div>
      <DashNav />
      <div className="dashboard-layout">
        <div className="left-layout">
          <div className="left-top">
            <NavLink to={`${process.env.PUBLIC_URL}/prof-dashboard/`} className="item">
              <FontAwesomeIcon icon={faHome} />
              <span>Dashboard</span>
            </NavLink>
            <div className="topics">
              <span>ANALYTICS</span>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faChartSimple} />
                  <span>adipiscing elit</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMousePointer} />
                  <span>adipiscing elit</span>
                </li>
              </ul>
            </div>
            <div className="topics">
              <span>SUPPORTS</span>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faChartSimple} />
                  <span>adipiscing elit</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span>adipiscing elit</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>adipiscing elit</span>
                </li>
              </ul>
            </div>
            <div className="topics">
              <span>LOREM IPSUM</span>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFolder} />
                  <span>adipiscing elit</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBell} />
                  <span>adipiscing elit</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChartArea} />
                  <span>adipiscing elit</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="left-bottom">
            <li>
              <FontAwesomeIcon icon={faGears} />
              <span>Settings</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Logout</span>
            </li>
          </div>
        </div>
        <div className="right-layout">{content}</div>
      </div>
    </div>
  );
};

export default ProfLayout;
