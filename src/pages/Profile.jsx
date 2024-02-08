import React from "react";
import { Navbar } from "../components/Navbar";
import '../../styles/Profile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";

export const Profile = () => {
    return (
         <ComponentWithChatbot>
        <div className="profileWeb">
            
           
          
            <div className="profileDetails">
                <div className="circleProfile"></div>
                <div className="profileNames">
                    <h1>Nicole Stoyanova</h1>
                    <h3>@nicolezzz</h3>
                </div>
            </div>
            <div className="buttonsProfile">
                <button className='buttonProfile'> 
                Follow
                </button>
                <button className='buttonProfile'> 
                Message
                </button>

            </div>
            <div className="horizontal-line"></div>
            <div className="streakProfile">
                <p>This is the text inside the streak profile div.</p>
            </div>
            
        </div>
        </ComponentWithChatbot>

    )
}
