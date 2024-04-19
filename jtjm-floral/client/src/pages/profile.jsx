import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [userData, setUserData] = useState(null); 

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/check-login");
      if (response.data.loggedIn) {
        setLoggedIn(true);
        setUserData(response.data);
      } else {
        setLoggedIn(false);
        setUserData(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      await checkLoginStatus();
    };
    checkLogin(); 
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {loggedIn && userData ? (
          <div>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome, {userData.username}!</h1>
          </div>
        ) : (
          <div>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>Please log in to view your profile</h1>
            <div>
              <a href="/login" style={{ color: '#007bff', textDecoration: 'none', marginRight: '10px' }}>Login</a>
              <span style={{ color: '#333' }}>or</span>
                <a href="/signup" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '10px' }}>Sign Up</a>
                <span style={{ color: '#333' }}> or</span>
                <a href="/profile2" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '10px' }}>Go to profile</a>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Profile;
