/* eslint-disable react/prop-types */
import React from 'react';

import CodeIcon from '@material-ui/icons/Code';
import {
  AppBar,
  FormControlLabel,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ prefersDarkMode, setstateDarkMode }) => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CodeIcon className={classes.icon} />
        <Typography variant="h5" className={classes.title}>
          Yet another portfolio
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={prefersDarkMode}
              onChange={() => setstateDarkMode((bool) => !bool)}
              name="checkedA"
              color="inherit"
            />
          }
          label="Dark theme"
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
