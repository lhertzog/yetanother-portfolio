import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const MissionCard = ({
  title,
  date,
  location,
  responsibilities,
  technologies,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((oldExpand) => !oldExpand);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        align="center"
        title={<Typography variant="h6">{title}</Typography>}
      />
      <CardContent>
        <Typography color="textSecondary" paragraph align="right">
          {date}
        </Typography>
        <Typography color="textSecondary" paragraph align="left">
          {location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Responsibilities
            <ul>
              {responsibilities &&
                responsibilities.map((elem) => <li>{elem}</li>)}
            </ul>
          </Typography>
          <Typography paragraph>
            Technologies used:
            <ul>
              {technologies && technologies.map((elem) => <li>{elem}</li>)}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

MissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(String).isRequired,
  technologies: PropTypes.arrayOf(String).isRequired,
};

export default MissionCard;
