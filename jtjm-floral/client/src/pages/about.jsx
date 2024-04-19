import React from 'react';
import logo from '../asset/logo2.png';
import '../style/about.css'; // Import CSS file with shared styles

const About = () => {
  return (
    <div className="about-container">
      <div className="text-block">
        <p className="section-text">
          To us, flowers are a symbol of beauty, youth, purity, full of vitality, and carry many meanings. Flower petals, although soft, are extremely strong and are not lacking in the work of expressing possible emotions or sending sweet messages of love for life's harshest moments.
        </p>
        <p className="section-text">
          We provide flower arrangement services such as bouquets, funeral flowers, flower decorations, and flower gifts. We are proud to own a team of professional, fun, and friendly wedding planners. We provide all services to complete your wedding such as makeup, photography, videography, wedding cake, wedding decoration,... All your worries about a perfect wedding party, you will have more time to take care of yourself and fully enjoy every moment of your wedding day.
        </p>
        <p className="section-text">
          Just contact us, share with us your thoughts, we will help you achieve your desired products.
        </p>
        <p className="section-text">
          We value our customers, especially our loyal customers. Please register an account with us so we can keep in touch and take better care of you through incentive programs, discounts, gifts,…
        </p>
      </div>
      <div className="image-block-wrapper">
        <img src={logo} className="logo" alt="Logo" />
      </div>
    </div>
  );
}

export default About;
