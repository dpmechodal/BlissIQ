import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import speaker_icons from "../../images/Course&TestPages/speaker-icons.svg";
import transform_text from "../../images/Course&TestPages/transform-text.svg";
import color_mic from "../../images/Course&TestPages/color_mic.svg";

function QuestionTwentySix() {
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
                </div>
              </div>
              <div className="Question-bg">
                <div className="question-heading">
                  <h5>Question no. 3</h5>
                </div>
                <div>
                  <div className="select-text select-text-margin">
                    <h6>Select the correct answers</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur non aspernatur aperiam accusamus explicabo
                      odio aliquid amet illo provident, voluptates nam
                      necessitatibus nesciunt obcaecati reprehenderit deserunt
                      dolorum eius culpa. Omnis, dolorem? Sunt cupiditate,
                      doloremque explicabo doloribus repellat laborum,
                      blanditiis, deserunt adipisci corrupti necessitatibus
                      voluptatum officia optio? Molestias fugiat beatae quaerat?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur non aspernatur aperiam accusamus explicabo
                      odio aliquid amet illo provident, voluptates nam
                      necessitatibus nesciunt obcaecati reprehenderit deserunt
                      dolorum eius culpa. Omnis, dolorem? Sunt cupiditate,
                      doloremque explicabo doloribus repellat laborum,
                      blanditiis, deserunt adipisci corrupti necessitatibus
                      voluptatum officia optio? Molestias fugiat beatae quaerat?
                    </p>
                  </div>
                </div>
              <div className="twenty-four-img">
                <Link to="">
                  <img src={speaker_icons} className="img-fluid" alt="" />
                </Link>
                <Link to={"/QuestionTwentySeven"} className="color_mic">
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

export default QuestionTwentySix;
