import React from "react";
import { Post } from "./Post";
import { Navbar } from "./Navbar";
import '../../styles/Forum.css'
export const Forum = () => {
  return(
   
    <div className="forumPage">
       <Navbar />
        <Post />
    </div>
  )
}