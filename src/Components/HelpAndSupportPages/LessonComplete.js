import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./HelpAndSupportPages.css";
import lesson_complete from "../../images/HelpAndSupportPages/lesson-complete.svg";

function LessonComplete() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="container-fluid px-0">
          <div className="row ">
            <div className="col-12">
              <div className="student-profile-heading">
                <Link to="">
                  {" "}
                  <i class="fa-solid fa-left-long"></i>
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="lesson-complete-main">
                <div className="lesson-complete-heading">
                  <h2>Lesson complete!</h2>
                  <p>
                    Great job! You've successfully completed your English
                    journey lesson.
                  </p>
                </div>
                <div>
                  <img src={lesson_complete} className="img-fluid" alt="" />
                </div>
                <div>
                  <Link to={"/"} className="btn btn-c-email w-50 m-auto mb-4">
                    Continue
                  </Link>
                  <Link to={"/"} className="btn btn-c-google w-50 m-auto mb-4">
                    Go to homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonComplete;
