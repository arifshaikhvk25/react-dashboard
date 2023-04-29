import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from "react-icons/io"

import "./Signup.css"

const Signup = () => {
    return (
        <div className='signup'>

            <div className="board"> Board. </div>

            <div className="form-signup">

                <div className="signup-container">

                    <div className="signup-H1">
                        <p className='para-1'>Sign Up</p>
                        <p className='para-2'>Sign in to your account </p>
                    </div>


                    <div className="gogl-appl">

                        <div className="gogl-signup">
                            <FcGoogle style={{width:"20px"}} />
                            <p> Sign in with Google</p>
                        </div>

                        <div className="gogl-signup">
                            <IoLogoApple style={{width:"26px"}} />
                            <p>Sign in with Apple</p>
                        </div>

                    </div>
                    <form action="submit" className='signup-submit'>

                        {/* <div className="signup-email-pass"> */}
                            <label htmlFor="Email">Email address</label>
                            <input type="email" name="email" id="" placeholder='Email' required />
                        {/* </div> */}

                        {/* <div className="signup-email-pass"> */}
                            <label htmlFor="Password">Passowrd </label>
                            <input type="password" name="password" id="" placeholder='Password' required />
                        {/* </div> */}

                        <p className='frgtPass'> Forgot password? </p>

                        <button className='signIn-btn'> Sign In </button>

                    </form>

                </div>

            </div>


        </div>
    )
}

export default Signup
