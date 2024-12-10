import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import home_one from "../../images/DashboardPages/home-one.svg";
import home_two from "../../images/DashboardPages/home-two.svg";
import home_three from "../../images/DashboardPages/home-three.svg";
import home_four from "../../images/DashboardPages/home-four.svg";
import home_five from "../../images/DashboardPages/home-five.svg";
import "./DashboardPages.css";

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <div className="home-pills h-main-tab">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-leader-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-leader"
                    type="button"
                    role="tab"
                    aria-controls="nav-leader"
                    aria-selected="true"
                  >
                    <p>Leader board</p>

                    <div className="home-img-one">
                      <img src={home_one} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-courses-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-courses"
                    type="button"
                    role="tab"
                    aria-controls="nav-courses"
                    aria-selected="false"
                  >
                    <p>Your Courses</p>

                    <div className="home-img-one">
                      <img src={home_two} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-tests-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-tests"
                    type="button"
                    role="tab"
                    aria-controls="nav-tests"
                    aria-selected="false"
                  >
                    <p>Your Tests</p>

                    <div className="home-img-one">
                      <img src={home_three} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-tests-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-live"
                    type="button"
                    role="tab"
                    aria-controls="nav-live"
                    aria-selected="false"
                  >
                    <p>Live classes</p>
                    <div className="home-img-one">
                      <img src={home_four} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-premium-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-premium"
                    type="button"
                    role="tab"
                    aria-controls="nav-premium"
                    aria-selected="false"
                  >
                    <p>Premium classes</p>
                    <div className="home-img-one">
                      <img src={home_five} className="img-fluid" alt="" />
                    </div>
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-leader"
                  role="tabpanel"
                  aria-labelledby="nav-leader-tab"
                  tabindex="0"
                >
                  ssss
                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-courses"
                  role="tabpanel"
                  aria-labelledby="nav-courses-tab"
                  tabindex="0"
                >
                  r
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-tests"
                  role="tabpanel"
                  aria-labelledby="nav-tests-tab"
                  tabindex="0"
                >
                  s
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-live"
                  role="tabpanel"
                  aria-labelledby="nav-live-tab"
                  tabindex="0"
                >
                  e
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-premium"
                  role="tabpanel"
                  aria-labelledby="nav-premium-tab"
                  tabindex="0"
                >
                  y
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

export default Home;
