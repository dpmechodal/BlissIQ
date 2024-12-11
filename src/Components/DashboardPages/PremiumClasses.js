import React from "react";
import { Link } from "react-router-dom";
import c1 from "../../images/DashboardPages/course-one.svg";
import "./DashboardPages.css";

function PremiumClasses() {
  return (
    <>
        <div className="course-box">
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
            <Link to={'/PremiumClasses'} className="course-one pre-class">
                <img src={c1} className="img-fluid" alt="" />
                <p>Foundations of English</p>
                <div className="alpha-tick">
                    <h5>Alphabets - 1</h5>
                    {/* <i class="fa-solid fa-circle-check"></i> */}
                </div>
                <h6>Price : <span>₹ 200/-</span></h6>
            </Link>
        </div>
    </>
  );
}

export default PremiumClasses;
