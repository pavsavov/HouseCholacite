import React from 'react';
import { isPropertySignature } from 'typescript';
import { Layout } from './components/Layout/Layout';
import { RouterRegister } from './components/Router/Router';

const App = (props) => {
  return (
    <Layout children={props.children}>
      <RouterRegister />
    </Layout>
  );
};

export default App;
