import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"
import { genericerror } from '../utils/genericerror';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

 
  const handleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("http://localhost:3005/api/login", {
      userName: username,
      password: password,
    });

    if (response.data.accessToken) {
      localStorage.setItem('token', response.data.accessToken);
      navigate("/profile", { replace: true });
    } 
  } catch (error) {
    // Handle API request error (e.g., network issue)
    genericerror(error)
  }
};


  return (
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
     
    </div>

     </>
    
  );
}

export default Login;
