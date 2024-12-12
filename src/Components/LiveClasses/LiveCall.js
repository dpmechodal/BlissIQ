import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./LiveClass.css";
import livecall from "../../images/LiveClass/Live-call.svg";

function QuestionTrue() {
  return (
    <>
      <Navbar />
      <div className="full-call">        
        <img src={livecall} alt="" className="img-fluid" />
        <div className="call-inside">
          <div className="container-fluid">
            <div className="call-live">
              <div className="call-three-icon">
                <div className="call-icon">
                  <Link to={"#"}><i class="fa-regular fa-circle-dot"></i></Link>
                </div>
                <div className="call-icon">
                  <Link to={"#"}><i class="fa-solid fa-microphone"></i></Link>
                </div>
                <div className="call-icon">
                  <Link to={"#"}><i class="fa-solid fa-camera"></i></Link>
                </div>
              </div>
              <div className="live-user">
                <div className="total-live">
                  <p>
                    <i class="fa-solid fa-users"></i>
                    <span>45</span>
                  </p>
                </div>
                <div className="red-live">
                  <p>LIVE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="call-live">
              <div className="call-three-icon">
                <div className="call-icon">
                  <Link to={"#"}><i class="fa-regular fa-circle-dot"></i></Link>
                </div>
                <div className="call-icon">
                  <Link to={"#"}><i class="fa-solid fa-microphone"></i></Link>
                </div>
                <div className="call-icon">
                  <Link to={"#"}><i class="fa-solid fa-camera"></i></Link>
                </div>
              </div>
              <div className="live-user">
                <div className="total-live">
                  <p>
                    <i class="fa-solid fa-users"></i>
                    <span>45</span>
                  </p>
                </div>
                <div className="red-live">
                  <p>LIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionTrue;
