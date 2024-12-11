import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import cart from "../../images/DashboardPages/cart-icon.svg";
import ellipse from "../../images/DashboardPages/Ellipse.svg";
import "./DashboardPages.css";

function PremiumClassesDetails() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="student-edit-main">
        <div className="student-profile-heading">
            <Link to={"/Home"}>
            <   i class="fa-solid fa-left-long"></i>
            </Link>
            <h2>Premium classes</h2>
        </div>
        {/* <div className="edit-student">
            <Link to={"/Home"}>
            <i class="fa-solid fa-pen-to-square"></i>
            </Link>
        </div> */}
        </div>
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-12">                    
                    <Link to={'#'}>
                        <div className="prim-course">
                            <div className="star-prim">
                                <p>Premium course</p>
                                <h6><i class="fa-solid fa-star"></i> 5 Star</h6>
                            </div>
                            <div className="design-illustration">
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="design-illustration-name">
                                    <h4><i>design & Illustration   </i></h4>
                                    <p><i>By Aftab Qureshi</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="price-down">
                            <div className="time-date-up">
                                <h5 className="mb-0"><i>Price : <span>₹ 200/-</span></i></h5>
                            </div>
                            <div className="atte-up">
                                <p><i>Downloaded</i></p>
                                <div className="user-ten">                                    
                                    <img src={ellipse} className="img-fluid" alt="" />
                                    <img src={ellipse} className="img-fluid" alt="" />
                                    <img src={ellipse} className="img-fluid" alt="" />
                                    <img src={ellipse} className="img-fluid" alt="" />
                                    <h6><i>+10</i></h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="course-all d-block">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit </p>
                        <div className="mt-4">
                            <Link to={"/Login"} className="btn btn-c-email w-75 m-auto">
                                <span>
                                <img src={cart} alt="" className="img-fluid" />
                                </span>
                                Buy design & Illustration    
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

export default PremiumClassesDetails;
