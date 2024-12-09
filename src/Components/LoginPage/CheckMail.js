import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const CheckMail = () => {
  return (
    <>
      <Navbar />
      <div className="container py-100 px-150 my-100">
        <div className="check-mail">
          <div className="mail-icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <h1>Check your Email</h1>
          <p>
            We have sent a instruction to recover your password to your Email.
          </p>
          <div>
            <Link to={"/NewPassword"} className="btn btn-c-email w-100">
              Done
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckMail;
