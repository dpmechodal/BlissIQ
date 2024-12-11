import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logout_img from "../images/logout-bg.svg";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    const modalElement = document.getElementById("staticBackdrop");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();

    navigate("/");
  };

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
            to="#"
            className={location.pathname === "/logout" ? "active" : ""}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </Link>
        </li>
        <li>
          <Link
            to="/HelpAanSupport"
            className={location.pathname === "/HelpAanSupport" ? "active" : ""}
          >
            <i className="fa-solid fa-circle-question"></i> Help & Support
          </Link>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <div>
                    <div className="logout-img">
                      <img src={logout_img} className="img-fluid" alt="" />
                    </div>
                    <div className="log-out-pop">
                      <h4>Are you sure you want to logout?</h4>
                      <div className="logout-button">
                        <button
                          className="btn btn-c-email w-50"
                          data-bs-dismiss="modal"
                        >
                          No
                        </button>
                        <button
                          onClick={handleLogout}
                          className="btn btn-c-google w-50"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
