import React from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import "fontsource-roboto";
import {
    AppBar,
    Button,
    Fade,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core/';

export function Nav(props) {
    const classes = props.style()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const moveHome = () => {
        props.home();
        handleClose();
    }
    const moveAbout = () => {
        props.about();
        handleClose();
    }
    const moveProfile = () => {
        props.projects();
        handleClose();
    }
    const moveContact = () => {
        props.contact();
        handleClose();
    }
    console.log()
    return (
        <AppBar color="primary">
            <Toolbar >
                <Button
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={moveHome}>Home</MenuItem>
                    <MenuItem onClick={moveAbout}>About Me</MenuItem>
                    <MenuItem onClick={moveProfile}>Projects</MenuItem>
                    <MenuItem onClick={moveContact}>Contact</MenuItem>
                </Menu>
                <Typography className={classes.secondarySM} onClick={moveHome}>
                    Malcolm Mayfield | Full Stack Developer
                </Typography>
            </Toolbar>
        </AppBar>

    );
}