import React from "react";
import "./SignUpPage.css";
import Navbar from "../Navbar";
import Avatar_one from "../../images/SignUpPage/Avatar1.svg";
import Avatar_two from "../../images/SignUpPage/akitainu.svg";
import Avatar_three from "../../images/SignUpPage/bat.svg";
import Avatar_four from "../../images/SignUpPage/cat.svg";
import Avatar_five from "../../images/SignUpPage/chameleon.svg";
import Avatar_six from "../../images/SignUpPage/duck.svg";
import Avatar_seven from "../../images/SignUpPage/english-cocker.svg";
import Avatar_eight from "../../images/SignUpPage/gorilla.svg";
import Avatar_nine from "../../images/SignUpPage/gorilla2.svg";
import Avatar_ten from "../../images/SignUpPage/red-wolf.svg";
import Avatar_eleven from "../../images/SignUpPage/tiger.svg";
import { Link } from "react-router-dom";

function Avatar() {
  return (
    <>
      <Navbar />
      <div className="container py-100 px-150">
        <div className="get-start-avatar">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="avatar-center">
                <div className="Avatar_one mb-3">
                  <img src={Avatar_one} className="img-fluid" alt="" />
                </div>
                <div>
                  <p>
                    Choose your avatar <span>*</span>
                  </p>
                </div>
              </div>
              <div className="avatar-grid">
                <div className="avatar-img">
                  <img src={Avatar_one} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_two} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_three} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_four} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_five} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_six} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_seven} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_eight} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_nine} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_ten} className="img-fluid" alt="" />
                </div>
                <div className="avatar-one">
                  <img src={Avatar_eleven} className="img-fluid" alt="" />
                </div>
              </div>
              <div>
                <div className="avatar-button">
                  <Link
                    to={"/Home"}
                    className="btn btn-s-email w-100 mt-3"
                  >
                    Continue
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

export default Avatar;
