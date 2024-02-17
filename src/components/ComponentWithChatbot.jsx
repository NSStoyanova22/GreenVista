import React from "react";
import ChatBot from "./ChatBot";
import { Navbar } from "./Navbar";

export const ComponentWithChatbot = ({ children }) => {
    return(
        <>
            <Navbar />
            {children}
            <ChatBot />
        </>
    )
}