import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Course&TestPages.css";
import CustomizedProgressBars from "../StudentProfilePages/Progress";
import bear from "../../images/Course&TestPages/bear.svg";
import QuestionEighteen_img from "../../images/Course&TestPages/QuestionEighteen-img.svg";
import cat_img from "../../images/Course&TestPages/cat.svg";
import bear_one from "../../images/Course&TestPages/bear_one.svg";
import speaker_icons from "../../images/Course&TestPages/speaker-icons.svg";
import transform_text from "../../images/Course&TestPages/transform-text.svg";
import color_mic from "../../images/Course&TestPages/color_mic.svg";

function QuestionThirteen() {
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
                </div>

                <div className="question-Thirteen-main">
                  <div className="question-eleven">
                    <div className="admin-img-eleven">
                      <div className="bear_one">
                        <img src={cat_img} className="img-fluid" alt="" />
                      </div>
                      <div className="petter-text">
                        <p className="petter-text-p">
                          Petter has moved to USA and is introducing himself to
                          his host...
                        </p>
                        <div>
                          <div className="Eleven-Toggle">
                            <div className="eleven-text-hello">
                              <p>Hello ! </p>
                              <p>I am petter.</p>
                            </div>
                            <div>
                              <button
                                id="audioToggleButton"
                                className="ppbutton"
                                onClick={handleAudioToggle}
                              >
                                <div className="Eleven-volume ">
                                  <i
                                    class="fa-solid fa-volume-high"
                                    src={QuestionEighteen_img}
                                  ></i>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="Eleven-Toggle-two">
                        <div>
                          <button
                            id="audioToggleButton"
                            className="ppbutton"
                            onClick={handleAudioToggle}
                          >
                            <div className="Eleven-volume ">
                              <i
                                class="fa-solid fa-volume-high"
                                src={QuestionEighteen_img}
                              ></i>
                            </div>
                          </button>
                        </div>
                        <div className="eleven-text-hello">
                          <p>Hello ! </p>
                          <p>I am petter.</p>
                        </div>
                        <div className="bear_one">
                          <img src={bear_one} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="eleven-four">
                  <div className="QuestionThirteen-img">
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
                    <div className="hello-thirteen">
                      <p>“Hello! I am cat.”</p>
                    </div>
                  </div>
                  <div className="page">
                    <div className="row">
                      <div className="col-3">
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
                            <div className="icon  right">cat </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="Orange">
                            <input
                              type="radio"
                              id="Orange"
                              name="alignment"
                              defaultValue="Orange"
                              className="peer radio"
                            />
                            <div className="icon">am</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="scarlet">
                            <input
                              type="radio"
                              id="scarlet"
                              name="alignment"
                              defaultValue="scarlet"
                              className="peer radio"
                            />
                            <div className="icon">hello!</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="wrapper">
                          <label htmlFor="Green">
                            <input
                              type="radio"
                              id="Green"
                              name="alignment"
                              defaultValue="Green"
                              className="peer radio"
                            />
                            <div className="icon">I</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Thirteen-input">
                    <input type="text" name="" id="" placeholder="Hello! " />
                    <Link to={'/QuestionFourteen'} className="arrow-top">
                      <i class="fa-solid fa-arrow-up"></i>
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

export default QuestionThirteen;
