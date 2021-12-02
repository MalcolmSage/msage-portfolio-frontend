import React from 'react';

import "fontsource-roboto";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core/';

import Stack from "@mui/material/Stack"

import cssLogo from "./assets/logos/css.svg"
import djangoLogo from "./assets/logos/django.svg"
import gitLogo from "./assets/logos/git.svg"
import htmlLogo from "./assets/logos/html.svg"
import javascriptLogo from "./assets/logos/javascript.svg"
import mongodbLogo from "./assets/logos/mongodb.svg"
import pythonLogo from "./assets/logos/python.svg"
import reactNativeLogo from "./assets/logos/react-native.svg"
import reactLogo from "./assets/logos/react.svg"


export function About(props) {
    const classes = props.style()
    console.log()
    return (
        <Grid container className={classes.secondaryGrid} ref={props.location} >
            <Grid container justifyContent="center" alignItems="center" className={classes.sections}>
                <Grid item>
                    <Typography variant="h1" className={classes.secondaryLG} >About Me</Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="flex-start" >
                    <Grid item md={6} >
                        <Grid container justifyContent="center" alignItems="flex-start" >
                            <Grid item md={10}>
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
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container justifyContent="center" alignItems="flex-start">
                            <Grid item md={9}>
                                <Stack spacing={2} direction="column" justifyContent="space-evenly" alignItems="center" className={classes.aboutIconContainer}>
                                    <Stack spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={javascriptLogo}
                                                alt="javascript logo"
                                            />
                                        </Button>
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={pythonLogo}
                                                alt="python logo"
                                            />
                                        </Button>
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={reactLogo}
                                                alt="react logo"
                                            />
                                        </Button>
                                    </Stack>
                                    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={htmlLogo}
                                                alt="html logo"
                                            />
                                        </Button>
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={cssLogo}
                                                alt="css logo"
                                            />
                                        </Button>
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={gitLogo}
                                                alt="git logo"
                                            />
                                        </Button>
                                    </Stack>
                                    <Stack spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                            
                                        >
                                            <CardMedia
                                                component="img"
                                                src={djangoLogo}
                                                alt="django logo"
                                            />
                                        </Button>
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={mongodbLogo}
                                                alt="mongodb logo"
                                            />
                                        </Button>
                                        <Button
                                            className={classes.aboutIcon}
                                            fullWidth
                                        >
                                            <CardMedia
                                                component="img"
                                                src={reactNativeLogo}
                                                alt="react native logo"
                                            />
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
