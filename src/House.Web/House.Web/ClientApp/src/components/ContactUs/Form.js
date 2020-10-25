import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Form = (props) => {
  const initialInputState = {
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    Message: '',
  };

  const [formDataEntry, updateFormData] = useState(initialInputState);
  const { FirstName, LastName, PhoneNumber, Email, Message } = formDataEntry;

  const handleInputChange = (e) => {
    updateFormData({ ...formDataEntry, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    fetch('https://localhost:44310/api/contact-us', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formDataEntry),
    }).then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.error(err.message);
      }
    );
  };

  //create new component => styled TextField and use some map or other iterational function
  return (
    <form>
      <Grid container onSubmit={submitHandler} direction='column'>
        {/* <Grid container direction='column'> */}
        <Grid item>
          <TextField
            label='Име'
            name='FirstName'
            value={FirstName}
            onChange={handleInputChange}
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Фамилия'
            name='LastName'
            value={LastName}
            onChange={handleInputChange}
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Телефон за връзка'
            name='PhoneNumber'
            value={PhoneNumber}
            onChange={handleInputChange}
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Електронна поща'
            name='Email'
            value={Email}
            onChange={handleInputChange}
            className={props.style.styleTextField}
          />
        </Grid>
        <Grid item>
          <TextareaAutosize
            rowsMin={6}
            label='Съобщение'
            name='Message'
            value={Message}
            onChange={handleInputChange}
            placeholder='Пишете ни...'
            className={props.style.textArea}
          />
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            className={props.style.buttonStyle}
            onClick={submitHandler}
            type='submit'
          >
            Изпрати
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { Form };
