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

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
