import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../utils/interceptor';

const Profile = () => {
  const [username, setUserName] = useState('');
  const navigate=useNavigate();

  const fetchProfile = async () => {
    try {
      const response = await axiosInstance("/profile");
      setUserName(response.data.userName);
    } catch (error) {
      console.log(error);
    }
  };
  const logoutbutton=()=>{
    localStorage.clear();
    navigate("/login")

  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <div>
        <h2>Welcome to your Profile Page {username}</h2>
        <p>Here you can display movie images or other profile information.</p>
        <Link to="/home">Home</Link>
<Link to="/login">
  <button className="button" onClick={logoutbutton}>
    Logout
  </button>
</Link>

      </div>
    </>
  );
};

export default Profile;
