import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";
import speaker_icons from "../../images/Course&TestPages/speaker-icons.svg";
import transform_text from "../../images/Course&TestPages/transform-text.svg";
import color_mic from "../../images/Course&TestPages/color_mic.svg";

function QuestionTwentyFive() {
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
                </div>
              </div>
              <div className="Question-bg">
                <div className="question-heading">
                  <h5>Question no. 3</h5>
                </div>
                <div>
                  <div className="select-text ">
                    <h6>Select the correct answers</h6>
                  </div>
                </div>
                <div className="twentyFive-hello">
                  <h5>Hello!</h5>
                </div>
              </div>
              <div className="twenty-four-img">
                <Link to="">
                  <img src={speaker_icons} className="img-fluid" alt="" />
                </Link>
                <Link to={"/QuestionTwentySix"} className="color_mic">
                  <img src={color_mic} className="img-fluid" alt="" />
                </Link>
                <Link to="">
                  <img src={transform_text} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionTwentyFive;
