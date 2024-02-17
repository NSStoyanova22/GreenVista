import React, { useState, useEffect } from "react";
import { createPost, getAllPosts } from "../../utils/HTTPServise";


export const PostPictureHeader = ( props ) => {
    const [imgUrl, setImgUrl] = useState('');
    const [username, setUserName] = useState('');
    const [challengeName, setChallengeName] = useState('');
    const [givenHeading, setGivenHeading] = useState('');
    const onDataChange = (e) => {
        if(e.target.id === 'gName') {
            setGivenHeading(e.target.value);
        }
    }

    const createNewPost = (e) => {
        e.preventDefault();
        const data = {
            // imgUrl, username, challengeName, givenHeading 
            imgUrl: imgUrl,
            username: username,
            challengeName: challengeName,
            givenHeading: givenHeading === '' ? 'Default heading' : givenHeading
        }

        createPost(data).then((res) => {
            if(res) {
                //console.log("post: " + res);
                //getAllPosts();
                window.location.reload();
            }
        })
    }



    useEffect(() => {
        if(localStorage.getItem('userData') && localStorage.getItem('userData') !== 'undefined' && localStorage.getItem('userData') !== undefined) {
            const user = JSON.parse(localStorage.getItem('userData'));
            //console.log(user.username)
            if(user) {
                setUserName(user.username)
            } 
        }
        if(localStorage.getItem('uploadedBase64Photo') && localStorage.getItem('uploadedBase64Photo') !== 'undefined' && localStorage.getItem('uploadedBase64Photo') !== undefined) {
            setImgUrl(localStorage.getItem('uploadedBase64Photo'));
        }
        //
        if(localStorage.getItem('challengeName') && localStorage.getItem('challengeName') !== 'undefined' && localStorage.getItem('challengeName') !== undefined) {
            setChallengeName(localStorage.getItem('challengeName'));
        }
    }, [])

    return(
        <div className="forumPage">
            {props.props.uploadedPhotoUrl && (
            <div className="postHeader">
                <p className="username">@username</p>
                <img src={props.props.uploadedPhotoUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} className="uploadedImage"/>
                <p className="username"></p>
                <p className="username">Given Heading</p>
                <input type="text" onChange={onDataChange} id="gName" />
                <button className="postBtn" onClick={createNewPost}>Post</button>
                <button className="cancelBtn">Cancel</button>
            </div>
            )}
        </div>
    );
}