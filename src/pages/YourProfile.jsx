import React, {useEffect, useState} from "react";

import '../../styles/YourProfile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import streak from '../../public/streak.svg'
import { useNavigate } from 'react-router-dom';


export const YourProfile = (props) => {
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
    return (
         <ComponentWithChatbot>
        <div className="YourProfileWeb">
            <h1 className="profileHeading">My profile</h1>
           
          
            <div className="YourProfileDetails">
                <div className="circleYourProfile"></div>
                <h1 className="UsernameHeading">{userName !== '' ? userName : ''}</h1>
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
                <h1 className="streakText">{userName !== '' ? userName : ''}'s streak!</h1>
                </div>
                <div>
                <img src={streak} alt="" />
                </div>
                <div>
                <h1 className="streakText" >Keep going!</h1>
                </div>
            </div>
           
       
        </div>
        </ComponentWithChatbot>

    )
}
