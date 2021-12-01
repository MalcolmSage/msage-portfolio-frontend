import React from 'react';
import { ArrowDownward, EmailRounded } from '@material-ui/icons';

import "fontsource-roboto";
import {
    Button,
    ButtonGroup,
    Grid,
    Typography,
} from '@material-ui/core/';

export function ContactForm(props) {
    const classes = props.style()

    return (
        <Grid container className={classes.secondaryGrid} ref={props.location}>
            <Grid container justifyContent="center" alignContent="flex-start">
                <Grid item >
                    <Typography variant="h1" className={classes.primaryLG}>About Me.</Typography>
                    <Typography variant="h1" className={classes.primarySM}>
                        A full-stack web-developer with a <Typography display="inline" color="primary" className={classes.primarySM}>passion</Typography> for innovation.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" >
                <Grid item>
                    <ButtonGroup
                        variant="outlined"
                        style={{ marginTop: "1rem" }}
                        size="large">
                        <Button
                            startIcon={<ArrowDownward />}
                            style={{ border: '2px solid' }}
                            color="primary">
                            About Me
                        </Button>
                        <Button
                            startIcon={<EmailRounded />}
                            variant="contained"
                            color="primary">
                            Contact Me
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    );
}
