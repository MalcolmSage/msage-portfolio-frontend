import React from 'react';
import './App.css';
import { ArrowDownward, EmailRounded } from '@material-ui/icons';

import "fontsource-roboto";
import {
    Button,
    ButtonGroup,
    Grid,
    Typography,
} from '@material-ui/core/';

export function Landing(props) {
    const classes = props.style()
    return (
        <Grid container className={classes.primaryGrid} ref={props.location}>
            <Grid container justifyContent="center" alignContent="flex-end">
                <Grid item>
                    <Typography variant="h2" className={classes.primaryLG}>I'm <Typography display="inline" color="primary" className={classes.primaryLG}>Malcolm</Typography>.</Typography>
                    <Typography variant="h2" className={classes.primarySM}>
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
                            onClick={props.about}
                            color="primary">
                            About Me
                        </Button>
                        <Button
                            startIcon={<EmailRounded />}
                            variant="contained"
                            onClick={props.contact}
                            color="primary">
                            Contact Me
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>

    );
}
