import '../../styles/login.css'
import React from "react";
import { Navbar } from "./Navbar";
import Arrow from "../../public/arrow.svg"
export const Register = () => {
   
    return (
        <div className='Register-page'>
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
                <a href="/LogIn">
                        LogIn
                    </a>
            
                    <label>
                    <input type="checkbox" />
                    Remember me
                    </label>
                    <p>
                    Don't have an account?{" "}
                    <br />
                        <button><a href="/Register.jsx" className="register">Rester</a></button>
                        
                    
                    </p>
                    
                <button className="button-24" role="button">
                    Sign In
                </button>
                </form>
            </div>
        
        </div>
      
        
    )
}