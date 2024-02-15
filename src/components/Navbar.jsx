import React, {useEffect, useState} from "react";

import home from '../../public/home-icon.svg'
import forum from '../../public/forum-icon.svg'
import chat from '../../public/chat-icon.svg'
import streak from '../../public/streak.svg'
import { useNavigate } from 'react-router-dom';


export const Navbar = ({ children }) => {
    const navigate = useNavigate(); 
    const [userName, setUserName] = useState('');
    useEffect(() =>{
        if(localStorage.getItem('userData') && localStorage.getItem('userData') !== 'undefined' && localStorage.getItem('userData') !== undefined) {
            const user = JSON.parse(localStorage.getItem('userData'));
            //console.log(user.username)
            if(user) {
                setUserName(user.username)
            } 
        }
    }, [])

    const logout = () => {
        localStorage.setItem('userData', null);
        window.location.reload()
        // TODO: logout user server side
    }

    return(
        <nav>
            <ul>
                <li>
                    {/* svurji home s app.jsx */}
                    <a href="/">
                        <img src={home} alt="" />
                    </a>
                </li>
                <li>
                    <a href="/Forum">
                        <img src={forum} alt="" />
                    </a>
                </li>
                
                <li>
                    <a href="/" className="nav-title">GreenVista</a>
                </li>
                <li>
                    <a>
                        <img src={chat} alt="" />
                    </a>
                </li>
                <li>
                    <a href="/YourProfile">
                        <img src={streak} alt="" />
                    </a>
                </li>
                <li>
                    <a href="/YourProfile" className="loginNav">{userName !== '' ? userName : ''}</a>
                </li>
                {userName !== '' ? (
                    <li>
                        <span className="loginNav" onClick={logout}>Logout</span>
                    </li>
                ) : (
                    <li>
                        <a href="/login" className="loginNav">Log In</a>
                    </li>
                )}
                
            </ul>
    </nav>
    )
}