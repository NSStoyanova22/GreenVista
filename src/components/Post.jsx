import React, {useEffect, useState} from "react";
import { deletePost } from "../../utils/HTTPServise";
import { updateUserPhoto } from "../../utils/HTTPServise";


const userData = localStorage.getItem('userData');
let profileImage = '';
if(userData && userData !== 'null') {
    const parsedUserdata = JSON.parse(userData);
    profileImage = parsedUserdata.photo;
}
export const Post = (props) => {
    const [isAdmin, setIsAdmin] = React.useState(props.isAdmin || false)
    const [uplImg, setUplImg] = useState('');

    const deleteItem = () => {
        deletePost({id: props.postId}).then((res) =>{
            console.log(res)
        })
    }
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
    return(
        <div className="post">
            <div className="picturePost">
                {props.imgUrl !==  "" ? (
                    <img src={props.imgUrl} alt="post image" />
                ) : null}
            </div>
            <div>
                <div className="userPost">
                        {props.authorPhoto  && props.authorPhoto  !== '' ? (
                        <img src={props.authorPhoto} alt="Profile photo" style={{ width: "58px", height: "58px", borderRadius: "200px", maxWidth: "100%", margiRight: "2rem"}} />
                    ) : (
                        <div className="circleYourProfile1"></div>
                        
                    )}
                <p>{props.username}</p>
                </div>
           
            <h2>{props.challengeName}</h2>
            <h3>{props.givenHeading}</h3>
            {isAdmin ? (
                <span onClick={deleteItem}>Delete</span>
            ) : null}
            </div>
            <div>
            </div>
        </div>
    )
}