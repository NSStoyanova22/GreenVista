import React from 'react';
import '../../styles/Chat.css';

export const SendMessage = () => (
  <div className="messaging-interface">
    <div className="user-list">
      <div className="user">User 1</div>
      <div className="user">User 2</div>
      <div className="user">User 3</div>
      {/* Add more users as needed */}
    </div>
    <div className="message-box">
      <div>Select a user to start messaging</div>
    </div>
  </div>
);