import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import Head from '../component/header';
import Footer from '../component/footer';

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
        setLoginError('Invalid username or password'); 
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('An error occurred. Please try again later.'); 
    }
  };

  return (
    <div>
      <Head />
      <section className="login-section">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            {loginError && <p className="error-message" style={{ color: 'red' }}>{loginError}</p>} 
          </div>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>Don't have an account? <a href="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up here</a></p>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'C79288', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
