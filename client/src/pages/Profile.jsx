import React, { useEffect } from "react";

import '../../styles/Profile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import streak from '../../public/streak.svg'


export const Profile = () => {

    return (
         <ComponentWithChatbot>
        <div className="profileWeb">
            
           
          
            <div className="profileDetails">
                <div className="circleProfile"></div>
              
                   
                 <div className="profileNames" >
                         <h1>n</h1>
                        <h3>hey</h3>
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
           
            <div className="streakProfile" >
                <div>
                <h1 className="textStreak">N's streak!</h1>
                </div>
                <div>
                <img src={streak} alt="" />
                </div>
                <div>
                <h1 className="textStreak" >you up for a competition?</h1>
                </div>
            </div>
           
        </div>
        </ComponentWithChatbot>

    )
}
