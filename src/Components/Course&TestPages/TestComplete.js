import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";
import Test_complete from "../../images/HelpAndSupportPages/lesson-complete.svg";

function TestComplete() {
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
                  <Link to="">
                    <i className="fa-solid fa-left-long"></i>
                  </Link>
                  <h2>Foundations of English - Alphabets - 1</h2>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="bear-bars test-complete-bars">
              <div class="progress green-prog">
                <div class="progress-bar green-bar 100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <div className="bear-text">
                  <p>1/25</p>
                  <div className="bear-img">
                    <img src={bear} className="img-fluid" alt="Bear" />
                  </div>
                </div>
              </div>
              <div className="Question-bg">
                <div className="test-complete-main">
                  <div className="Test-complete-heading">
                    <h3>Lesson complete!</h3>
                    <p>
                      Great job! You've successfully completed your English
                      journey lesson.
                    </p>
                  </div>
                  <div>
                    <img src={Test_complete} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className=" d-flex justify-content-center">
                  <Link to={"/Home"} className="btn btn-c-google w-50">
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

export default TestComplete;
