import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";
import QuestionEighteen_img from "../../images/Course&TestPages/QuestionEighteen-img.svg";
import tameta_img from "../../images/Course&TestPages/tameta-img.svg";

function QuestionTeen() {
  const [audio] = useState(new Audio("/audio/song.mp3")); // Create an audio instance
  const [isPlaying, setIsPlaying] = useState(false); // Track playing state

  const handleAudioToggle = () => {
    if (isPlaying) {
      audio.pause(); // Pause the audio
      setIsPlaying(false);
    } else {
      audio.play(); // Play the audio
      setIsPlaying(true);
    }

    // Ensure the state updates when audio ends
    audio.onended = () => setIsPlaying(false);
  };
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
                  <h3>Which is the correct image ?</h3>
                  <div className="question-main">
                    <div className="question-teen-text">
                      <h3>Tomato</h3>
                    </div>
                    <div className="QuestionTeen-img">
                      <button
                        id="audioToggleButton"
                        className="ppbutton"
                        onClick={handleAudioToggle}
                      >
                        <img
                          src={QuestionEighteen_img}
                          className="img-fluid"
                          alt={isPlaying ? "Stop audio" : "Play audio"}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
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
                            <div className="six-tameta icon">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
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
                            <div className="six-tameta right">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
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
                            <div className="six-tameta icon">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
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
                            <div className="six-tameta icon">
                              <img
                                src={tameta_img}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="justify-content-center d-flex mt-3">
                          <Link
                            to={"/QuestionEleven"}
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

export default QuestionTeen;
