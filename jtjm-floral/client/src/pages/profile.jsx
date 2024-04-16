import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../component/head';
import Footer from '../component/footer';

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
    <div>
      <Head />
      <div>
        {loggedIn && userData ? (
          <div>
            <h1>Welcome, {userData.username}!</h1>
            {/* Show user information and options */}
          </div>
        ) : (
          <div>
            <h1>Please log in to view your profile</h1>
            <a href="/login">Login</a>
            <span> or </span>
            <a href="/signup">Sign Up</a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
