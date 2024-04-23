import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Home = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [AddUser] = useMutation(ADD_USER)
  const [formData, setFormData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const {data}= await AddUser({
      variables:{...formData,price:parseInt(formData.price),budget:parseInt(formData.budget)}
    })
    Auth.login(data.addUser.token)

  };

  return (
    <div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
      <section className="signup-section" style={{ maxWidth: '300px', margin: '0 auto' }}>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname" style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
  /> */}
          </div>
          <div className="form-group">
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="service" style={{ display: 'block', marginBottom: '5px' }}>What service do you need?</label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>description?</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" style={{ display: 'block', marginBottom: '5px' }}>Where is your location?</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="event-date" style={{ display: 'block', marginBottom: '5px' }}>When is your event happened?</label>
            <input
              type="text"
              id="event-date"
              name="event-date"
              value={formData.eventStartDate}
              onChange={(e) => setFormData({ ...formData, eventStartDate: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-date" style={{ display: 'block', marginBottom: '5px' }}>What day do you need service starts?</label>
            <input
              type="text"
              id="start-date"
              name="start-date"
              value={formData.serviceStartDate}
              onChange={(e) => setFormData({ ...formData, serviceStartDate: e.target.value })}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="favorite-style" style={{ display: 'block', marginBottom: '5px' }}>What is your favorite style?</label>
            <select id="favorite-style" name="favorite-style" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            value={formData.favoriteStyle}
              onChange={(e) => setFormData({ ...formData, favoriteStyle: e.target.value })}
            >
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
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="price" style={{ display: 'block', marginBottom: '5px' }}>price</label>
            <input
              type="text"
              id="price"
              name="price"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="contact-preference" style={{ display: 'block', marginBottom: '5px' }}>How do you like our consultant contact?</label>
            <select id="contact-preference" name="contact-preference" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}

            >
              <option value="email">Email</option>

              <option value="phone">Phone</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget" style={{ display: 'block', marginBottom: '5px' }}>Fill in your contact method (email or phone)</label >
            <input
              type="text"
              id="budget"
              name="budget"
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              value={formData.contactMethod}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            />
          </div> */}


          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#C79288', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
        </form>
      </section>

    </div>
  );
};

export default Home;
