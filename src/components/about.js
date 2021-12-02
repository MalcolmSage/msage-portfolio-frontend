import React from 'react';

import "fontsource-roboto";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core/';

export function About(props) {
    const classes = props.style()
    console.log()
    return (
        <Grid container className={classes.secondaryGrid} ref={props.location} >
            <Grid container justifyContent="center" alignContent="flex-start" className={classes.sections}>
                <Grid item>
                    <Typography variant="h1" className={classes.secondaryLG} >About Me.</Typography>
                </Grid>
                <Grid container justifyContent="center" alignContent="flex-start">
                    <Grid item md={6}>
                        <Card elevation={0} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image="https://avatars.githubusercontent.com/u/80055719?v=4"
                                    alt="Malcolm Mayfield"
                                />
                                <CardContent >
                                    <Typography variant="h1" className={classes.secondarySM} >
                                    As a forward-thinking software engineer with a background in public relations, I approach challenges with a combination of logic and creativity. Utilizing my years of experience working in collaborative environments across the globe, I am able to easily integrate within any team and immediately hit the ground running.                                     </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item style={{ backgroundColor: "red" }} md={6}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
