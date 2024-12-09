import React from "react";
import "./SignUpPage.css";
import Navbar from "../Navbar";
import Avatar_one from "../../images/SignUpPage/Avatar1.svg";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <>
      <Navbar />
      <div className="container py-100 pt-0">
        <div className="get-start-profile">
          <div className="row align-items-center">
            <div className="col-12">
              <div>
                <div className="avatar-center">
                  <div className="Avatar_one">
                    <img src={Avatar_one} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <p>
                      <Link to="">
                        {" "}
                        Choose your avatar <span>*</span>
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
              <form action="" className="sign-up-form">
                <div className="row">
                  <div className="col-6">
                    <div className="profile-edit">
                      <label className="form-label">Full name </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="Nupur kadam"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-edit">
                      <label className="form-label">School </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="St. Andrews High School"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-edit">
                      <label className="form-label">Email </label>
                      <input
                        type="Email"
                        className="form-control sign-up-form"
                        placeholder="nkn@gmail.com"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-edit">
                      <label className="form-label">Stander </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="KG"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-edit">
                      <label className="form-label">Phone no. </label>
                      <input
                        type="Number"
                        className="form-control sign-up-form"
                        placeholder="1234567890"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-edit">
                      <label className="form-label">Board </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="SSC"
                      />
                      <div className="pen-edit">
                        <i className="fa-solid fa-pen"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="submit-profile">
                      <Link to={"/Home"} className="btn btn-s-email w-100">
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
