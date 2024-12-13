import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import user from "../images/user.svg";
import logout_img from "../images/logout-bg.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const modalElement = document.getElementById("staticBackdrop");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();

    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <div className="container-fluid px-0">
          <div className="header-main">
            <div className="logo-search">
              <Link to={"/Home"}>
                <img src={logo} alt="logo" className="img-fluid" />
              </Link>
              <div className="form-group icon-search">
                <span className="fa fa-search"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="notification-user">
              <div className="notification">
                <Link to={"/Notification"}>
                  <i className="fa-regular fa-bell"></i>
                </Link>
              </div>
              <div className="dropdown dropstart">
                <button
                  className="btn btn-user "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={user} alt="" className="img-fluid" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to={"/EditProfile"}>
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
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
    </>
  );
};

export default Navbar;
