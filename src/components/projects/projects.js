import React from 'react';
import "fontsource-roboto";
import {
    Grid,
    Typography,
} from '@material-ui/core/';
import { Project } from './project';

const projects = [
    {
        title: "G.R.I.T.",
        content: "A Front-End application that leverages the Github API. Built with JavaScript, React and Material UI",
        image: "https://user-images.githubusercontent.com/80055719/154380500-92736cb1-b38d-4740-8258-b8bca0a10b12.png",
        live: "https://msagegrit.netlify.app/",
        git: "https://github.com/MalcolmSage/github-comparison-frontend"
    },
    {
        title: "Marvel Heroes",
        content: "A Marvel Hero search engine. Built with JavaScript, React and Material UI",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "https://msagemarvelsearch.netlify.app/",
        git: "https://github.com/MalcolmSage/marvel-search-frontend"
    },
    {
        title: "Sage Weather",
        content: "A weather search engine. Built with JavaScript, React and Material UI",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "https://msageweather.netlify.app/",
        git: "https://github.com/MalcolmSage/weather-forecast-frontend"
    },
    {
        title: "Super Genius",
        content: "A Full-Stack CRUD for displaying artists and songs. Built with express, JavaScript, mongoose, heroku, mongo atlas.",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "https://github.com/daveeasley550/super_genius_back",
        git: "https://github.com/daveeasley550/super_genius_back"
    },
    {
        title: "Sebas",
        content: "Discord Bot that provides admin assistance. Built with Python",
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        live: "https://github.com/MalcolmSage/Sebastian",
        git: "https://github.com/MalcolmSage/Sebastian"
    },
]

export function Projects(props) {
    const classes = props.style()
    return (
        <Grid container className={classes.secondaryGrid} ref={props.location}>
            <Grid container justifyContent="center" alignContent="flex-start" className={classes.sections}>
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
