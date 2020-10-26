import React, { useState } from 'react';
import { Button, TextField, Grid, Unstable_TrapFocus } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { v4 as uuidv4 } from 'uuid';

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

  const textFieldPropsAndValues = [
    {
      id: uuidv4(),
      label: 'Име',
      name: 'FirstName',
      value: FirstName,
      onChange: handleInputChange,
      className: props.style.styleTextField,
    },
    {
      id: uuidv4(),
      label: 'Фамилия',
      name: 'LastName',
      value: LastName,
      onChange: handleInputChange,
      className: props.style.styleTextField,
    },
    {
      id: uuidv4(),
      label: 'Телефонен номер',
      name: 'PhoneNumber',
      value: PhoneNumber,
      onChange: handleInputChange,
      className: props.style.styleTextField,
    },
    {
      id: uuidv4(),
      label: 'Електронна поща',
      name: 'Email',
      value: Email,
      onChange: handleInputChange,
      className: props.style.styleTextField,
    },
  ];

  return (
    <form>
      <Grid container onSubmit={submitHandler} direction='column'>
        <Grid item>
          {textFieldPropsAndValues.map((textFieldProps) => {
            const { id, ...propsAndValues } = textFieldProps;
            return <TextField key={id} {...propsAndValues} />;
          })}
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
