import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import '../../styles/Chat.css';

export const SendMessage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/users/search?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display search results */}
      {searchResults.map((user) => (
        <div key={user._id}>{user.username}</div>
      ))}
      <div className="messaging-interface">
        <div className="user-list">
          <div className="user">User 1</div>
          <div className="user">User 2</div>
          <div className="user">User 3</div>
        </div>
        <div className="message-box">
          <div>Select a user to start messaging</div>
        </div>
      </div>
    </>
  );
};
