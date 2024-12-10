import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./StudentProfilePages.css";
import { Link } from "react-router-dom";
import Student_one from "../../images/StudentProfile/Student-one.svg";
import emoji_crown from "../../images/StudentProfile/emoji-crown.svg";
import mdi_tick from "../../images/StudentProfile/mdi_tick.svg";

function StudentProfile() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <div className="student-edit-main">
                <div className="student-profile-heading">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-left-long"></i>
                  </a>
                  <h2>Student Profile</h2>
                </div>
                <div className="edit-student">
                  <Link to={"/"}>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="student-main">
                <div className="student-img">
                  <img src={Student_one} className="img-fluid" alt="" />
                </div>
                <div className="student-name">
                  <h4>Aftab Qureshi </h4>
                  <div className="points-crown">
                    <p>400 Points</p>
                    <div>
                      <img src={emoji_crown} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="student-school-main">
                <div className="student-school">
                  <h5>
                    School : <span>St. Andrews High School</span>
                  </h5>
                  <h5>
                    Class: <span>1st standard </span>
                  </h5>
                </div>
              </div>
              <div className="points-main">
                <div className="points-earned">
                  <h4>Points earned</h4>
                  <h3>
                    124 <span>Points</span>
                  </h3>
                </div>
                <div className="points-earned">
                  <h4>
                    Time Spent <span>(in Minutes)</span>
                  </h4>
                  <h3>124</h3>
                </div>
                <div className="points-earned">
                  <h4>
                    Attendance <span>(weekly)</span>
                  </h4>
                  <h3>124</h3>
                </div>
              </div>

              <div>
                <div className="live-main-audio">
                  <div className="live-sessions">
                    <div className="audio-player">
                      <i class="fa-solid fa-play"></i>
                    </div>
                    <h3>Live sessions </h3>
                  </div>
                  <div className="live-count">
                    <span>08</span>
                  </div>
                </div>
                <div className="live-main-audio">
                  <div className="live-sessions course-text">
                    <div className="audio-player course">
                      <img src={mdi_tick} className="img-fluid" alt="" />
                    </div>
                    <h3>Course completed </h3>
                  </div>
                  <div className="live-count">
                    <span>24</span>
                  </div>
                </div>
                <div className="live-main-audio">
                  <div className="live-sessions rank-section ">
                    <div className="audio-player rank">
                      <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3>Student Rank </h3>
                  </div>
                  <div className="live-count">
                    <span>08</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                <div className="s-pills s-main-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-leader-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-leader"
                        type="button"
                        role="tab"
                        aria-controls="nav-leader"
                        aria-selected="true"
                      >
                        Leader board
                      </button>
                      <button
                        className="nav-link"
                        id="nav-courses-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-courses"
                        type="button"
                        role="tab"
                        aria-controls="nav-courses"
                        aria-selected="false"
                      >
                        Your Courses
                      </button>
                      <button
                        className="nav-link"
                        id="nav-tests-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-tests"
                        type="button"
                        role="tab"
                        aria-controls="nav-tests"
                        aria-selected="false"
                      >
                        Your Tests
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-leader"
                      role="tabpanel"
                      aria-labelledby="nav-leader-tab"
                      tabindex="0"
                    >
                      asas
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-courses"
                      role="tabpanel"
                      aria-labelledby="nav-courses-tab"
                      tabindex="0"
                    >
                      r
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-tests"
                      role="tabpanel"
                      aria-labelledby="nav-tests-tab"
                      tabindex="0"
                    >
                      s
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-live"
                      role="tabpanel"
                      aria-labelledby="nav-live-tab"
                      tabindex="0"
                    >
                      e
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-premium"
                      role="tabpanel"
                      aria-labelledby="nav-premium-tab"
                      tabindex="0"
                    >
                      y
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
