import React from "react";
import { Post } from "../components/Post";
import { Navbar } from "../components/Navbar";
import '../../styles/Forum.css';
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import { PostPictureHeader } from "../components/PostPictureHeader";

export const Forum = () => {
 
  const uploadedPhotoUrl = localStorage.getItem('uploadedPhoto');

  return (
    <ComponentWithChatbot>
      <div className="forumPage">
      <PostPictureHeader />
        <Post />
      </div>
    </ComponentWithChatbot>
  );
}