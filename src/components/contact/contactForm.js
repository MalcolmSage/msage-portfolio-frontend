import React from 'react';
import Form from "./form"
import "fontsource-roboto";
import {
    Box,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core/';

export function ContactForm(props) {
    const classes = props.style()

    return (
        <Grid container className={classes.secondaryGrid} ref={props.location}>
            <Grid container justifyContent="center" alignContent="flex-start" className={classes.sections}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h1" className={classes.secondaryLG}>Contact</Typography>
                    <Form style={props.style}/>
                </Grid>
            </Grid>
        </Grid>
    );
}
