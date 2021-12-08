import React from 'react';
import "fontsource-roboto";
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core/';

export function Footer(props) {
    const classes = props.style()

    return (
        <AppBar style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}} position="sticky" >
            <Toolbar >
                <Typography className={classes.navText} onClick={() => props.home()}>
                    Malcolm Mayfield ©2021
                </Typography>
            </Toolbar>
        </AppBar>
    );
}