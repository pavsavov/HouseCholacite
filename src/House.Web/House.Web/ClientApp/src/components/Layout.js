import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { NavMenu } from './Navigation/NavMenu';
import { Footer } from './Footer/Footer';

const useStyles = makeStyles(() => ({
  footerContainer: {
    minHeight: '100vh',
  },
}));
const Layout = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* NavMenu is actually header. Need to decompose it in smaller components */}
      <NavMenu />
      <Container>{props.children}</Container>
      <div className={classes.footerContainer}>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export { Layout };
