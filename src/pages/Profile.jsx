import React from "react";

import '../../styles/Profile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import streak from '../../public/streak.svg'

import profiles from "../misc/profiles";

export const Profile = () => {
    return (
         <ComponentWithChatbot>
        <div className="profileWeb">
            
           
          
            <div className="profileDetails">
                <div className="circleProfile"></div>
                {profiles.map((profile) => {
                    return<>
                    <div className="profileNames" key={profile.name}>
                        <h1>{ profile.name ?? "----"}</h1>
                        <h3>{ profile.username ?? "---" }</h3>
                    </div>
                    </> 
                })}
               
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
            {profiles.map((profile) => {
                    return<>
            <div className="streakProfile" key={profile.name} >
                <div>
                <h1 className="textStreak">{ profile.name ?? "---" }'s streak!</h1>
                </div>
                <div>
                <img src={streak} alt="" />
                </div>
                <div>
                <h1 className="textStreak" >you up for a competition?</h1>
                </div>
            </div>
            </>
            })}
        </div>
        </ComponentWithChatbot>

    )
}
