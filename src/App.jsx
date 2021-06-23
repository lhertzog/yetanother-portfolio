import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import NavBar from './components/NavBar/NavBar';

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
