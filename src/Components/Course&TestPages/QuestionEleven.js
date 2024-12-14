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

function QuestionEleven() {
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
                  <div className="bear-img">
                    <img src={bear} className="img-fluid" alt="Bear" />
                  </div>
                </div>
              </div>
              <div className="Question-bg">
                <div className="question-heading">
                  <h5>Question no. 3</h5>
                </div>

                <div className="question-eleven-main">
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
                  <div className=" correct-heading">
                    <h4>Select the correct word</h4>
                  </div>
                  <div className="eleven-four-img">
                    <div className="btn btn-c-google w-100 button-Eleven">
                      <button
                        id="audioToggleButton"
                        className="ppbutton"
                        onClick={handleAudioToggle}
                      >
                        <div className="Eleven-volume ">
                          <span> Ola </span>
                          <i
                            class="fa-solid fa-volume-high"
                            src={QuestionEighteen_img}
                          ></i>
                        </div>
                      </button>
                    </div>
                    <div className="btn btn-c-google w-100  button-Eleven">
                      <Link to={'/QuestionTwelve'}
                        id="audioToggleButton"
                        className="ppbutton"
                        // onClick={handleAudioToggle}
                      >
                        <div className="Eleven-volume ">
                          <span> Hello </span>
                          <i
                            class="fa-solid fa-volume-high"
                            src={QuestionEighteen_img}
                          ></i>
                        </div>
                      </Link>
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

export default QuestionEleven;
