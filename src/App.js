import React, { useRef } from 'react'
import "./styles/App.css"

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { About, Landing, Nav, Projects, ContactForm, Footer, Stars } from "./components/index"

import "fontsource-roboto";
import {
  Container,
  // FormControlLabel, 
  Grid,
} from '@material-ui/core/';
import { ListSubheader } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(46,125,50)",
    },
    secondary: {
      main: "rgb(999,999,999)",
    }
  },
})


const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' })

const useStyles = makeStyles({
  primaryLG: {
    fontSize: "3rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "7rem",
    },
  },
  buttonOne: {
    border: '2px solid',

  },
  buttonTwo: {
  },
  primarySM: {
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.5rem",
    },
  },
  secondaryLG: {
    fontSize: "2.5rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "5rem",
    },
  },
  secondarySM: {
    color: "white",
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "1.5rem",
    },
  },
  primaryGrid: {
    width: '90vw',
    height: '100vh',
    margin: 'auto',
  },
  secondaryGrid: {
    width: '90vw',
    // height: '100vh',
    margin: 'auto',
  },
  sections: {
    marginTop: "4rem"
  },
  card: {
    backgroundColor: "transparent"
  },
  cardMedia: {
    marginTop: '1rem',
    width: '50%',
    height: '50%',
    borderRadius: '50%',
    margin: 'auto',
  },
  navText: {
    color: "white",
    fontSize: ".9rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "1.5rem",
    },
  },
  aboutIcon: {
  },
  aboutIconContainer: {
    // [theme.breakpoints.up('md')]: {
    //   padding: "8rem"
    // },
  },
  input: {
    color: "white",
  },
  projectCard: {
    backgroundColor: "transparent",
    width: "100vw",
    [theme.breakpoints.up('md')]: {
      width: "80vw",
    },
  },
  projectContent: {
    textAlign: "left",
    color: "white",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    right: "0",
    width: "45%",
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2rem",
      width: "35%",
      backgroundColor: "transparent",
    },
  },
  projectTextLG: {
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2rem",
    },
  },
  projectTextSM: {
    fontSize: "1rem",
    [theme.breakpoints.up('md')]: {
      fontSize: "2rem",
    },
  },

  projectPhoto: {
    width: "75vw",
    [theme.breakpoints.up('md')]: {
      width: "50vw",
    },
  }
})

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const executeScrollHome = () => scrollToRef(home)
  const executeScrollAbout = () => scrollToRef(about)
  const executeScrollProjects = () => scrollToRef(projects)
  const executeScrollContact = () => scrollToRef(contact)

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters className="App">
        <Stars/>
        <Grid container>
          <Landing style={useStyles} location={home} about={executeScrollAbout} contact={executeScrollContact} />
          <ListSubheader disableGutters style={{ width: "100%" }}>
            <Nav style={useStyles} home={executeScrollHome} about={executeScrollAbout} projects={executeScrollProjects} contact={executeScrollContact} />
          </ListSubheader>
          <About style={useStyles} location={about} />
          <Projects style={useStyles} location={projects} />
          <ContactForm style={useStyles} location={contact} />
          
        </Grid>
        <Footer style={useStyles} home={executeScrollHome} about={executeScrollAbout} projects={executeScrollProjects} contact={executeScrollContact} />
      </Container>
    </ThemeProvider>
  );
}

export default App;