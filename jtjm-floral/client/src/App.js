import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/header'
import Body from './component/body'
import Footer from './component/footer'
import AboutPage from './pages/about'
import ShopPage from './pages/shop'
import WeddingPage from './pages/wedding'
import ContactPage from './pages/contact'
import ServicePage from './pages/services'

const App = () => {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/services" component={ServicePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/wedding" component={WeddingPage} />
        </Switch>
     <Footer/>
    </Router>
  );
};

export default App;
