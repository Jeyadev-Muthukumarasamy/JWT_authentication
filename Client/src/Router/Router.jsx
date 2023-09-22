import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Corrected from <Router> to <Route> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
