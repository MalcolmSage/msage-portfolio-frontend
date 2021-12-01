import React from 'react';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { About, Landing, Nav } from "./components/index"

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
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters className="App">
        <Nav style={useStyles}/>
        <Grid container>
          <Landing style={useStyles}/>
          <About style={useStyles}/>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
