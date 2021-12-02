import React from 'react';

import "fontsource-roboto";
import {
    Grid,
    Typography,
} from '@material-ui/core/';

export function ContactForm(props) {
    const classes = props.style()

    return (
        <Grid container className={classes.secondaryGrid} ref={props.location}>
            <Grid container justifyContent="center" alignContent="flex-start" className={classes.sections}>
                <Grid item >
                    <Typography variant="h1" className={classes.secondaryLG}>Contact</Typography>
                    <Typography variant="h1" className={classes.secondarySM}>
                        A full-stack web-developer with a <Typography display="inline" color="primary" className={classes.primarySM}>passion</Typography> for innovation.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
