import React from 'react';
import "fontsource-roboto";
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core/';

export function Footer(props) {
    const classes = props.style()
    const [setAnchorEl] = React.useState(null);

    const menuRoute = (location) => {
        if (location === "home" || location === "about" || location === "projects" || location === "contact") {
            props[location]()
            setAnchorEl(null);
        } else {
            setAnchorEl(null);
        }

    }
    return (
        <AppBar style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} position="sticky" >
            <Toolbar >
                <Typography className={classes.navText} onClick={() => menuRoute("home")}>
                    Malcolm Mayfield ©2021
                </Typography>
            </Toolbar>
        </AppBar>
    );
}