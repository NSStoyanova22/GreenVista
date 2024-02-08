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
                Register
                </button>
                <button className='buttonProfile'> 
                Register
                </button>

            </div>
            
        </div>
        </ComponentWithChatbot>

    )
}
