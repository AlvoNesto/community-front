import React from 'react';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
