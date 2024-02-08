import React from "react";
import home from '../../public/home-icon.svg'
import forum from '../../public/forum-icon.svg'
import chat from '../../public/chat-icon.svg'


export const Navbar = ({ children }) => {
    return(
        <nav>
            <ul>
                <li>
                    {/* svurji home s app.jsx */}
                    <a href="#">
                        <img src={home} alt="" />
                    </a>
                </li>
                <li>
                    <a href="/Forum">
                        <img src={forum} alt="" />
                    </a>
                </li>
                
                <li>
                    <a href="#" className="nav-title">GreenVista</a>
                </li>
                <li>
                    <a>
                        <img src={chat} alt="" />
                    </a>
                </li>
                <li>
                    <a>profile</a>
                </li>
            </ul>
    </nav>
    )
}