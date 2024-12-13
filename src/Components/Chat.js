import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import user from "../images/user.svg";

const Chat = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="asside">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
                <div className="student-edit-main">
                    <div className="student-profile-heading">
                        <Link to="/Home">
                            <i class="fa-solid fa-left-long"></i>
                        </Link>
                        <h2>Recent chats </h2>
                    </div>                    
                </div>
            </div>
            <div className="col-lg-5 col-md-12">
                <div className="chat">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Read</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Unread</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="all-chat">
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6>12:34 AM</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="all-chat">
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Darshan </h4>
                                            <h5>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6>12:34 AM</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="all-chat">
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Amit </h4>
                                            <h5>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6>12:34 AM</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                                <Link to={'#'} className="harshal">
                                    <div className="harshal-img">
                                        <img src={user} className="img-fluid" alt="" />
                                        <div className="harshal-meet">
                                            <h4>Harshal </h4>
                                            <h5 className='read'>Meet at  4 pm today ...</h5>
                                        </div>
                                    </div>
                                    <div className="time-online">
                                        <h6 className='online'>Online</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div className="harshal-chat-open">
                    <div className="back-harshal">
                        <Link to={'#'} className="chat-back">
                            <i class="fa-solid fa-arrow-left"></i>
                        </Link>
                        <div className="harshal-on">
                            <img src={user} className="img-fluid" alt="" />
                            <div className="harshal-meet-online">
                                <h4>Harshal </h4>
                                <h5>Online</h5>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown three-dot">
                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                            <li><a class="dropdown-item" href="#">Block</a></li>
                            <li><a class="dropdown-item" href="#">Clear all chat</a></li>
                        </ul>
                    </div>
                </div>
                <div className="chat-middal">
                    <div className="right-side-chat">
                        <div className="first-chat">
                            <p>Meeting was great !   :)</p>
                            <h6>11:11am <span className='seen'><i class="fa-solid fa-check-double"></i></span></h6>
                        </div>
                    </div>
                    <div className="left-side-chat">
                        <div className="first-chat-left">
                            <p>Please make sure you review the file Please make sure you review the file Please make sure you review the file</p>
                            <h6>11:11am</h6>
                        </div>
                    </div>
                    <div className="left-side-chat">
                        <div className="first-chat-left">
                            <p>Thank you sir !</p>
                            <h6>11:11am</h6>
                        </div>
                    </div>
                    <div className="right-side-chat">
                        <div className="first-chat">
                            <p>Please make sure you review the file Please make sure you review the file Please make sure you review the file</p>
                            <h6>11:11am <span><i class="fa-solid fa-check-double"></i></span></h6>
                        </div>
                    </div>
                    <div className="right-side-chat">
                        <div className="first-chat">
                            <p>Meeting was great !   :)</p>
                            <h6>11:11am <span className='seen'><i class="fa-solid fa-check-double"></i></span></h6>
                        </div>
                    </div>
                    <div className="left-side-chat">
                        <div className="first-chat-left">
                            <p>Please make sure you review the file Please make sure you review the file Please make sure you review the file</p>
                            <h6>11:11am</h6>
                        </div>
                    </div>
                    <div className="left-side-chat">
                        <div className="first-chat-left">
                            <p>Thank you sir !</p>
                            <h6>11:11am</h6>
                        </div>
                    </div>
                    <div className="right-side-chat">
                        <div className="first-chat">
                            <p>Please make sure you review the file Please make sure you review the file Please make sure you review the file</p>
                            <h6>11:11am <span><i class="fa-solid fa-check-double"></i></span></h6>
                        </div>
                    </div>
                    <div className="right-side-chat">
                        <div className="first-chat">
                            <p>Meeting was great !   :)</p>
                            <h6>11:11am <span className='seen'><i class="fa-solid fa-check-double"></i></span></h6>
                        </div>
                    </div>
                    <div className="left-side-chat">
                        <div className="first-chat-left">
                            <p>Please make sure you review the file Please make sure you review the file Please make sure you review the file</p>
                            <h6>11:11am</h6>
                        </div>
                    </div>
                    <div className="left-side-chat">
                        <div className="first-chat-left">
                            <p>Thank you sir !</p>
                            <h6>11:11am</h6>
                        </div>
                    </div>
                    <div className="right-side-chat">
                        <div className="first-chat">
                            <p>Please make sure you review the file Please make sure you review the file Please make sure you review the file</p>
                            <h6>11:11am <span><i class="fa-solid fa-check-double"></i></span></h6>
                        </div>
                    </div>
                </div>
                <div className='all-type'>
                    <div className="harshil-type">
                        <img src={user} className="img-fluid" alt="" />
                        <p>Harshal is typing....</p>
                    </div>
                    <div className='plus-icon'>
                        <Link to={'#'}><i class="fa-solid fa-plus"></i></Link>
                        <div className='typing-send'>
                            <input type="text" className='form-control' placeholder='Type here...'/>
                            <Link to={'#'}><i class="fa-solid fa-arrow-up"></i></Link>                    
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
