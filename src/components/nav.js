import React from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import "fontsource-roboto";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core/';

export function Nav(props) {
    const classes = props.style()

    return (
        <AppBar color="primary">
            <Toolbar >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.secondarySM}>
                    Malcolm Mayfield | Full Stack Dev
                </Typography>
            </Toolbar>
        </AppBar>

    );
}
