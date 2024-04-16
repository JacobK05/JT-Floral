import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './component/index';
import Shop from './component/shop';
import Services from './component/services';
import Wedding from './component/wedding';
import About from './component/about';
import Contact from './component/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/shop" component={Shop} />
          <Route path="/wedding" component={Wedding} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
