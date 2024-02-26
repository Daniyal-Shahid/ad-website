import React, { useState } from 'react';
import axios from 'axios';

const DreamLogger = () => {
  const [dream, setDream] = useState('');
  const [dreamsLogged, setDreamsLogged] = useState([]);

  const handleDreamChange = (e) => {
    setDream(e.target.value);
  };

  const handleLogDream = async () => {
    try {
      const response = await axios.post('/api/dreams', { dream });
      setDreamsLogged([...dreamsLogged, response.data]);
      setDream('');
    } catch (error) {
      console.error('Error logging dream:', error);
    }
  };

  return (
    <div>
      <h1>Dream Logger</h1>
      <div>
        <textarea
          value={dream}
          onChange={handleDreamChange}
          placeholder="Enter your dream here..."
          rows="5"
          cols="50"
        ></textarea>
      </div>
      <button onClick={handleLogDream}>Log Dream</button>
      <div>
        <h2>Logged Dreams:</h2>
        <ul>
          {dreamsLogged.map((dream, index) => (
            <li key={index}>{dream}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DreamLogger;
