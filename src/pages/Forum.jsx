import React from "react";
import { Post } from "../components/Post";

import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import { PostPictureHeader } from "../components/PostPictureHeader";

import '../../styles/Forum.css';

export const Forum = () => {
  const uploadedPhotoUrl = localStorage.getItem('uploadedPhoto');

  return (
    <ComponentWithChatbot>
      <div className="forumPage">
        <PostPictureHeader uploadedPhotoUrl={uploadedPhotoUrl} />
        <Post />
      </div>
    </ComponentWithChatbot>
  );
}