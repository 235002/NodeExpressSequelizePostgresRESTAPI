import React, { useState, useEffect } from 'react;'
import axios from 'axios';


const Secret = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect( async () => {
    const result = await axios.get('http://localhost:3030/api/secret')
    setMessage(result.data);
  }, [])

  return (
    <div>
      <h1>Secret</h1>
      <p1>{message}</p1>
    </div>
  );
}

export default Secret;
