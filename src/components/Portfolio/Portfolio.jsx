/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Switch,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import React from 'react';
import FlexMultimedia from '../Mission/FlexMultimedia';

const useStyle = makeStyles((theme) => ({
  portfolio: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 1, 1),
  },
  paragraph: {
    margin: '60px',
  },
  beanRoot: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

const Portfolio = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.portfolio}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary">
            Hi, I&apos;m mostly a back-end developer.
          </Typography>
          {/* <Typography
            paragraph
            className={classes.paragraph}
            align="justify"
            color="textSecondary"
          >
            
          </Typography> */}
        </Container>
      </div>
      <Container className={classes.beanRoot}>
        <Grid container justify="center" spacing={2} maxWidth="md">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Experience
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2} maxWidth="md">
          <Grid item xs={12} sm={12} md={6}>
            <FlexMultimedia
              title="Intern Software developer at Flex Multimedia"
              location="Geneva, Switzerland"
              responsibilities={[
                'Maintenance on the back-end application',
                'Implementing new features on the back-end application',
              ]}
              date="04/2017 – 10/2017"
              technologies={['Java 8', 'Spring Boot', 'MySQL', 'Git']}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FlexMultimedia
              title="Software developer at Flex Multimedia"
              location="Geneva, Switzerland"
              responsibilities={[
                'Maintenance on the back-end application',
                'Implementing new features on the back-end application',
                'Creating front-end services using ReactJS',
              ]}
              date="10/2017 – 04/2018"
              technologies={[
                'Java 8',
                'Spring Boot',
                'JavaScript',
                'ReactJS',
                'MySQL',
                'Git',
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FlexMultimedia
              title="Java Backend Software developer at Sfeir, on mission for PSA"
              location="Strasbourg, France"
              responsibilities={[
                'Creating new back-end REST libraries in a micro service architecture using Spring Boot',
              ]}
              date="10/2017 – 04/2018"
              technologies={[
                'Java 8',
                'Spring Boot',
                'RabbitMQ',
                'MongoDB',
                'Git',
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FlexMultimedia
              title="Java Software developer at Sfeir, on mission for Cryostar"
              location="Hésingue, France"
              responsibilities={[
                'Creating a new chart viewing application using Swing and JFreeChart',
                'Creating a new continuous recording data application using MongoDB',
              ]}
              date="04/2019 – 04/2020"
              technologies={['Java 8', 'Swing', 'JFreeChart', 'MongoDB', 'Svn']}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FlexMultimedia
              title="Java Software developer at Sfeir, on mission for Pôle emploi"
              location="Strasbourg, France"
              responsibilities={[
                'Implementing new features on the existing applications',
                'Participating in the creation and evolution of the new features',
              ]}
              date="05/2018 – present"
              technologies={[
                'Java 8',
                'JPA',
                'Oracle Database',
                'Angular',
                'Git',
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;