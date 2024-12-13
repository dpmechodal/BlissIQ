import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="container py-100 px-150">
        <div className="get-start-singUp">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="sign-uo-heading">
                <h2>Create your account</h2>
                <p>enter your new password sent to your Email</p>
              </div>
              <div>
                <form className="login-form">
                  <div className="mb-3">
                    <label className="form-label">Full name </label>
                    <input
                      type="text"
                      className="form-control login-form"
                      placeholder="Enter here..."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="Email"
                      className="form-control login-form"
                      placeholder="Enter here..."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control login-form"
                      placeholder="Enter here..."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Re-enter password</label>
                    <input
                      type="password"
                      className="form-control login-form"
                      placeholder="Enter here..."
                    />
                  </div>
                  <div>
                    <Link to={"/VerifyEmail"} className="btn btn-s-email w-100">
                      Create an account
                    </Link>
                  </div>
                </form>
                <div className="account-login">
                  <span>
                    Already have an account ? <Link to={"/Login"}> Login</Link>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
