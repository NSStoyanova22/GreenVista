import '../../styles/login.css'
import React, { useState } from "react";
import Screenshot from '../../public/Computer-Phone-screenshot.png';
import { registerUser } from '../../utils/HTTPServise';
import { useNavigate } from 'react-router-dom';
export const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        const userData = {
            username: username,
            email: email,
            password: pass
        }
        console.log(userData)
        registerUser(userData).then((res) => {
            if(res) {
                console.log(res)
                navigate('/');
            }
        })
    }

    const onRegisterChange = (e) => {
        e.preventDefault();
        const id = e.target.id;
        if(id === 'reg-username') {
            setUserName(e.target.value);
        }
        if(id === 'reg-email') {
            setEmail(e.target.value);
        }
        if(id === 'reg-pass') {
            setPass(e.target.value);
        }
    }

    return (
        <div className='LogIn'>
        <div className='display'>
            <div className='img-screenshot'>
            <img src={Screenshot} className='img-phonelaptop' alt="" />
            </div>
           
                        <div className="form form1">
                <h2>Register</h2>
                <form action="#">
                    <div className="input-box">
                        <label>Username</label>
                        <input type="text" id="reg-username" required="" onChange={onRegisterChange} />
                    </div>
                    <div className="input-box">
                        <label>Email</label>
                        <input type="email" id="reg-email" required="" onChange={onRegisterChange} />
                    </div>
                    
                    <div className="input-box">
                    <label>Password</label>
                        <input type="password" id="reg-pass" required="" onChange={onRegisterChange} />
                    </div>
                    
                        <a href="/Login" className='dontHaveAcc'>
                             <p>
                             Already have an account?{" "}
                            </p>
                           </a>
                    <button className="register-button signin-button" role="button" onClick={register}>
                        Register
                    </button>
                    <p className='postNoticeReg'>
                        *all posts are public.
                            </p>
                </form>
            </div>

        </div>
      
    </div>
        
    )
}