import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import Head from '../component/head';
import Footer from '../component/footer';
import '../style/loginStyle.css';

const Home = () => {
  const history = useHistory(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null); 
  const [loggedIn, setLoggedIn] = useState(false); 
  const [userData, setUserData] = useState({}); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedIn(true);
        setUserData(data);
        console.log('Login successful');
        history.push('/profile');
      } else {
        console.error('Login failed');
        setLoginError('Invalid username or password'); // Thiết lập trạng thái lỗi
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('An error occurred. Please try again later.'); // Thiết lập trạng thái lỗi
    }
  };

  return (
    <div>
      <Head />

      <section className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            {loginError && <p className="error-message">{loginError}</p>}
          </div>
          <p>Don't have an account? <a href="/signup">Sign up here</a></p>
          <button type="submit">Login</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
