import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import user from "../images/user.svg";

const Dictionary = () => {
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
                        <h2>Dictionary</h2>
                    </div>                    
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="search-word">
                    <div className="form-group icon-search dictionary-search">
                        <span className="fa fa-search"></span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search your word"
                        />
                    </div>
                    <div className="absent-text">
                        <div className="sound-dict">
                            <Link to={'#'}><i class="fa-solid fa-volume-high"></i></Link>
                        </div>
                        <div className="translate-text">
                            <h1>Absent<span>ˈæb.sənt/</span></h1>
                            <h2>अनुपस्थित</h2>
                            <h3>not present in a place, at an occasion, or as part of something.</h3>
                        </div>
                        <div className="bookmark">
                            <Link to={'#'}><i class="fa-solid fa-bookmark"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="recent-saves">
                    <h2>Recent saves</h2>
                    <div className="recent-box">
                        <div className="recent-head">
                            <h3>Absent<span>ˈæb.sənt/</span></h3>
                            <h3>अनुपस्थित</h3>
                        </div>
                        <p>not present in a place, at an occasion, or as part of something.</p>
                    </div>
                    <div className="recent-box">
                        <div className="recent-head">
                            <h3>Absent<span>ˈæb.sənt/</span></h3>
                            <h3>अनुपस्थित</h3>
                        </div>
                        <p>not present in a place, at an occasion, or as part of something.</p>
                    </div>
                    <div className="recent-box">
                        <div className="recent-head">
                            <h3>Absent<span>ˈæb.sənt/</span></h3>
                            <h3>अनुपस्थित</h3>
                        </div>
                        <p>not present in a place, at an occasion, or as part of something.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dictionary
