import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";
import tameta_img from "../../images/Course&TestPages/tameta-img.svg";

function QuestionSix() {
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
                  <Link to={"/Home"}>
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
                  <h3>Match the image to word</h3>
                </div>
                <div>
                  <div className="page">
                    <div className="row Four-margin">
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionOne">
                            <input
                              type="radio"
                              id="QuestionOne"
                              name="alignment"
                              defaultValue="QuestionOne"
                              className="peer radio"
                              defaultChecked=""
                            />
                            <div className="six-tameta">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionTwo">
                            <input
                              type="radio"
                              id="QuestionTwo"
                              name="alignment"
                              defaultValue="QuestionTwo"
                              className="peer radio"
                            />
                            <div className="six-tameta">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionThree">
                            <input
                              type="radio"
                              id="QuestionThree"
                              name="alignment"
                              defaultValue="QuestionThree"
                              className="peer radio"
                            />
                            <div className="six-tameta">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionFour">
                            <input
                              type="radio"
                              id="QuestionFour"
                              name="alignment"
                              defaultValue="QuestionFour"
                              className="peer radio"
                            />
                            <div className="six-tameta">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionFive">
                            <input
                              type="radio"
                              id="QuestionFive"
                              name="alignment"
                              defaultValue="QuestionFive"
                              className="peer radio"
                              defaultChecked=""
                            />
                            <div className="icon">Orange</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionSix">
                            <input
                              type="radio"
                              id="QuestionSix"
                              name="alignment"
                              defaultValue="QuestionSix"
                              className="peer radio"
                            />
                            <div className="icon">Cheery</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionSeven">
                            <input
                              type="radio"
                              id="QuestionSeven"
                              name="alignment"
                              defaultValue="QuestionSeven"
                              className="peer radio"
                            />
                            <div className="icon  right">Tomato</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="QuestionEight">
                            <input
                              type="radio"
                              id="QuestionEight"
                              name="alignment"
                              defaultValue="QuestionEight"
                              className="peer radio"
                            />
                            <div className="icon">Cheery</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="justify-content-center d-flex mt-3">
                          <Link
                            to={"/QuestionSeven"}
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

export default QuestionSix;
