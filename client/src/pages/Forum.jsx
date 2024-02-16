import React from "react";
import { Post } from "../components/Post";

import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import { PostPictureHeader } from "../components/PostPictureHeader";

import '../../styles/Forum.css';

export const Forum = () => {
  const uploadedPhotoUrl = localStorage.getItem('uploadedPhoto');
  const props = { 
    uploadedPhotoUrl: uploadedPhotoUrl,

  }
  // TODO: get postsArray from the database!!!
  const postsArray = [1,2,3];
  return (
    <ComponentWithChatbot>
      <div className="forumPage">
        <PostPictureHeader props={props} />
        {postsArray.length > 0 ? (
          <div className="posts">
            {postsArray.map((post) => {
              return(
                <Post 
                  username={post.username || "O @username"} 
                  imgUrl={post.imgUrl || ""} 
                  challengeName={post.challengeName || "ChallengeName"} 
                  givenHeading={post.postgivenHeading || "GivenHeading"}  />
              )
            })}
          </div>
        ) : null}
      </div>
    </ComponentWithChatbot>
  );
}