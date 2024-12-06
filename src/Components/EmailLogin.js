import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import emaillogin from '../images/email-login.svg'
import emailemoji from '../images/emoji_email.svg'
import googleemoji from '../images/emoji_google.svg'

const EmailLogin = () => {
  return (
    <>
        <Navbar/>
        <div className="container py-100 px-150">
            <div className="get-start">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="email-login-img">
                            <img src={emaillogin} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-12">
                        <div className="email-login-text">
                          <h1>Get Started</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisciLorem ipsum dolor sit amet, consectetur adipisciLorem ipsum dolor sit amet, consectetur adipisci</p>
                          <div className='mb-3'>
                            <Link to={'/Login'} className='btn btn-c-email w-100'><span><img src={emailemoji} alt="" className="img-fluid" /></span>Continue with Email</Link>
                          </div>
                          <div className='mb-3'>
                            <Link to={'#'} className='btn btn-c-google w-100'><span><img src={googleemoji} alt="" className="img-fluid" /></span>Continue with Google</Link>
                          </div>
                          <div className="dont-account">
                            <p>Don’t have a account? <Link to={'/SignUp'}>Sign Up</Link></p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EmailLogin