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

const useStyles = makeStyles((theme) => ({
  root: {},

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

const FlexMultimedia = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((oldExpand) => !oldExpand);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        align="center"
        title={
          <Typography variant="h6">
            Intern Software developer at Flex Multimedia
          </Typography>
        }
      />
      <CardContent>
        <Typography color="textSecondary" paragraph align="right">
          04/2017 – 10/2017
        </Typography>
        <Typography color="textSecondary" paragraph align="left">
          Geneva, Switzerland
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
              <li>Maintenance on the back-end application</li>
              <li>Implementing new features on the back-end application</li>
            </ul>
          </Typography>
          <Typography paragraph>
            Technologies used:
            <ul>
              <li>Java 8</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>GIT</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default FlexMultimedia;
