import React, { useState } from 'react';
import Head from '../component/header';
import Footer from '../component/footer';

const Home = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, phone, address, username, password }),
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Head />
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
      <section className="signup-section" style={{ maxWidth: '300px', margin: '0 auto' }}>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname" style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
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
            <label htmlFor="service" style={{ display: 'block', marginBottom: '5px' }}>What service do you need?</label>
            <input
              type="text"
              id="service"
              name="service"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" style={{ display: 'block', marginBottom: '5px' }}>Where is your location?</label>
            <input
              type="text"
              id="location"
              name="location"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="event-date" style={{ display: 'block', marginBottom: '5px' }}>When is your event happened?</label>
            <input
              type="text"
              id="event-date"
              name="event-date"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-date" style={{ display: 'block', marginBottom: '5px' }}>What day do you need service starts?</label>
            <input
              type="text"
              id="start-date"
              name="start-date"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="favorite-style" style={{ display: 'block', marginBottom: '5px' }}>What is your favorite style?</label>
            <select id="favorite-style" name="favorite-style" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
              <option value="elegance">Elegance</option>
              <option value="rustic">Rustic</option>
              <option value="vintage">Vintage</option>
              <option value="modern">Modern</option>
              <option value="romantic">Romantic</option>
              <option value="classic">Classic</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget" style={{ display: 'block', marginBottom: '5px' }}>How much is your budget?</label>
            <input
              type="text"
              id="budget"
              name="budget"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-preference" style={{ display: 'block', marginBottom: '5px' }}>How do you like our consultant contact?</label>
            <select id="contact-preference" name="contact-preference" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
              <option value="email">Email</option>
              
              <option value="phone">Phone</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget" style={{ display: 'block', marginBottom: '5px' }}>Fill in your contact method (email or phone)</label>
            <input
              type="text"
              id="budget"
              name="budget"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>


          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#C79288', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
