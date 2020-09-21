import React from 'react';
import { Button, TextField, Typography, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import {ComposedForm} from './ComposedForm'

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
        height: "100%",
        margin: theme.spacing(4),
    }
})
);

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4} direction="column" >
                <Grid item container direction="row" justify="center">
                    <Grid item xs={4}>
                        <Typography>
                            Контакти
                      </Typography>
                    </Grid>
                    <Grid item>
                        <Grid>
                            <Typography>
                                Къща за гости Чолаците
                           </Typography>
                        </Grid>

                        <ComposedForm style={classes}/>

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
