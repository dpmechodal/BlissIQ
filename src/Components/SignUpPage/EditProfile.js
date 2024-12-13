import React from "react";
import "./SignUpPage.css";
import Navbar from "../Navbar";
import Avatar_one from "../../images/SignUpPage/Avatar1.svg";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <>
      <Navbar />
      <div className="container py-100 pt-4">
        <div className="get-start-profile">
          <div className="row align-items-center">
            <div className="col-12">
              <div>
                <div className="avatar-center">
                  <Link to={'/Avatar'} className="Avatar_one mb-3">
                    <img src={Avatar_one} className="img-fluid" alt="" />
                  </Link>
                  <div>
                    <p>
                      <Link to="/Avatar">
                        Add your profile picture <span>*</span>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="profile-heading">
                  <h2>Edit profile</h2>
                  <p>
                    Create your profile so that you will be known & notified on
                    time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <form action="" className="login-form">
                <div className="row">
                  <div className="col-md-6 col-12 mb-3">
                      <label className="form-label">Full name </label>
                    <div className="profile-edit">
                      <input
                        type="text"
                        className="form-control login-form"
                        placeholder="Nupur kadam"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                      <label className="form-label">School </label>
                    <div className="profile-edit">
                      <input
                        type="text"
                        className="form-control login-form"
                        placeholder="St. Andrews High School"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                      <label className="form-label">Email </label>
                    <div className="profile-edit">
                      <input
                        type="Email"
                        className="form-control login-form"
                        placeholder="nkn@gmail.com"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                      <label className="form-label">Stander </label>
                    <div className="profile-edit">
                      <input
                        type="text"
                        className="form-control login-form"
                        placeholder="KG"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                      <label className="form-label">Phone no. </label>
                    <div className="profile-edit">
                      <input
                        type="Number"
                        className="form-control login-form"
                        placeholder="1234567890"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                      <label className="form-label">Board </label>
                    <div className="profile-edit">
                      <input
                        type="text"
                        className="form-control login-form"
                        placeholder="SSC"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="submit-profile">
                      <Link to={"/StudentProfile"} className="btn btn-s-email w-100">
                        Continue
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
