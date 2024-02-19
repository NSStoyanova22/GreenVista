import React, {useEffect, useState} from "react";
import { getChatBotApiKey, getAllPostsByUser } from '../../utils/HTTPServise';
import home from '../../public/home-icon.svg'
import forum from '../../public/forum-icon.svg'
import chat from '../../public/chat-icon.svg'
import streakWhite from '../../public/streakWhite.svg'
import streak from '../../public/streak.svg'
import { useNavigate } from 'react-router-dom';


export const Navbar = ({ updatePostsNumber, children }) => {
    const navigate = useNavigate(); 
    const [userName, setUserName] = useState('');
    const [postLength, setPostLength] = useState('');
    const [userId, setUserId] = useState('');
    useEffect(() =>{
        if(localStorage.getItem('userData') && localStorage.getItem('userData') !== 'undefined' && localStorage.getItem('userData') !== undefined) {
            const user = JSON.parse(localStorage.getItem('userData'));
            //console.log(user.username)
            if(user) {
                setUserName(user.username)
                setUserId(user.id)
            } 
        }
        if(localStorage.getItem('postsLength') && localStorage.getItem('postsLength') !== 'undefined' && localStorage.getItem('postsLength') !== undefined) {
            setPostLength(localStorage.getItem('postsLength'))
        }
    }, [])

    useEffect(() =>{
        getAllPostsByUser({id: userId}).then((res) => {
            setPostLength(res.data.postsLength);
            localStorage.setItem('postsLength', res.data.postsLength);
        })
    }, [updatePostsNumber])

    const logout = () => {
        //localStorage.setItem('userData', null);
        localStorage.removeItem('userData');
        window.location.reload()
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
                <li>
                    {postLength && postLength !== '' ? (
                        <span className="streakNum">{postLength}</span>
                    ): null}
                </li>
                <li>
                    <a href="/YourProfile">
                        <img src={streakWhite} alt="" />
                    </a>
                </li>
                
            </ul>
    </nav>
    )
}