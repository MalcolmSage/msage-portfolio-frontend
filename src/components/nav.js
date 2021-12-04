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

    const menuRoute = (location) => {
        if (location === "home" || location === "about" || location === "projects" || location === "contact") {
            props[location]()
            setAnchorEl(null);
        } else {
            setAnchorEl(null);
        }

    }
    return (
        <AppBar color="primary" position="sticky" >
            <Toolbar >
                <Button
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    color="inherit"
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
                    onClose={menuRoute}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={() => menuRoute("home")}>Home</MenuItem>
                    <MenuItem onClick={() => menuRoute("about")}>About Me</MenuItem>
                    <MenuItem onClick={() => menuRoute("projects")}>Projects</MenuItem>
                    <MenuItem onClick={() => menuRoute("contact")}>Contact</MenuItem>
                </Menu>
                <Typography className={classes.navText} onClick={() => menuRoute("home")}>
                    Malcolm Mayfield | Full Stack Developer
                </Typography>
            </Toolbar>
        </AppBar>

    );
}