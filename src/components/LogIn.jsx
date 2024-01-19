import '../../styles/login.css'
import React from "react"
import Screenshot from '../../public/Computer-Phone-screenshot.svg'
export const LogIn = () => {
   
    return (
        <div className='LogIn'>
            <div className='display'>
                <div className='img-screenshot'>
                <img src={Screenshot} className='img-phonelaptop' alt="" />
                </div>
               
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
          
        </div>
      
        
    )
}