import React, { useEffect } from "react";

import '../../styles/YourProfile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import streak from '../../public/streak.svg'

import profiles from "../misc/profiles";

export const YourProfile = () => {

    return (
         <ComponentWithChatbot>
        <div className="profileWeb">
            <h1 className="profileHeading">My profile</h1>
           
          
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
                Add photo
                </button>
            </div>
            <div className="horizontal-line"></div>
            {profiles.map((profile) => {
                    return<>
            <div className="streak" key={profile.name} >
                <div>
                <h1 className="streakText">{ profile.name ?? "---" }'s streak!</h1>
                </div>
                <div>
                <img src={streak} alt="" />
                </div>
                <div>
                <h1 className="streakText" >you up for a competition?</h1>
                </div>
            </div>
            </>
            })}
        </div>
        </ComponentWithChatbot>

    )
}
