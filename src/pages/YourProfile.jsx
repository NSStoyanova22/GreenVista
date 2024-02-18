import React, {useEffect, useState} from "react";

import '../../styles/YourProfile.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import streak from '../../public/streak.svg'
import { useNavigate } from 'react-router-dom';
import { updateUserPhoto } from "../../utils/HTTPServise";

const userData = localStorage.getItem('userData');
let email = '';
let profileImage = '';
if(userData && userData !== 'null') {
    const parsedUserdata = JSON.parse(userData);
    email = parsedUserdata.email;
    profileImage = parsedUserdata.photo;
}

export const YourProfile = (props) => {
    const navigate = useNavigate(); 
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [uplImg, setUplImg] = useState('');

    const  getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            baseURL = reader.result;
            //console.log(baseURL);
            resolve(baseURL);
          };
          console.log(fileInfo);
        });
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            getBase64(file)
            .then(result => {
                setUplImg(result);
                
                if(email && email !== '') {
                    updateUserPhoto({
                        email: email,
                        photo: result
                    }).then((res) => {
                        if(res.data.user) {
                            localStorage.setItem('userData', JSON.stringify(res.data.user));
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    };

    const btnProfileClick = (e) => {
        e.preventDefault();
        document.getElementById('profilefiles').click();
    }

    useEffect(() =>{
        if(localStorage.getItem('userData') && localStorage.getItem('userData') !== 'undefined' && localStorage.getItem('userData') !== undefined) {
            const user = JSON.parse(localStorage.getItem('userData'));
            //console.log(user.username)
            if(user) {
                setUserName(user.username)
                setUserEmail(user.email)
            } 
        }
    }, [])
    return (
         <ComponentWithChatbot>
        <div className="YourProfileWeb">
            <h1 className="profileHeading">My profile</h1>
            <div className="horizontal-lineHeading"></div>
          
            <div className="YourProfileDetails">
                
                {uplImg !== '' ? (
                    <img src={uplImg} alt="Profile photo" style={{width: "240px", height: "240px", borderRadius: "200px", maxWidth: "100%"}} />
                ) : (
                    <>
                        {profileImage && profileImage !== '' ? (
                            <img src={profileImage} alt="Profile photo" style={{width: "240px", height: "240px", borderRadius: "200px", maxWidth: "100%"}} />
                        ) : (
                            <div className="circleYourProfile"></div>
                        )}
                    </>
                    
                )}
                <div>
                    <h1 className="UsernameHeading">{userName !== '' ? userName : ''}</h1>
                <h3 className="UsernameHeading" style={{fontStyle:'italic'}}>{userEmail !== '' ? userEmail : ''}</h3>
                </div>
                
                
               
            </div>
            <div className="buttonsProfile">
                <input id="profilefiles" style={{ visibility: "hidden" }} type="file" onChange={handleFileChange} />
                <button className='buttonProfile' onClick={btnProfileClick}> 
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