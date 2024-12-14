import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";
import QuestionThree_img from "../../images/Course&TestPages/QuestionThree-img.svg";

function QuestionSeven() {
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
                  <h3>Scarlet is the colour of a Tomato. </h3>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="QuestionThree_img">
                    <img src={QuestionThree_img} className="img-fluid" alt="" />
                  </div>
                </div>
                <div>
                  <div className="select-text">
                    <p>Select the correct answers</p>
                  </div>

                  <div className="page">
                    <div className="row">
                      <div className="col-6">
                        <div className="wrapper">
                          <label htmlFor="True">
                            <input
                              type="radio"
                              id="True"
                              name="alignment"
                              defaultValue="True"
                              className="peer radio"
                              defaultChecked=""
                            />
                            <div className="icon  right">True</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="wrapper">
                          <label htmlFor="False">
                            <input
                              type="radio"
                              id="False"
                              name="alignment"
                              defaultValue="False"
                              className="peer radio"
                            />
                            <div className="icon">False</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="justify-content-center d-flex mt-3">
                          <Link
                            to={"/QuestionEight"}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionSeven;
