import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./HelpAndSupportPages.css";
import successfully_img from "../../images/HelpAndSupportPages/successfully-img.svg";

function HelpAanSupport() {
  const buttonClick = () => {
    document.getElementById("real-file").click();
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="container-fluid px-0">
          <div className="row ">
            <div className="col-12">
              <div className="student-edit-main">
                <div className="student-profile-heading">
                  <Link to="">
                    <i class="fa-solid fa-left-long"></i>
                  </Link>
                  <h2>Help and support </h2>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="help-bg">
                <form action="">
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <div className="help-form">
                          <label className="form-label">Full name </label>
                          <input
                            type="text"
                            className="form-control login-form"
                            placeholder="Enter here..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="help-form">
                        <label className="form-label">Email</label>
                        <input
                          type="Email"
                          className="form-control login-form"
                          placeholder="Enter here..."
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="help-form">
                        <label className="form-label" for="textarea-help">
                          Your Issue <span>*</span>
                        </label>
                      </div>
                      <div>
                        <textarea
                          className="form-control"
                          id="textarea-help"
                          name="w3review"
                          rows="7"
                          cols="50"
                        ></textarea>
                      </div>
                      <div>
                        <div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-c-google w-50 m-auto mb-4"
                              onClick={buttonClick}
                            >
                              <input
                                type="file"
                                id="real-file"
                                style={{ display: "none" }} // Hide the actual file input
                              />
                              <div className="help-photo-icon">
                                <i class="fa-solid fa-plus"></i>
                                Add photo
                              </div>
                            </button>
                          </div>
                          <Link
                            to={"#"}
                            className="btn btn-c-email w-50 m-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#send"
                          >
                            Send
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="send"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div>
                <div className="logout-img">
                  <img src={successfully_img} className="img-fluid" alt="" />
                </div>
                <div className="log-out-pop ">
                  <h4>Your message has been received successfully</h4>
                  <div className="logout-button mt-3">
                    <button
                      className="btn btn-c-google w-50"
                      data-bs-dismiss="modal"
                    >
                      Done
                    </button>
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

export default HelpAanSupport;
