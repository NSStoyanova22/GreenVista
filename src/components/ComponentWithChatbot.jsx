import React from "react";
import ChatBot from "./ChatBot";
import { Navbar } from "./Navbar";

export const ComponentWithChatbot = (props) => {
    const { updatePostsNumber, children } = props;   
     return(
        <>
            <Navbar updatePostsNumber={updatePostsNumber} />
            {children}
            <ChatBot />
        </>
    )
}