import React from 'react';
import {
    Grid,
} from '@material-ui/core/';
import "../styles/stars.scss"

function Stars() {
    return (
        <Grid container >
            <Grid item id="stars"></Grid>
            <Grid item id="stars2"></Grid>
            <Grid item id="stars3"></Grid>
        </Grid>
    )
}

export default Stars