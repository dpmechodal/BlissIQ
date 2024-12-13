import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";

function QuestionEight() {
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
                <CustomizedProgressBars />
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
                  <h3>Scarlet colour is the Tomato. </h3>
                </div>

                <div>
                  <div className="select-text">
                    <p>Identify the correct sentence </p>
                  </div>

                  <div className="page">
                    <div className="row">
                      <div className="col-6">
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
                            <div className="icon  right">
                              Scarlet is the colour of a Tomato.
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="wrapper">
                          <label htmlFor="Orange">
                            <input
                              type="radio"
                              id="Orange"
                              name="alignment"
                              defaultValue="Orange"
                              className="peer radio"
                            />
                            <div className="icon">
                              Scarlet is the colour of a Tomato.
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="wrapper">
                          <label htmlFor="scarlet">
                            <input
                              type="radio"
                              id="scarlet"
                              name="alignment"
                              defaultValue="scarlet"
                              className="peer radio"
                            />
                            <div className="icon">
                              Scarlet is the colour of a Tomato.
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="wrapper">
                          <label htmlFor="Green">
                            <input
                              type="radio"
                              id="Green"
                              name="alignment"
                              defaultValue="Green"
                              className="peer radio"
                            />
                            <div className="icon">
                              Scarlet is the colour of a Tomato.
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="justify-content-center d-flex mt-3">
                          <Link
                            to={"/QuestionSixteen"}
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

export default QuestionEight;
