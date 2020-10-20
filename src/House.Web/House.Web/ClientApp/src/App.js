import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ContactUs } from './components/Form/ContactUs';

import './custom.css';

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/contact-us' component={ContactUs} />
    </Layout>
  );
};

export default App;
