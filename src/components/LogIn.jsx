import '../../styles/login.css'
import React from "react";
import { Navbar } from "./Navbar";
import Arrow from "../../public/arrow.svg"
export const LogIn = () => {
   
    return (
        <div className='LogIn'>
          <img className='arrow' src={ Arrow } alt="Arrow" />
            <div className="form">
                <h2>Sign In</h2>
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
                    Don't have an account?{" "}
                    <br />
                    <button className='register-button'> 
                       < a href="/Register" className="register">Register</a>
                    </button>
                        
        
                    
                    </p>
                
                <button className="register-button signin-button" role="button">
                    Sign In
                </button>
                </form>
            </div>
        
        </div>
      
        
    )
}