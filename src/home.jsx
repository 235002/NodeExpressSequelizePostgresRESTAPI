import React, { useState, useEffect } from 'react;'
import axios from 'axios';


const Home = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect( async () => {
    const result = await axios.get('http://localhost:3030/api/home')
    setMessage(result.data);
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p1>{message}</p1>
    </div>
  );
}

export default Home;
