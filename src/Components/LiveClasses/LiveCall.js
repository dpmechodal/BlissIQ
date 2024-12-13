import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./LiveClass.css";
import livecall from "../../images/LiveClass/Live-call.svg";
import user from "../../images/LiveClass/user.svg";
import sidechat from "../../images/LiveClass/side-chat.svg";

function QuestionTrue() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="call-with-chat">
        <div className="full-call">
          <img src={livecall} alt="" className="img-fluid" />
          <div className="call-inside">
            <div className="container-fluid">
              <div className="call-live">
                <div className="call-three-icon">
                  <div className="call-icon">
                    <Link to={"#"}>
                      <i className="fa-regular fa-circle-dot"></i>
                    </Link>
                  </div>
                  <div className="call-icon">
                    <Link to={"#"}>
                      <i className="fa-solid fa-microphone"></i>
                    </Link>
                  </div>
                  <div className="call-icon">
                    <Link to={"#"}>
                      <i className="fa-solid fa-camera"></i>
                    </Link>
                  </div>
                </div>
                <div className="live-user">
                  <div className="total-live">
                    <p>
                      <i className="fa-solid fa-users"></i>
                      <span>45</span>
                    </p>
                  </div>
                  <div className="red-live">
                    <p>LIVE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid sender-img">
              <div className="send-call">
                <img src={user} className="img-fluid" alt="" />
              </div>
              <div className={`side-chat ${isChatOpen ? "rotated" : ""}`}>
                <Link to={"#"} onClick={toggleChat}>
                  <img src={sidechat} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`live-chat ${isChatOpen ? "open" : ""}`}>
          <div className="user-join-chat">
            <div className="user-join">
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span>Joined</span></h5>
              </div>
              <div className="aftab-join">
                <img src={user} className="img-fluid" alt="" />
                <h5>Aftab Qureshi : <span className="ans">Answer is option 2</span></h5>
              </div>
            </div>
            <div className="user-typing">
              <input type="search" className="form-control" placeholder="Type here..." />
              <Link to={"#"} ><i class="fa-solid fa-arrow-up"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionTrue;
