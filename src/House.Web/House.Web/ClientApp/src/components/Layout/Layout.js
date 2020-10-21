import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Body } from './Body/Body';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    // position: 'absolute',
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Body children={props.children} />
      <div className={classes.footerContainer}>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export { Layout };
