import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link
            to="/Home"
            className={location.pathname === "/Home" ? "active" : ""}
          >
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link
            to="/my-classes"
            className={location.pathname === "/my-classes" ? "active" : ""}
          >
            <i className="fa fa-users"></i> My Classes
          </Link>
        </li>
        <li>
          <Link
            to="/course"
            className={location.pathname === "/course" ? "active" : ""}
          >
            <i className="fa fa-book"></i> Course
          </Link>
        </li>
        <li>
          <Link
            to="/test"
            className={location.pathname === "/test" ? "active" : ""}
          >
            <i className="fa fa-pencil"></i> Test
          </Link>
        </li>
        <li>
          <Link
            to="/dictionary"
            className={location.pathname === "/dictionary" ? "active" : ""}
          >
            <i className="fa-solid fa-bookmark"></i> Dictionary
          </Link>
        </li>
        <li>
          <Link
            to="/chats"
            className={location.pathname === "/chats" ? "active" : ""}
          >
            <i className="fa-regular fa-message"></i> Chats
          </Link>
        </li>
        <li>
          <Link
            to="/StudentProfile"
            className={location.pathname === "/StudentProfile" ? "active" : ""}
          >
            <i className="fa-solid fa-user"></i> Profile
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className={location.pathname === "/logout" ? "active" : ""}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </Link>
        </li>
        <li>
          <Link
            to="/help-support"
            className={location.pathname === "/help-support" ? "active" : ""}
          >
            <i className="fa-solid fa-circle-question"></i> Help & Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
