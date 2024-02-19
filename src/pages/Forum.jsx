import React, { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { getAllPosts } from '../../utils/HTTPServise';
 
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
import { PostPictureHeader } from "../components/PostPictureHeader";
 
import '../../styles/Forum.css';
 
export const Forum = (props) => {
  const [postNumber , setPostNumber] = useState(false);
  let isAdmin = false;
  const uploadedPhotoUrl = localStorage.getItem('uploadedBase64Photo');
  const userData = localStorage.getItem('userData');
  if(userData && userData !== 'null' && userData !== 'undefined') {
    const user = localStorage.getItem('userData');
    const parsedUser = JSON.parse(user);
    const userEmail = parsedUser.email;
    isAdmin = userEmail === 'test@abv.bg' ? true : false;
  }
 
  const [posts, setPosts] = useState([]);
  const pictureHeaderProps = {
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

  const updatePostsNumber = (data) => {
    if(data) {
      setPostNumber(true);
    }
  }
 
  useEffect(() => {
    getPosts();
  }, [])
  return (
    <ComponentWithChatbot updatePostsNumber={postNumber}>
      <div className="forumPage">
        <PostPictureHeader props={pictureHeaderProps} updatePosts={updatePosts} updatePostsNumber={updatePostsNumber} />
        {posts.length > 0 ? (
          <div className="posts">
            {posts.map((post, index) => {
              return(
                <Post
                  key={index}
                  username={post.username || "O @username"}
                  imgUrl={post.imgUrl || ""}
                  challengeName={post.challengeName || "ChallengeName"}
                  givenHeading={post.givenHeading || "GivenHeading"}
                  postId={post._id}
                  isAdmin={isAdmin} 
                  authorPhoto={post.userPhoto} />
              )
            })}
          </div>
        ) : null}
      </div>
    </ComponentWithChatbot>
  );
}
