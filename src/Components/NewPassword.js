import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NewPassword = () => {
  return (
    <>
        <Navbar/>
        <div className="container py-100 px-150">
            <div className="get-start bg-white">
                <div>
                    <div className="email-login-text text-start">
                        <h1>Enter New password</h1>
                        <p>Enter your new password sent to your Email</p>
                        <form className='login-form'>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <input type="password" className='form-control login-form' placeholder='Enter here...' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Re-enter password</label>
                            <input type="password" className='form-control login-form' placeholder='Enter here...' />
                        </div>
                        <div>
                            <Link to={'/'} className='btn btn-c-email w-100'>Continue</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewPassword