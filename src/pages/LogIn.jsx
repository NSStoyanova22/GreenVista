import '../../styles/login.css'
import React, { useState } from "react"
import Screenshot from '../../public/Computer-Phone-screenshot.svg'
import { loginUser } from '../../utils/HTTPServise';
import { forumDataList } from '../../utils/HTTPServise';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
    
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const login = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: pass
        }
        console.log(userData)
        // forumDataList().then((res) => {
        //     if(res) {
        //         console.log(res)
        //     }
        // })
        loginUser(userData).then((result) => {
            if(result && result !== '') {
                // result.status
                // 200 ok || 401 ....
                console.log(result)
                localStorage.setItem('userData', JSON.stringify(result.data.user))
                navigate('/');
            }
        })
    }

    const onLoginChange = (e) => {
        e.preventDefault();
        const id = e.target.id;
        if(id === 'login-email') {
            setEmail(e.target.value);
        }
        if(id === 'login-pass') {
            setPass(e.target.value);
        }
    }

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
                            <input type="email" required="" id="login-email" onChange={onLoginChange} />
                        </div>
                        <div className="input-box">
                        <label>Password</label>
                            <input type="password" required="" id="login-pass" onChange={onLoginChange} />
                        </div>
                    
                           <a href="/Register" className='dontHaveAcc'>
                             <p>
                            Don't have an account?{" "}
                            </p>
                           </a>
                           
                        <button onClick={login} className="register-button signin-button" role="button">
                            Sign In
                        </button>
                    </form>
                </div>

            </div>
          
        </div>
      
        
    )
}