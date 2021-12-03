import React from 'react';
import "fontsource-roboto";
import {
    Box,
    Grid,
    Typography,
} from '@material-ui/core/';
import { Project } from './project';

function displayProjects(props) {

    // return (

    // )
}

const projects = [
    {
        title: "TITL",
        content: "A short description of the project, and the languages, tools and databases.",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "",
        git: ""
    },
    {
        title: "TITTLE",
        content: "A short description of the project, and the languages, tools and databases.",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "",
        git: ""
    },
    {
        title: "TI",
        content: "A short description of the project, and the languages, tools and databases.",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "",
        git: ""
    },
]

export function Projects(props) {
    const classes = props.style()
    return (
        <Grid container className={classes.secondaryGrid} ref={props.location} >
            <Grid container justifyContent="center" alignContent="flex-start" className={classes.sections} spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h1" className={classes.secondaryLG}>Projects</Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={4}>
                        {projects.map((item) => (
                            <Grid item key={item.title}>
                                <Project style={props.style} project={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
