import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./StudentProfilePages.css";
import { Link } from "react-router-dom";
import Student_one from "../../images/StudentProfile/Student-one.svg";
import Alphabets_img from "../../images/StudentProfile/Alphabets-img.svg";
import CustomizedProgressBars from "./Progress";

function StudentCourse() {
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
                        Course
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
                        Test
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
                        Premium classes
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
                      <Link to={"/StudentCourse"}>
                        {" "}
                        <div className="student-time-main">
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
                      <Link to={"/StudentCourse"}>
                        {" "}
                        <div className="student-time-main">
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
                      <Link to={"/StudentCourse"}>
                        {" "}
                        <div className="student-time-main">
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
                      <Link to={"/StudentCourse"}>
                        {" "}
                        <div className="student-time-main">
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
                    <div
                      className="tab-pane fade"
                      id="nav-courses"
                      role="tabpanel"
                      aria-labelledby="nav-courses-tab"
                      tabindex="0"
                    >
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main">
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
                            <h4 className="scorer">Scorer : 500 </h4>
                          </div>
                        </div>
                      </Link>
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main">
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
                            <h4 className="scorer">Scorer : 500 </h4>
                          </div>
                        </div>
                      </Link>
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main">
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
                            <h4 className="scorer">Scorer : 500 </h4>
                          </div>
                        </div>
                      </Link>
                      <Link to={""}>
                        {" "}
                        <div className="student-time-main">
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
                            <h4 className="scorer">Scorer : 500 </h4>
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
            <div className="col-6 ">
              <div className="Course-bg">
                <div className="student-course-main">
                  <div className="course-student-img">
                    <img src={Student_one} className="img-fluid" alt="" />
                  </div>
                  <div className="student-course-heading">
                    <h4>design & Illustration </h4>
                    <h3>Date : 05 September 2024</h3>
                    <p>Total Scorer : 500/ 500 </p>
                  </div>
                </div>
                <div className="Alphabets-center">
                  <div className="Alphabets-text">
                    <h3>
                      Alphabets <span>Lesson no: 01</span>
                    </h3>
                  </div>
                  <div className="Alphabets-main">
                    <div className="Alphabets_img">
                      <img src={Alphabets_img} alt="" />
                    </div>
                    <div className="Alphabets-text">
                      <p>
                        Torem ipsum dolor sit amet, consectetur adipiscing
                        elit.Torem ipsum dolor sit{" "}
                      </p>
                    </div>
                  </div>
                  <div className="course-bar">
                    <CustomizedProgressBars />
                    <p>50%</p>
                  </div>
                </div>
                <div className="Alphabets-center">
                  <div className="Alphabets-text">
                    <h3>
                      Phonetics <span>Lesson no: 01</span>
                    </h3>
                  </div>
                  <div className="Alphabets-main">
                    <div className="Alphabets_img">
                      <img src={Alphabets_img} alt="" />
                    </div>
                    <div className="Alphabets-text">
                      <p>
                        Torem ipsum dolor sit amet, consectetur adipiscing
                        elit.Torem ipsum dolor sit{" "}
                      </p>
                    </div>
                  </div>
                  <div className="course-bar">
                    <CustomizedProgressBars />
                    <p>50%</p>
                  </div>
                </div>
                <div className="Alphabets-center">
                  <div className="Alphabets-text">
                    <h3>
                      Numbers <span>Lesson no: 01</span>
                    </h3>
                  </div>
                  <div className="Alphabets-main">
                    <div className="Alphabets_img">
                      <img src={Alphabets_img} alt="" />
                    </div>
                    <div className="Alphabets-text">
                      <p>
                        Torem ipsum dolor sit amet, consectetur adipiscing
                        elit.Torem ipsum dolor sit{" "}
                      </p>
                    </div>
                  </div>
                  <div className="course-bar">
                    <CustomizedProgressBars />
                    <p>50%</p>
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

export default StudentCourse;
