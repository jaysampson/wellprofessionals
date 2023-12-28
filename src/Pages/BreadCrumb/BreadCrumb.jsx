import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeicon from "../../assets/Icons/home-icon.svg";
import "../BreadCrumb/BreadCrumb.scss";

export const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bread-crumb">
      {pathnames.length > 0 && (
        <React.Fragment>
          <Link to="/">
            <img src={homeicon} alt={homeicon} />
          </Link>
        </React.Fragment>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        return (
          <span key={index}>
            {<FontAwesomeIcon icon={faAngleRight} />}
            <Link to={routeTo} className="span">
              {capitalizedName}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
