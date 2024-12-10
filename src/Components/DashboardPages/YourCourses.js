import React from "react";
import { Link } from "react-router-dom";
import c1 from "../../images/DashboardPages/course-one.svg";
import "./DashboardPages.css";

function YourCourses() {
  return (
    <>
        <div className="course-box">
            <Link to={'#'} className="course-one">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
            </Link>
            <Link to={'#'} className="course-one">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
            </Link>
            <Link to={'#'} className="course-one">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
            </Link>
            <Link to={'#'} className="course-one">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
            </Link>
        </div>
    </>
  );
}

export default YourCourses;
