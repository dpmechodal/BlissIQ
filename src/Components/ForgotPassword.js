import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ForgotPassword = () => {
  return (
    <>
        <Navbar/>
        <div className="container py-100 px-150">
            <div className="get-start">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-7 col-12">
                        <div className="email-login-text">
                          <h1>Forgot Password</h1>
                          <p>You’ll receive a Email to reset your password</p>
                          <form className='login-form'>
                            <div className='mb-3'>
                                <label className='form-label'>Email</label>
                                <input type="email" className='form-control login-form' placeholder='Enter here...' />
                            </div>
                            <div>
                                <Link to={'/CheckMail'} className='btn btn-c-email w-100'>Send Email </Link>
                            </div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword