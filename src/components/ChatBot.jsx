import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ChatBot.css'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);
  const handleInputChange = (event) => setInputText(event.target.value);

  // Function to send a message when Enter is pressed
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (inputText.trim() === '') return;
    const userMessage = { sender: 'user', text: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = await getBotResponse(inputText);
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    setInputText('');
  };

  const getBotResponse = async (input) => {
    try {
      const apiEndpoint = 'https://api.openai.com/v1/completions'; // Corrected API endpoint
      const apiKey = 'Sk-4JrfYAKVOu8toaSofjOpT3BlbkFJ7zwvrnmaPZPd3xpYwg7m';

      const response = await axios.post(apiEndpoint, {
        prompt: input,
        max_tokens: 150,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      });
      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      return 'Hi! :)';
    }
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isOpen ? 'hide' : ''}`} onClick={toggleChat}>
        Chat
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <button onClick={toggleChat} className='closeBtn'>Close</button>
          </div>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Listen for Enter key press here
            />
            <button onClick={sendMessage} className='sendBtn'>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
