import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Cart = () => {

  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 50 },
    { id: 3, name: 'Product 3', price: 50 }
  ]);


  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .cart {
            margin: auto;
            max-width: 600px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: relative; /* Cho phép positioning tương đối cho nút */
          }

          .cart-title {
            font-size: 24px;
            margin-bottom: 16px;
            text-align: center;
          }

          .cart-list {
            list-style: none;
            padding: 0;
          }

          .cart-item {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }

          .cart-item:last-child {
            border-bottom: none;
          }

          .cart-item-name {
            font-weight: bold;
          }

          .cart-item-price {
            color: #888;
          }

          .cart-item-remove {
            background-color: #C79288;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
          }

          .cart-item-remove:hover {
            background-color: #f44336;
          }

          .total {
            font-size: 20px;
            font-weight: bold;
            margin-top: 16px;
            text-align: right;
          }

          .checkout-button {
            position: absolute; /* Đặt vị trí tuyệt đối */
            bottom: 20px; /* Cách bottom 20px */
            right: 20px; /* Cách right 20px */
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
          }

          .checkout-button:hover {
            background-color: #45a049;
          }
        `,
        }}
      />

      <div className="cart">
        <h2 className="cart-title">Shopping Cart</h2>
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li className="cart-item" key={index}>
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
              <button
                className="cart-item-remove"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="total">
          Total: ${calculateTotal()}
        </div>
<Link to={{ pathname: "/checkout", state: { cart: cart } }}>
  <button className="checkout-button">
    Proceed to Checkout
  </button>
</Link>
      </div>

      
    </div>
  );
};

export default Cart;
