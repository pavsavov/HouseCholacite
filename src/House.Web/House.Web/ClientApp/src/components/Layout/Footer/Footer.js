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
  mainFooter: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: grey[100],
    width: '100%',
    // position: 'relative',
  },
  botomFooter: {
    display: 'flex',
    justifyContent: 'left',
    alignContent: 'center',
  },
  listElementStyle: {
    listStyleType: 'none',
  },
}));
// rewrite this component using https://material-ui.com/api/table-footer/
const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.mainFooter}>
        <Grid container {...defaultProps}>
          <Grid item>
            <Grid container direction='column'>
              <NavigationEndPoints />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <ul className={classes.listElementStyle}>
                <h5>Контакти:</h5>
                <li>телефон: 123456</li>
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
          <Grid item>
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
      <Box container direction='row'>
        <Grid item md={12} className={classes.botomFooter}>
          &copy;{new Date().getFullYear()} КЪЩА ЧОЛАЦИТЕ | Всички права запазени
          | Общи условия | Лични данни
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export { Footer };
