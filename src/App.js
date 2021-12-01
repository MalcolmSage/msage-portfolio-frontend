import React, { useRef } from 'react'

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { About, Landing, Nav, Projects, ContactForm} from "./components/index"

import "fontsource-roboto";
import {
  Container,
  // FormControlLabel, 
  Grid,
} from '@material-ui/core/';

const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: green[500],
    }
  }
})


const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' })

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
  secondaryGrid: {
    width: '100vw',
    height: '100vh',
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
        <Grid container>
          <Nav style={useStyles} home={executeScrollHome} about={executeScrollAbout} projects={executeScrollProjects} contact={executeScrollContact} />

          <Landing style={useStyles} location={home} about={executeScrollAbout} contact={executeScrollContact}/>
          <About style={useStyles} location={about}/>
          <Projects style={useStyles} location={projects}/>
          <ContactForm style={useStyles} location={contact}/>

        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
