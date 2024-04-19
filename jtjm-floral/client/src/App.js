import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import Reserve from './pages/reserve';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import login from './pages/login';
import signup from './pages/signup';
import profile from './pages/profile';
import cart from './pages/cart';
import profile2 from './pages/profile2';
import checkout from './pages/checkout';
import Header from './component/header'
import Footer from './component/footer';

const App = () => {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/shop" component={Reserve} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
          <Route path="/profile" component={profile} />
          <Route path="/profile2" component={profile2} />
          <Route path="/cart" component={cart} />
          <Route path="/checkout" component={checkout} />
        </Switch>
     <Footer/>
    </Router>
  );
};

export default App;
