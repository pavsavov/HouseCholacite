import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    styleTextField: {
        margin: theme.spacing(4),
        width: '100%',
    },
    buttonStyle: {
        margin: theme.spacing(1, 1, 1, 4)
    },
    containerStyle: {
        justifyContent: "flex-end",
        maxWidth: "md",

    },
    textArea: {
        width: "100%",
        margin: theme.spacing(4),
    }
})
);

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4} direction="column" >
                <Grid item container direction="row">
                    <Grid item xs={4}>
                        <Typography>
                            Контакти
                      </Typography>
                        <Grid item>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <form>
                            <Grid>
                                <Typography>
                                    Къща за гости Чолаците
                                </Typography>
                            </Grid>
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
                                <TextareaAutosize id="" label="Съобщение" placeholder="Пишете ни..." className={classes.textArea} />
                            </Grid>
                            <Grid  >
                                <Button variant="contained" color="primary" className={classes.buttonStyle}>
                                    Бутон
                            </Button>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>
                            <Typography>
                                Map of location and gps coordinates
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export { ContactUs };
