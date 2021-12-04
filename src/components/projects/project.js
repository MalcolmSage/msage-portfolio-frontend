import * as React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core/';
// import { Button, ButtonGroup } from '@mui/material';

export function Project(props) {
    const classes = props.style()
    const project = props.project
    return (
        <Card elevation={0} className={classes.projectCard}>
            <Box sx={{ display: 'flex' }} >
                <CardActionArea className={classes.projectPhoto}>
                    <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                    />
                </CardActionArea>
                <CardContent className={classes.projectContent}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h1" className={classes.projectTextLG}>
                                {project.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h1" className={classes.projectTextSM}>
                                {project.content}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonGroup
                                color="primary"
                                
                            >
                                <Button
                                    className={classes.buttonOne}
                                    
                                >
                                    Live
                                </Button>
                                <Button
                                    variant="contained"
                                    className={classes.buttonTwo}
                                >
                                    Docs
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
        </Card>
    );
}
