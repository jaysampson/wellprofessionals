import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBell,
  faBook,
  faChartLine,
  faChartSimple,
  faGears,
  faHome,
  faPlus,
  faQuestionCircle,
  faUserGraduate,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminLayout.scss";
import { Link, NavLink } from "react-router-dom";

const AdminLayout = ({ content }) => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-layout">
        <div className="left-layout">
          <div className="left-top">
            <button className="create">
              <Link to="/admin/create" className="create-1">
                <FontAwesomeIcon icon={faPlus} />
                <p>Create Course</p>
              </Link>
            </button>
            <NavLink
              to="/admin/"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Dashboard</span>
            </NavLink>
            <div className="topics">
              <span>ANALYTICS</span>
              <ul>
                <li>
                  <NavLink
                    to="/admin/admin-courses"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faBook} />
                    <span>Courses</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/admin/admin-instructors"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faUsers} />
                    <span>Instructors</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/admin-gradebook"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <span>Gradebook</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/admin-finance"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faChartLine} />
                    <span>Finance</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="topics">
              <span>SUPPORT</span>
              <ul>
                <li>
                  <NavLink
                    to="/admin/admin-support"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>Customer Support</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="topics">
              <span>OTHERS</span>
              <ul>
                <li>
                  <NavLink
                    to="/admin/announcements"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faBell} />
                    <span>Announcements</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/admin-report"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    <FontAwesomeIcon icon={faChartSimple} />
                    <span>Reports</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="left-bottom">
            <NavLink to="/admin/admin-settings">
              <li>
                <FontAwesomeIcon icon={faGears} />
                <span>Settings</span>
              </li>
            </NavLink>

            <li style={{ color: "red" }}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span style={{ color: "red" }}>Logout</span>
            </li>
          </div>
        </div>
        <div className="right-layout">{content}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
