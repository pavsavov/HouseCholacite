import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Form } from './Form';
import { Map } from '../HEREMap/Map';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  styleTextField: {
    margin: theme.spacing(4),
    width: '100%',
  },
  buttonStyle: {
    margin: theme.spacing(1, 1, 1, 4),
  },
  containerStyle: {
    justifyContent: 'flex-end',
    maxWidth: 'md',
  },
  textArea: {
    width: '100%',
    height: '100%',
    margin: theme.spacing(4),
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4} direction='column'>
        <Grid item container direction='row' justify='center'>
          <Grid item xs={4}>
            <Typography>Контакти</Typography>
            <Grid>
              <Typography>
                Адрес:
                {/* Some addres */}
              </Typography>
              <Typography>
                Телефон:
                {/* Work Phone */}
              </Typography>
              <Typography>
                GPS Координати:
                {/* Latitude
                 Longtitude
                 use constans.js where are the coordinates
                 */}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography>Къща за гости Чолаците</Typography>
            <Form style={classes} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={4}>
          <Typography>Местоположение</Typography>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export { ContactUs };
