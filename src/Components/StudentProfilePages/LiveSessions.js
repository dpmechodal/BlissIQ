import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./StudentProfilePages.css";
import { Link } from "react-router-dom";
import Student_one from "../../images/StudentProfile/Student-one.svg";
import emoji_crown from "../../images/StudentProfile/emoji-crown.svg";
import CustomizedProgressBars from "./Progress";
import ChartTest from "./ChartTest";

function LiveSessions() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
       <div className="asside">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <div className="student-edit-main">
                <div className="student-profile-heading">
                  <a href="">
                    <i class="fa-solid fa-left-long"></i>
                  </a>
                  <h2>Live sessions </h2>
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
                  <h5 className="mb-0">
                    Class: <span>1st standard </span>
                  </h5>
                </div>
              </div>
              <div className="pills-live-sessions">
              <div>
                <div className="s-pills s-main-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-Attended-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-Attended"
                        type="button"
                        role="tab"
                        aria-controls="nav-Attended"
                        aria-selected="true"
                      >
                        Attended
                      </button>
                      <button
                        className="nav-link"
                        id="nav-Absent-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-Absent"
                        type="button"
                        role="tab"
                        aria-controls="nav-Absent"
                        aria-selected="false"
                      >
                        Absent
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-Attended"
                      role="tabpanel"
                      aria-labelledby="nav-Attended-tab"
                      tabindex="0"
                    >
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Attended-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Attended-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Attended-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Attended-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>

                      <div className="left-right-main">
                        <div>
                          <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div>
                          <span>10</span>
                        </div>
                        <div>
                          <i class="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-Absent"
                      role="tabpanel"
                      aria-labelledby="nav-Absent-tab"
                      tabindex="0"
                    >
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Absent-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Absent-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Absent-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/StudentAttended"}>
                        <div className="student-time-main Absent-main">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <h6 className="scorer">Scorer : 500 </h6>
                          </div>
                        </div>
                      </Link>

                      <div className="left-right-main">
                        <div>
                          <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div>
                          <span>10</span>
                        </div>
                        <div>
                          <i class="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-tests"
                      role="tabpanel"
                      aria-labelledby="nav-tests-tab"
                      tabindex="0"
                    >
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main premium-classes">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <CustomizedProgressBars />
                          </div>
                        </div>
                      </Link>
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main premium-classes">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <CustomizedProgressBars />
                          </div>
                        </div>
                      </Link>
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main premium-classes">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <CustomizedProgressBars />
                          </div>
                        </div>
                      </Link>
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main premium-classes">
                          <div className="date-student">
                            <img
                              src={Student_one}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="student-time">
                            <h3>design & Illustration</h3>
                            <p>Date : 05 September 2024</p>
                            <CustomizedProgressBars />
                          </div>
                        </div>
                      </Link>
                      <div className="left-right-main">
                        <div>
                          <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div>
                          <span>10</span>
                        </div>
                        <div>
                          <i class="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
             <div className="col-xl-6 col-lg-6 col-12">
                        <div className="Course-bg">
                          <div className="student-course-main">
                            <div className="course-student-img">
                              <img
                                src={Student_one}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="student-course-heading">
                              <h4>Foundation of English </h4>
                              <h3>Date : 05 September 2024</h3>
                              <p>Total Scorer : 500/ 500 </p>
                            </div>
                           
                          </div>
                           <div>
                             
                              <div className="testChar-main">
                              <div className="testChar-heading">
                                <h3>
                                  Alphabets
                                </h3>
                              </div>
                                <ChartTest />
                                 <div className="total-chart-main">
                                  <div className="total-main">
                                  <div className="Total-chart"></div>
                                  <h5>Total Obtained  <span>344</span></h5>
                                </div>
                                <div className="total-out">
                                  <div className="total-chart"></div>
                                  <h5>out of <span>500</span></h5>
                                </div>
                                 </div>
                              </div>
                              <div className="testChar-main">
                              <div className="testChar-heading">
                                <h3>
                                  Phonetics
                                </h3>
                              </div>
                                <ChartTest />
                                 <div className="total-chart-main">
                                  <div className="total-main">
                                  <div className="Total-chart"></div>
                                  <h5>Total Obtained  <span>344</span></h5>
                                </div>
                                <div className="total-out">
                                  <div className="total-chart"></div>
                                  <h5>out of <span>500</span></h5>
                                </div>
                                 </div>
                              </div>
                               <div className="testChar-main">
                              <div className="testChar-heading">
                                <h3>
                                  Numbers
                                </h3>
                              </div>
                                <ChartTest />
                                 <div className="total-chart-main">
                                  <div className="total-main">
                                  <div className="Total-chart"></div>
                                  <h5>Total Obtained  <span>344</span></h5>
                                </div>
                                <div className="total-out">
                                  <div className="total-chart"></div>
                                  <h5>out of <span>500</span></h5>
                                </div>
                                 </div>
                              </div>
                              
                               
                              
                            </div>
                        </div>
                      </div>
           
            </div>
            
          </div>
        </div>
    </>
  )
}

export default LiveSessions
