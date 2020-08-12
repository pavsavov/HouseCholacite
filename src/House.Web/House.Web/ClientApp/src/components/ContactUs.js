import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    styleTextField: {
        margin: theme.spacing(4),
        width: '100%',
    },
    buttonStyle: {
        margin: theme.spacing(1, 1, 1, 4)
    }
})
);

const ContactUs = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                contact ingormations
                </Grid>
            <Grid item xs={4}>
                <Typography>
                    За връзка с нас
                    </Typography>
                <Typography>
                    Къща за гости Чолаците
                </Typography>
                <form>
                    <Grid>
                        <TextField label="Име и Фамилия" className={classes.styleTextField} />
                    </Grid>
                    <Grid>
                        <TextField label="Телефон за връзка" className={classes.styleTextField} />
                    </Grid>
                    <Grid>
                        <TextField label="Електронна поща" className={classes.styleTextField} />
                    </Grid>
                    <Grid >
                        <TextField id="" label="Съобщение" className={classes.styleTextField} />
                    </Grid>
                    <Grid  >
                        <Button variant="contained" color="primary" className={classes.buttonStyle}>
                            Бутон
                        </Button>
                    </Grid>
                </form>
            </Grid>
            <Grid>
                Map of location and gps coordinates
            </Grid>
        </Grid>
    )
};

export { ContactUs };
