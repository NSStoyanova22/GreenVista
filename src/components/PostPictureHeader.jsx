import React, { useState, useEffect } from "react";
import { createPost, getAllPosts, getAllPostsByUser } from "../../utils/HTTPServise";


export const PostPictureHeader = ( props ) => {
    const [imgUrl, setImgUrl] = useState('');
    const [userId, setUserId] = useState('');
    const [username, setUserName] = useState('');
    const [challengeName, setChallengeName] = useState('');
    const [givenHeading, setGivenHeading] = useState('');
    const [hiddenPostHeader, setHiddenPostHeader] = useState(false);
    const [uploadedImg, setUploadedImg] = useState(props.props.uploadedPhotoUrl);
    const [postMsg, setPostMsg] = useState('');
    const onDataChange = (e) => {
        if(e.target.id === 'gName') {
            setGivenHeading(e.target.value);
        }
    }

    const createNewPost = (e) => {
        e.preventDefault();
        const userData = localStorage.getItem('userData');
        let profileImage = '';
        if(userData && userData !== 'null' && userData !== 'undefined') {
            const parsedUserdata = JSON.parse(userData);
            profileImage = parsedUserdata.photo;
        }
        const data = {
            // imgUrl, username, challengeName, givenHeading 
            created_at: Date.now(),
            imgUrl: imgUrl,
            username: username,
            challengeName: challengeName,
            givenHeading: givenHeading === '' ? '-----' : givenHeading,
            userId: userId,
            userPhoto: profileImage
        }

        createPost(data).then((res) => {
            if(res) {
                //console.log("post: " + res);
                
                setPostMsg('Post created successfully.');
                setHiddenPostHeader(true);
                //localStorage.setItem('uploadedPhoto', null);
                localStorage.removeItem('uploadedPhoto');
                localStorage.removeItem('uploadedBase64Photo');
                setUploadedImg(null);
                //getAllPosts();
                //window.location.reload();
                props.updatePosts(true);
                // getAllPostsByUser({id: userId}).then((r) => {
                //     const data = r.data.postsLength;
                //     localStorage.setItem('postsLength', JSON.stringify(data))
                // })
                props.updatePostsNumber(true);
            }
        })
    }



    useEffect(() => {
        //setUploadedImg(null);
        if(localStorage.getItem('userData') && localStorage.getItem('userData') !== 'undefined' && localStorage.getItem('userData') !== undefined) {
            const user = JSON.parse(localStorage.getItem('userData'));
            //console.log(user.username)
            if(user) {
                setUserName(user.username)
                setUserId(user.id)

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
            {uploadedImg ? (
                <div className="postHeader">
                    <img src={uploadedImg} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} className="uploadedImage"/>
                    <p className="username"></p>
                    <p className="username">Given Heading</p>
                    <input className="headingType" type="text" onChange={onDataChange} id="gName" /> <br />
                    <button className="postBtn" onClick={createNewPost}>Post</button>
                    <button className="cancelBtn">Cancel</button>
                </div>
            ) : null}
            {postMsg !== '' ? (
                <div className="msg-post"><p>{postMsg}</p></div>
            ): null}
        </div>
    );
}

