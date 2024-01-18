import React from "react";
import home from '../../public/home-icon.svg'
import forum from '../../public/forum-icon.svg'
import chat from '../../public/chat-icon.svg'

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <img src={home} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={forum} alt="" />
                    </a>
                </li>
                <li>
                    <a href="/LogIn">
                        LogIn
                    </a>
                </li>
                <li>
                    <a>chatbot</a>
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