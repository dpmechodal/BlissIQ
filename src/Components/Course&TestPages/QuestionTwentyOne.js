import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";

function QuestionTwentyOne() {
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
              <div className="bear-bars">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <div className="bear-text">
                  <p>1/25</p>
                  <div className="bear-img">
                    <img src={bear} className="img-fluid" alt="Bear" />
                  </div>
                </div>
              </div>
              <div className="Question-bg">
                <div className="question-heading">
                  <h5>Question no. 3</h5>
                  <h3>Re-arrange in the correct order</h3>
                </div>
                <div>
                  <div>
                    <div className="twentyOne">
                      <div className="wrapper">
                        <label htmlFor="Red">
                          <input
                            type="radio"
                            id="Red"
                            name="alignment"
                            defaultValue="Red"
                            className="peer radio"
                            defaultChecked=""
                          />
                          <div className="icon  right twentyOne-icon">3</div>
                        </label>
                      </div>
                      <div className="wrapper">
                        <label htmlFor="Orange">
                          <input
                            type="radio"
                            id="Orange"
                            name="alignment"
                            defaultValue="Orange"
                            className="peer radio"
                          />
                          <div className="icon twentyOne-icon">2</div>
                        </label>
                      </div>
                      <div className="wrapper">
                        <label htmlFor="scarlet">
                          <input
                            type="radio"
                            id="scarlet"
                            name="alignment"
                            defaultValue="scarlet"
                            className="peer radio"
                          />
                          <div className="icon twentyOne-icon">1</div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-sixteen-main twentyOne-button">
                    <div className="question-sixteen-border"></div>
                    <div className="question-sixteen-border"></div>
                    <div className="question-sixteen-border"></div>
                  </div>
                  <div className="justify-content-center d-flex mt-3">
                    <Link
                      to={"/QuestionTwentyTwo"}
                      className="btn btn-s-email w-50"
                    >
                      आगे बढ़ो
                    </Link>
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

export default QuestionTwentyOne;
