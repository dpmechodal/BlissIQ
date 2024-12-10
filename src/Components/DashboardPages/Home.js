import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import YourCourses from "../DashboardPages/YourCourses";
import YourTests from "../DashboardPages/YourTests";
import LiveClasses from "../DashboardPages/LiveClasses";
import home_one from "../../images/DashboardPages/home-one.svg";
import home_two from "../../images/DashboardPages/home-two.svg";
import home_three from "../../images/DashboardPages/home-three.svg";
import home_four from "../../images/DashboardPages/home-four.svg";
import home_five from "../../images/DashboardPages/home-five.svg";
import Avatar from "../../images/DashboardPages/Avatar.svg";
import emoji_crown from "../../images/DashboardPages/emoji_crown.svg";
import uim_calender from "../../images/DashboardPages/uim_calender.svg";
import click from "../../images/DashboardPages/mdi_tick-decagram.svg";
import trophy from "../../images/DashboardPages/noto_trophy.svg";
import ellipse from "../../images/DashboardPages/Ellipse.svg";
import bgfrank from "../../images/DashboardPages/bg-forst-rank.svg";
import bgnumber from "../../images/DashboardPages/bg-num.svg";
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
                  tabindex="0">
                  <div className="row">
                    <div className="col-xl-4 col-md-6 col-12 border-right">
                      <div className="today-weekly-alltime">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-Today-tab" data-bs-toggle="pill" data-bs-target="#pills-Today" type="button" role="tab" aria-controls="pills-Today" aria-selected="true">Today</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-Weekly-tab" data-bs-toggle="pill" data-bs-target="#pills-Weekly" type="button" role="tab" aria-controls="pills-Weekly" aria-selected="false">Weekly</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-Alltime-tab" data-bs-toggle="pill" data-bs-target="#pills-Alltime" type="button" role="tab" aria-controls="pills-Alltime" aria-selected="false">All time</button>
                          </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-Today" role="tabpanel" aria-labelledby="pills-Today-tab">
                            <div className="rank-box">
                              <div className="rank-bg-img">
                                <img src={bgfrank} className="img-fluid" alt="" />
                              </div>
                              <div>
                                <div className="first-rank two-rank">
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>2</h6>
                                </div>
                              </div>
                              <div>
                                <div className="first-rank one-rank">
                                  <div className="f-rank-emoji">
                                    <img src={emoji_crown} className="img-fluid" alt="" />
                                  </div>
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img first-rank-bg">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>1</h6>
                                </div>
                              </div>
                              <div>
                                <div className="first-rank three-rank">
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img third-rank-bg">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>3</h6>
                                </div>
                              </div>
                            </div>
                            <div className="last-rank">
                              <div className="four-rank">
                                <h5>4</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                              <div className="four-rank">
                                <h5>5</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                              <div className="four-rank">
                                <h5>6</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-Weekly" role="tabpanel" aria-labelledby="pills-Weekly-tab">
                            <div className="rank-box">
                              <div className="rank-bg-img">
                                <img src={bgfrank} className="img-fluid" alt="" />
                              </div>
                              <div>
                                <div className="first-rank two-rank">
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>2</h6>
                                </div>
                              </div>
                              <div>
                                <div className="first-rank one-rank">
                                  <div className="f-rank-emoji">
                                    <img src={emoji_crown} className="img-fluid" alt="" />
                                  </div>
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img first-rank-bg">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>1</h6>
                                </div>
                              </div>
                              <div>
                                <div className="first-rank three-rank">
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img third-rank-bg">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>3</h6>
                                </div>
                              </div>
                            </div>
                            <div className="last-rank">
                              <div className="four-rank">
                                <h5>4</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                              <div className="four-rank">
                                <h5>5</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                              <div className="four-rank">
                                <h5>6</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-Alltime" role="tabpanel" aria-labelledby="pills-Alltime-tab">
                            <div className="rank-box">
                              <div className="rank-bg-img">
                                <img src={bgfrank} className="img-fluid" alt="" />
                              </div>
                              <div>
                                <div className="first-rank two-rank">
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>2</h6>
                                </div>
                              </div>
                              <div>
                                <div className="first-rank one-rank">
                                  <div className="f-rank-emoji">
                                    <img src={emoji_crown} className="img-fluid" alt="" />
                                  </div>
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img first-rank-bg">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>1</h6>
                                </div>
                              </div>
                              <div>
                                <div className="first-rank three-rank">
                                  <div className="first-rank-user">
                                    <img src={ellipse} className="img-fluid" alt="" />
                                  </div>
                                  <p>Aftab Qureshi</p>
                                  <h6>400 Points</h6>
                                </div>
                                <div className="sec-bg-img third-rank-bg">
                                  <img src={bgnumber} className="img-fluid" alt="" />
                                  <h6>3</h6>
                                </div>
                              </div>
                            </div>
                            <div className="last-rank">
                              <div className="four-rank">
                                <h5>4</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                              <div className="four-rank">
                                <h5>5</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                              <div className="four-rank">
                                <h5>6</h5>
                                <img src={ellipse} className="img-fluid" alt="" />
                                <div className="four-rank-name">
                                  <h4>Nupur kadam</h4>
                                  <p>124 Points</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-md-6 col-12">
                      <div className="course-all">
                        <h4>Your courses</h4>
                        <Link to={'#'} className="btn-view-all">View all</Link>
                      </div>
                      <YourCourses/>
                      <div className="course-all">
                        <h4>Your tests</h4>
                        <Link to={'#'} className="btn-view-all">View all</Link>
                      </div>
                      <YourTests/>
                      <div className="course-all">
                        <h4>Live classes</h4>
                        <Link to={'#'} className="btn-view-all">View all</Link>
                      </div>
                      <LiveClasses/>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-courses"
                  role="tabpanel"
                  aria-labelledby="nav-courses-tab"
                  tabindex="0"
                >
                <div className="row">
                  <div className="col-xl-4 col-md-6 col-12 border-right">
                    <div className="user-point">
                      <div className="user-img-name">
                        <div className="user-img">
                          <img src={Avatar} className="img-fluid" alt="" />
                        </div>
                        <div className="user-name">
                          <h4>Nupur kadam</h4>
                          <p>Level <span>10</span></p>
                        </div>
                      </div>
                      <div className="total-point">
                        <p>400 Points</p>
                        <img src={emoji_crown} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="weekly-attendance">
                      <div className="date-ico">
                        <img src={uim_calender} className="img-fluid" alt="" />
                      </div>
                      <h2>Weekly Attendance</h2>
                      <p>2 Days left</p>
                      <div className="mon-to-sun">
                        <div className="mon-sun">
                          <p>Mon</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Tue</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Wed</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Thu</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Fri</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Sat</p>
                          <div className="click-done">
                            {/* <img src={click} className="img-fluid" alt="" /> */}
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Sun</p>
                          <div className="click-done">
                            {/* <img src={click} className="img-fluid" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="pass-user">
                        <img src={trophy} className="img-fluid" alt="" />
                        <p>You’ve passed 89% of users</p>
                      </div>
                    </div>
                    <div className="live-class">
                      <div className="live-view">
                        <p>Live class performance</p>
                        <Link to={'#'} className="btn-view">View</Link>
                      </div>
                      <div className="user-attend">
                        <img src={ellipse} className="img-fluid" alt="" />
                        <div className="attend-text">
                          <h3>145+</h3>
                          <p>Live classes Attended by you</p>
                        </div>
                      </div>
                    </div>
                    <div className="pr-assign">
                      <h4>89% </h4>
                      <p>of your assignments are submitted on time</p>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-6 col-12">
                    <div className="course-all">
                      <h4>Your courses</h4>
                      <Link to={'#'} className="btn-view-all">View all</Link>
                    </div>
                    <YourCourses/>
                    <div className="course-all">
                      <h4>Your tests</h4>
                      <Link to={'#'} className="btn-view-all">View all</Link>
                    </div>
                    <YourTests/>
                    <div className="course-all">
                      <h4>Live classes</h4>
                      <Link to={'#'} className="btn-view-all">View all</Link>
                    </div>
                    <LiveClasses/>
                  </div>
                </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-tests"
                  role="tabpanel"
                  aria-labelledby="nav-tests-tab"
                  tabindex="0"
                >
                <div className="row">
                  <div className="col-xl-4 col-md-6 col-12 border-right">
                    <div className="user-point">
                      <div className="user-img-name">
                        <div className="user-img">
                          <img src={Avatar} className="img-fluid" alt="" />
                        </div>
                        <div className="user-name">
                          <h4>Nupur kadam</h4>
                          <p>Level <span>10</span></p>
                        </div>
                      </div>
                      <div className="total-point">
                        <p>400 Points</p>
                        <img src={emoji_crown} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="weekly-attendance">
                      <div className="date-ico">
                        <img src={uim_calender} className="img-fluid" alt="" />
                      </div>
                      <h2>Weekly Attendance</h2>
                      <p>2 Days left</p>
                      <div className="mon-to-sun">
                        <div className="mon-sun">
                          <p>Mon</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Tue</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Wed</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Thu</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Fri</p>
                          <div className="click-done">
                            <img src={click} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Sat</p>
                          <div className="click-done">
                            {/* <img src={click} className="img-fluid" alt="" /> */}
                          </div>
                        </div>
                        <div className="mon-sun">
                          <p>Sun</p>
                          <div className="click-done">
                            {/* <img src={click} className="img-fluid" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="pass-user">
                        <img src={trophy} className="img-fluid" alt="" />
                        <p>You’ve passed 89% of users</p>
                      </div>
                    </div>
                    <div className="live-class">
                      <div className="live-view">
                        <p>Live class performance</p>
                        <Link to={'#'} className="btn-view">View</Link>
                      </div>
                      <div className="user-attend">
                        <img src={ellipse} className="img-fluid" alt="" />
                        <div className="attend-text">
                          <h3>145+</h3>
                          <p>Live classes Attended by you</p>
                        </div>
                      </div>
                    </div>
                    <div className="pr-assign">
                      <h4>89% </h4>
                      <p>of your assignments are submitted on time</p>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-6 col-12">
                    <div className="course-all">
                      <h4>Your courses</h4>
                      <Link to={'#'} className="btn-view-all">View all</Link>
                    </div>
                    <YourCourses/>
                    <div className="course-all">
                      <h4>Your tests</h4>
                      <Link to={'#'} className="btn-view-all">View all</Link>
                    </div>
                    <YourTests/>
                    <div className="course-all">
                      <h4>Live classes</h4>
                      <Link to={'#'} className="btn-view-all">View all</Link>
                    </div>
                    <LiveClasses/>
                  </div>
                </div>
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
