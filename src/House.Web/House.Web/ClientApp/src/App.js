import React from 'react';
import { Layout } from './components/Layout/Layout';
import { RouteRegister } from './components/Router/RouteRegister';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Layout>
        <RouteRegister />
      </Layout>
    </div>
  );
};

export default App;
