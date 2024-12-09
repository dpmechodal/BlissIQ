import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/LoginPage/login.svg";
import Navbar from "../Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container py-100 px-150">
        <div className="get-start">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 col-12">
              <div className="email-login-img">
                <img src={login} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="email-login-text">
                <h1>Hello !</h1>
                <p>
                  Enter your correct email & Password to login into your account
                  account
                </p>
                <form className="login-form">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
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
                  <div className="forgot mb-3">
                    <Link to={"/ForgotPassword"}>Forgot Password?</Link>
                  </div>
                  <div className="mb-3">
                    <Link to={"#"} className="btn btn-c-email w-100">
                      Login
                    </Link>
                  </div>
                </form>
                <div className="dont-account">
                  <p>
                    Don’t have a account? <Link to={"/SignUp"}>Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
