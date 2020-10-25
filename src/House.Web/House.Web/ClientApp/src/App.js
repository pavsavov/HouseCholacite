import React from 'react';
import { Layout } from './components/Layout/Layout';
import { RouteRegister } from './components/Router/RouteRegister';

const App = (props) => {
  return (
    <Layout>
      <RouteRegister />
    </Layout>
  );
};

export default App;
