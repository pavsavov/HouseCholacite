import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Main children={props.children} />
      <Footer />
    </React.Fragment>
  );
};

export { Layout };
