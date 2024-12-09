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
      <div className="container px-100">
        <div className="row">
          <div className="col-12">
            <div className="home-pills">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-leader-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-leader"
                    type="button"
                    role="tab"
                    aria-controls="nav-leader"
                    aria-selected="true"
                  >
                    <p>Leader</p>
                    <p>board</p>

                    <div className="home-img-one">
                      <img src={home_one} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-courses-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-courses"
                    type="button"
                    role="tab"
                    aria-controls="nav-courses"
                    aria-selected="false"
                  >
                    <p>Your</p>
                    <p>Courses</p>

                    <div className="home-img-one">
                      <img src={home_two} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-tests-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-tests"
                    type="button"
                    role="tab"
                    aria-controls="nav-tests"
                    aria-selected="false"
                  >
                    <p>Your</p>
                    <p>Tests</p>

                    <div className="home-img-one">
                      <img src={home_three} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-tests-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-live"
                    type="button"
                    role="tab"
                    aria-controls="nav-live"
                    aria-selected="false"
                  >
                    <p>Live</p>
                    <p> classes</p>
                    <div className="home-img-one">
                      <img src={home_four} className="img-fluid" alt="" />
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-premium-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-premium"
                    type="button"
                    role="tab"
                    aria-controls="nav-premium"
                    aria-selected="false"
                  >
                    <p>Premium</p>
                    <p>classes</p>
                    <div className="home-img-one">
                      <img src={home_five} className="img-fluid" alt="" />
                    </div>
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-leader"
                  role="tabpanel"
                  aria-labelledby="nav-leader-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-courses"
                  role="tabpanel"
                  aria-labelledby="nav-courses-tab"
                  tabindex="0"
                >
                  r
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-tests"
                  role="tabpanel"
                  aria-labelledby="nav-tests-tab"
                  tabindex="0"
                >
                  s
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-live"
                  role="tabpanel"
                  aria-labelledby="nav-live-tab"
                  tabindex="0"
                >
                  e
                </div>
                <div
                  class="tab-pane fade"
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
      <Sidebar />
    </>
  );
}

export default Home;
