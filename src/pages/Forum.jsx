import React from "react";
import { Post } from "../components/Post";
import { Navbar } from "../components/Navbar";
import '../../styles/Forum.css'
import { ComponentWithChatbot } from "../components/ComponentWithChatbot";
export const Forum = () => {
  return(
    <ComponentWithChatbot>
    <div className="forumPage">
       
        <Post />
        
    </div>
    </ComponentWithChatbot>
  )
}