import React from "react";
import { Post } from "../components/Post";
import { Navbar } from "../components/Navbar";
import '../../styles/Forum.css';
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";

export const Forum = () => {
 
  const uploadedPhotoUrl = localStorage.getItem('uploadedPhoto');

  return (
    <ComponentWithChatbot>
      <div className="forumPage">
        {uploadedPhotoUrl && (
          <div className="postHeader">
            <p className="username">@username</p>
            <img src={uploadedPhotoUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} className="uploadedImage"/>
            <p className="username">Challenge Name</p>
            <p className="username">Given Heading</p>
            <button className="postBtn">Post</button>
            <button className="cancelBtn">Cancel</button>
          </div>
        )}
        <Post />
      </div>
    </ComponentWithChatbot>
  );
}