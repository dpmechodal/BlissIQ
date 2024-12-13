import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./HelpAndSupportPages.css";
import solar_bell_bold from "../../images/HelpAndSupportPages/solar_bell_bold.svg";

function Notification() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="container-fluid px-0">
          <div className="row ">
            <div className="col-12">
              <div className="student-edit-main">
                <div className="student-profile-heading">
                  <Link to="/Home">
                    <i class="fa-solid fa-left-long"></i>
                  </Link>
                  <h2>Notification</h2>
                </div>
                <div className="notification-clear">
                  <Link to={"/"}>Clear all</Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text Disable-notification">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text Disable-notification">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text Disable-notification">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
              <div>
                <div className="notification-main">
                  <div className="solar_bell_bold">
                    <img src={solar_bell_bold} className="img-fluid" alt="" />
                  </div>
                  <div className="notification-text Disable-notification">
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipiscing
                      elit.Torem ipsum dolor sit ametconsectetur adipiscing
                      elit.Torem ipsum{" "}
                    </p>
                    <div className="notification-time">
                      <h5>12:34 AM</h5>
                      <span></span>
                      <h5>12 Aug 2024</h5>
                    </div>
                  </div>
                </div>
                <div className="notification-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
