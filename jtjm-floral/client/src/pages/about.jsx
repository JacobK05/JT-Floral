import React from 'react';
import './about.css'
import logo from '../asset/logo.png'

const about = () => {
  return (
    <div className='p-container'>

   <p className='p1'> To us, flowers are a symbol of beauty, youth, purity, full of
    vitality, and carry many meanings. Flower petals, although soft,
    are extremely strong and are not lacking in the work
    of expressing possible emotions or sending sweet messages of
    love for life's harshest moments. 
    </p>
    <img src={logo} className='img'></img>
    <p className='p2'> We provide flower arrangement services such as bouquets, funeral
    flowers, flower decorations, and flower gifts. We are proud to
    own a team of professional - fun - friendly wedding
    planners. We provide all services to complete your wedding such
    as makeup, photography, videography, wedding cake, wedding
    decoration,... All your worries about a perfect wedding
    party, you will have more time to take care of yourself and
    fully enjoy every moment of your wedding day.
    </p>

    <p className='p3'>We value our customers, especially our loyal customers. Please
    register an account with us so we can keep in touch and take
    better care of you through incentive programs,
    discounts, gifts…Just contact us, share with us your thoughts, we will help you
    achieve your desired products.
    </p>

    </div>
  );
}

export default about;
