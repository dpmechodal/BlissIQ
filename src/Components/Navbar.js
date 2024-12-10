import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import user from "../images/user.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container-fluid px-0">
          <div className="header-main">
            <div className="logo-search">
              <Link to={"/Dashboard"}>
                <img src={logo} alt="logo" className="img-fluid" />
              </Link>
              <div className="form-group icon-search">
                <span className="fa fa-search"></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
            <div className="notification-user">
              <div className="notification">
                <Link to={"/Dashboard"}>
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
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="dropdown-item" to={"#"}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"#"}>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
