import React, { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { getAllPosts } from '../../utils/HTTPServise';

import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import { PostPictureHeader } from "../components/PostPictureHeader";

import '../../styles/Forum.css';

export const Forum = () => {
  const uploadedPhotoUrl = localStorage.getItem('uploadedPhoto');
  const [posts, setPosts] = useState([]);
  const props = { 
    uploadedPhotoUrl: uploadedPhotoUrl,

  }


  const getPosts = () => {
    getAllPosts().then((res) => {
      //console.log(res)
      setPosts(res.data.posts);
    })
  }

  const updatePosts = (posts) => {
    if(posts) {
      getPosts();
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
  return (
    <ComponentWithChatbot>
      <div className="forumPage">
        <PostPictureHeader props={props} updatePosts={updatePosts} />
        {posts.length > 0 ? (
          <div className="posts">
            {posts.map((post) => {
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