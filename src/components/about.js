import React from 'react';

import { makeStyles, createTheme } from '@material-ui/core/styles';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { green } from '@material-ui/core/colors';
import { ArrowDownward, EmailRounded } from '@material-ui/icons';

import "fontsource-roboto";
import {
    Button,
    ButtonGroup,
    Grid,
    Typography,
} from '@material-ui/core/';

const theme = createTheme({
    palette: {
        primary: {
            main: green[800],
        },
        secondary: {
            main: green[500],
        }
    }
})

const useStyles = makeStyles({
    primaryLG: {
        fontSize: "3rem",
        [theme.breakpoints.up('md')]: {
            fontSize: "7rem",
        },
    },
    primarySM: {
        fontSize: "1rem",
        [theme.breakpoints.up('md')]: {
            fontSize: "2.5rem",
        },
    },
    secondarySM: {
        fontSize: "1rem",
        [theme.breakpoints.up('md')]: {
            fontSize: "2rem",
        },
    },
    mainGrid: {
        overflow: "hidden",
    },
    secondaryGrid: {
        width: '100vw',
        height: '100vh',
    }
})

export function About() {
    const classes = useStyles();
    return (
        <Grid container className={classes.secondaryGrid} style={{ overflow: 'hidden' }}>
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
