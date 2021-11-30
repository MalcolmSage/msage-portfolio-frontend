import React from 'react';
import './App.css';
import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles, ThemeProvider, createTheme  } from '@material-ui/core/styles';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { green } from '@material-ui/core/colors';
import { ArrowDownward, EmailRounded } from '@material-ui/icons';

import { About } from "./components/index"

import "fontsource-roboto";
import { 
  AppBar,
  Button, 
  ButtonGroup, 
  Container, 
  // FormControlLabel, 
  Grid,
  IconButton,
  Toolbar,
  Typography, 
} from '@material-ui/core/';

const theme = createTheme({
  palette:{
    primary: {
      main: green[800],
    },
    secondary: {
      main: green[500],
    }
  }
})

const useStyles = makeStyles({
  primaryLG: {
    fontSize: "3rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "7rem",
    },
  },
  primarySM: {
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.5rem",
    },
  },
  secondarySM: {
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2rem",
    },
  },
  mainGrid: {
    overflow: "hidden",
  },
  secondaryGrid: {
    width: '100vw',
    height: '100vh',
    // overflow: "scroll",
    // spacing: 0,
    // justify: 'space-around'
  }
})

// function ContactForm() {
//   const [checked, setChecked] = React.useState(true)
//   return (
//     <FormControlLabel
//       control={<Checkbox
//         checked={checked}
//         onChange={(e) => setChecked(e.target.checked)}
//         inputProps={{
//           "aria-label": "secondary checkbox"
//         }}
//       />}
//       label="Testing testbox"
//     />

//   )
// }

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters>
        <div className="App">
          <header className="App-header">
            <AppBar color="primary">
              <Toolbar >
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography className={classes.secondarySM}>
                  Malcolm Mayfield | Full Stack Dev
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid container className={classes.mainGrid}>
              <Grid container className={classes.secondaryGrid}>
                <Grid container justifyContent="center" alignContent="flex-end" style={{ overflow: 'hidden' }}>
                  <Grid item>
                    <Typography variant="h2" className={classes.primaryLG}>I'm <Typography display="inline" color="primary"className={classes.primaryLG}>Malcolm</Typography>.</Typography>
                    <Typography variant="h2" className={classes.primarySM}>
                      A full-stack web-developer with a <Typography display="inline" color="primary"className={classes.primarySM}>passion</Typography> for innovation.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" >
                  <Grid item>
                    <ButtonGroup 
                      variant="outlined" 
                      style={{ marginTop: "1rem" }}
                      size="large">
                      <Button
                        startIcon={<ArrowDownward/>}
                        style={{ border: '2px solid' }}
                        color="primary">
                        About Me
                      </Button>
                      <Button
                        startIcon={<EmailRounded/>}
                        variant="contained"
                        color="primary">
                        Contact Me
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
              <About/>
              {/* <Grid container className={classes.secondaryGrid} style={{ overflow: 'hidden' }}>
                <Grid container justifyContent="center" alignContent="flex-end">
                  <Grid item >
                    <Typography variant="h1" className={classes.primaryLG}>I'm <Typography display="inline" color="primary"className={classes.primaryLG}>Malcolm</Typography>.</Typography>
                    <Typography variant="h1" className={classes.primarySM}>
                      A full-stack web-developer with a <Typography display="inline" color="primary"className={classes.primarySM}>passion</Typography> for innovation.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" >
                  <Grid item>
                    <ButtonGroup 
                      variant="outlined" 
                      style={{ marginTop: "1rem" }}
                      size="large">
                      <Button
                        startIcon={<ArrowDownward/>}
                        style={{ border: '2px solid' }}
                        color="primary">
                        About Me
                      </Button>
                      <Button
                        startIcon={<EmailRounded/>}
                        variant="contained"
                        color="primary">
                        Contact Me
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid> */}
            </Grid>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
