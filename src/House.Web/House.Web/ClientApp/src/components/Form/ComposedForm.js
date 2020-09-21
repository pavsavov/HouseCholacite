import React from 'react';
import { Button, TextField,Grid } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'


const ComposedForm = ({textArea,styleTextField,buttonStyle}) => {
    return (
        <form>
            <Grid item>
                <TextField label="Име и Фамилия" className={styleTextField} />
            </Grid>
            <Grid item>
                <TextField label="Телефон за връзка" className={styleTextField} />
            </Grid>
            <Grid item>
                <TextField label="Електронна поща" className={styleTextField} />
            </Grid>
            <Grid item>
                <TextareaAutosize id="" label="Съобщение" placeholder="Пишете ни..." className={textArea} />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" className={buttonStyle}>
                    Бутон
    </Button>
            </Grid>
        </form>
    )
}

export {ComposedForm}