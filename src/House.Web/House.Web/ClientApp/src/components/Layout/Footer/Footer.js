import { Grid, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';
import { NavigationEndPoints } from '../../Navigation/NavigationEndPoints';
import Box from '@material-ui/core/Box';
import { position } from '../../../common/constants';

const defaultProps = {
  direction: 'row',
  justify: 'space-around',
  alignContent: 'center',
};

const useStyles = makeStyles((theme) => ({
  root: {},
  footerContainer: {
    marginTop: '1rem',
    position: 'flex',
    left: '0',
    bottom: '0',
    right: '0',
  },
  mainFooterStyle: {
    backgroundColor: grey[100],
  },
  botomFooter: {
    display: 'flex',
    justifyContent: 'left',
    alignContent: 'center',
  },
  contentContainer: {
    marginTop: '1rem',
  },
  listElementStyle: {
    listStyleType: 'none',
  },
}));
// rewrite this component using https://material-ui.com/api/table-footer/
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <footer className={classes.mainFooterStyle}>
        <Grid container {...defaultProps}>
          <Grid item>
            <Grid
              container
              className={classes.contentContainer}
              direction='column'
            >
              <NavigationEndPoints />
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              className={classes.contentContainer}
              direction='column'
            >
              <ul className={classes.listElementStyle}>
                <h5>Контакти:</h5>
                <li>Телефон: 123456</li>
                <li>e-mail:nadia.lozanova@abv.bg</li>
              </ul>
              <ul className={classes.listElementStyle}>
                <h5>GPS Координати:</h5>
                <li>Дължина: {position.lng}</li>
                <li>Ширина: {position.lat}</li>
              </ul>
            </Grid>
          </Grid>
          {/* need some more civilised meaning to get instagram an facebok icons
            appart */}
          <Grid item className={classes.contentContainer}>
            <h5>Социални мрежи</h5>
            <Grid container direction='row'>
              <Box>instagram</Box>
              <hr />
              <Box>facebook</Box>
            </Grid>
          </Grid>
        </Grid>
      </footer>
      <hr />
      <Box direction='row'>
        <Grid item md={12} className={classes.botomFooter}>
          &copy;{new Date().getFullYear()} КЪЩА ЧОЛАЦИТЕ | Всички права запазени
          | Общи условия | Лични данни
        </Grid>
      </Box>
    </div>
  );
};

export { Footer };
