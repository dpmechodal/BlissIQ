import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import user from '../images/user.svg'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="container">
                <div className="header-main">
                    <div className="logo-search">
                        <Link to={'/Dashboard'}>
                            <img src={logo} alt="" className="img-fluid" />
                        </Link>
                        <div class="form-group icon-search">
                            <span class="fa fa-search"></span>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="notification-user">
                        <div className="notification">
                            <Link to={'/Dashboard'}>
                                <i class="fa-regular fa-bell"></i>
                            </Link>
                        </div>
                        <div class="dropdown dropstart">
                            <button class="btn btn-user " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} alt="" className="img-fluid" />
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link class="dropdown-item" to={'#'}>Profile</Link></li>
                                <li><Link class="dropdown-item" to={'#'}>Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar