import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Form = (props) => {
  return (
    <form>
      <Grid container direction='column'>
        <Grid item>
          <TextField
            label='Име и Фамилия'
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Телефон за връзка'
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Електронна поща'
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextareaAutosize
            rowsMin={6}
            label='Съобщение'
            placeholder='Пишете ни...'
            className={props.style.textArea}
          />
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            className={props.style.buttonStyle}
          >
            Изпрати
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { Form };
