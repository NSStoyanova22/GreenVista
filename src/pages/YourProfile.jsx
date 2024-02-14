import React, { useEffect } from "react";

import '../../styles/YourProfile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import streak from '../../public/streak.svg'


export const YourProfile = (props) => {

    return (
         <ComponentWithChatbot>
        <div className="profileWeb">
            <h1 className="profileHeading">My profile</h1>
           
          
            <div className="profileDetails">
                <div className="circleProfile"></div>
                <h1>{props.username}</h1>
                <h3>{props.email}</h3>
                
               
            </div>
            <div className="buttonsProfile">
                <button className='buttonProfile'> 
                Add photo
                </button>
            </div>
            <div className="horizontal-line"></div>
          
            <div className="streak" >
                <div>
                <h1 className="streakText">{props.username}'s streak!</h1>
                </div>
                <div>
                <img src={streak} alt="" />
                </div>
                <div>
                <h1 className="streakText" >you up for a competition?</h1>
                </div>
            </div>
           
       
        </div>
        </ComponentWithChatbot>

    )
}
