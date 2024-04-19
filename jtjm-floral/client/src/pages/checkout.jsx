import React, { useState } from 'react';



const Checkout = () => {
  
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isEditing, setIsEditing] = useState(false); 


  const handlePayment = () => {
 
    console.log('Payment successful.');
  };

  return (
    <div>
     
     
      <div style={contentStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h2>

        <section className="profile-section" style={{ maxWidth: '300px', margin: '0 auto' }}>
          
          {isEditing ? (
            <form>
              <div className="form-group">
                <label htmlFor="address" style={labelStyle}>Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber" style={labelStyle}>Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber" style={labelStyle}>Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod" style={labelStyle}>Payment Method:</label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handlePayment}
                style={buttonStyle}
              >
                Pay Now
              </button>
            </form>
          ) : (

            <div>
              <p style={infoStyle}><strong>Address:</strong> {address}</p>
              <p style={infoStyle}><strong>Phone Number:</strong> {phoneNumber}</p>
              <p style={infoStyle}><strong>Card Number:</strong> {cardNumber}</p>
              <p style={infoStyle}><strong>Payment Method:</strong> {paymentMethod}</p>
            </div>
          )}

          
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            style={{ ...buttonStyle, marginTop: '20px' }}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </section>
      </div>
     
    </div>
  );
};

const contentStyle = {
  padding: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#C79288',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const infoStyle = {
  marginBottom: '10px',
};

export default Checkout;
