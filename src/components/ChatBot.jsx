import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/ChatBot.css';
import { getChatBotApiKey } from '../../utils/HTTPServise';

const ChatBot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [apiKey, setApiKey] = useState('');

  const toggleChatWindow = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    getChatBotApiKey().then((res) => {
      const chatBotKey = `Bearer ${res.data.apiKey}`;
      setApiKey(chatBotKey);
  })
  }, [])


  const sendMessage = async (event) => {
    event.preventDefault();
    const userMessage = userInput;
    if (!userMessage.trim()) return;
    const updatedMessages = [...messages, { from: 'user', text: userMessage }];
    setMessages(updatedMessages);
    setUserInput('');
    const chatBotKey = apiKey;
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: updatedMessages.map(m => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text })),
      }, {
        headers: {
          'Authorization': chatBotKey
        }
      });

      const botMessage = response.data.choices[0].message.content;
    setMessages([...updatedMessages, { from: 'bot', text: botMessage }]);
  } catch (error) {
      console.error('Error sending message to OpenAI:', error);
      return 'Sorry, I have a problem responding to this.'; 
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-icon" onClick={toggleChatWindow}>Chat</button>
      {isVisible && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.from}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className='input-area'>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Say something..."

            />
            <button type="sumbit" className='sendBtn'>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;