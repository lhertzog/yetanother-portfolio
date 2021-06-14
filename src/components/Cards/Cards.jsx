import { Card, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

const Cards = () => {
  const classes = useStyles;
  return (
    <Card xs={12} className={classes.card}>
      Toasty
    </Card>
  );
};

export default Cards;
