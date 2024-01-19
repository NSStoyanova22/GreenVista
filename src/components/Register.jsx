import '../../styles/login.css'
import React from "react";
import Screenshot from '../../public/Computer-Phone-screenshot.svg'
export const Register = () => {
   
    return (
        <div className='LogIn'>
        <div className='display'>
            <div className='img-screenshot'>
            <img src={Screenshot} className='img-phonelaptop' alt="" />
            </div>
           
                        <div className="form">
                <h2>Register</h2>
                <form action="#">
                <div className="input-box">
                <label>Email</label>
                    <input type="email" required="" />
                </div>
                <div className="input-box">
                <label>Password</label>
                    <input type="password" required="" />
                </div>
            
                    <label>
                    <input type="checkbox" />
                    Remember me
                    </label>
                    <p>
                    Already have an account?{" "}
                    <br />
                    <button className='register-button'> 
                        < a href="/LogIn" className="register">Log In</a>
                    </button>
                    </p>
                <button className="register-button signin-button" role="button">
                    Register
                </button>
                </form>
            </div>

        </div>
      
    </div>
        
    )
}