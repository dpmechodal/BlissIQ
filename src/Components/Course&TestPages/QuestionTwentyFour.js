import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import QuestionTwentyTwo_bg from "../../images/Course&TestPages/QuestionTwentyTwo-bg.svg";
import speaker_icons from "../../images/Course&TestPages/speaker-icons.svg";
import transform_text from "../../images/Course&TestPages/transform-text.svg";
import color_mic from "../../images/Course&TestPages/color_mic.svg";

function QuestionTwentyFour() {
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
                  <h2>Story - Alphabets - 1 </h2>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="QuestionTwentyTwo_img">
                <img src={QuestionTwentyTwo_bg} className="img-fluid" alt="" />
              </div>
              <div className="QuestionTwentyTwo-bg">
                <div className="QuestionTwentyTwo-heading">
                  <h3> The Boy Who Cried Wolf</h3>
                  <p className="QuestionTwentyFour-p">
                    There once was a
                    <span className="twenty-two-color">who</span> grew bored
                    while watching over the village sheep.
                  </p>
                </div>
              <div className="twenty-four-img">
                <Link to="">
                  <img src={speaker_icons} className="img-fluid" alt="" />
                </Link>
                <Link to={"/QuestionTwentyFive"} className="color_mic">
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
      </div>
    </>
  );
}

export default QuestionTwentyFour;
