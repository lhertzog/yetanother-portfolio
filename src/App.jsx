import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import React, { useState } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import NavBar from './components/NavBar/NavBar';

const useStyle = makeStyles(() => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

const App = () => {
  const [prefersDarkMode, setstateDarkMode] = useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  // eslint-disable-next-line no-unused-vars
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        prefersDarkMode={prefersDarkMode}
        setstateDarkMode={setstateDarkMode}
      />
      <main>
        <Portfolio setstateDarkMode={setstateDarkMode} />
      </main>
      <footer />
    </ThemeProvider>
  );
};

export default App;
