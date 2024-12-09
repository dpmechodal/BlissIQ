import React from "react";
import "./SignUpPage.css";
import Navbar from "../Navbar";
import profile from "../../images/SignUpPage/profile-img.svg";
import { Link } from "react-router-dom";

function AddProfile() {
  return (
    <>
      <Navbar />
      <div className="container py-100 pt-0">
        <div className="get-start-profile">
          <div className="row align-items-center">
            <div className="col-12">
              <div>
                <div className="profile-img">
                  <img src={profile} className="img-fluid" alt="" />

                  <p>
                    {" "}
                    <Link to={"/Avatar"}>
                      Add your profile avatar <span>*</span>
                    </Link>
                  </p>
                </div>
                <div className="profile-heading">
                  <h2>Add profile</h2>
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
                    <div className="">
                      <label className="form-label">Full name </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="Enter here..."
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="">
                      <label className="form-label">School </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="Enter here..."
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="">
                      <label className="form-label">Email </label>
                      <input
                        type="Email"
                        className="form-control sign-up-form"
                        placeholder="Enter here..."
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="">
                      <label className="form-label">Stander </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="Enter here..."
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="">
                      <label className="form-label">Phone no. </label>
                      <input
                        type="Number"
                        className="form-control sign-up-form"
                        placeholder="Enter here..."
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="">
                      <label className="form-label">Board </label>
                      <input
                        type="text"
                        className="form-control sign-up-form"
                        placeholder="Enter here..."
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="">
                      <Link to={"/Avatar"} className="btn btn-s-email w-100">
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

export default AddProfile;
