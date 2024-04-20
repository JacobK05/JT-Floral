import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useMutation } from '@apollo/client';
import {LOGIN_USER, Login} from "../utils/mutations"
import Auth from "../utils/auth"


const Home = () => {
  const history = useHistory(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null); 
  const [loggedIn, setLoggedIn] = useState(false); 
  const [userData, setUserData] = useState({}); 
const [formData,setFormData]= useState({})
const [Login]= useMutation(LOGIN_USER)

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log (formData)
const {data}= await Login({variables:formData})
 Auth.login(data.login.token)   
  };

  return (
    <div>
      
      <section className="login-section">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData,email:e.target.value})}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData,password:e.target.value})}
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
      
    </div>
  );
};

export default Home;
