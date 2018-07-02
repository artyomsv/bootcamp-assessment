import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import MainView from './../Main.view';
import IMDb from './../../../assets/imdb.svg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  root: {
    height: 'calc(100vh - 128px)',
  },
  view: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    cursor: 'pointer',
  },
  headlines: {
    textAlign: 'center',
    color: '#919191'
  },
  linkText: {
    color: '#686868'
  }

});

export interface ActorsViewActions {
  navigateToActors(): void;

  navigateToMovies(): void;
}

const HomeView: React.SFC<ActorsViewActions & WithStyles<typeof styles>> = ({navigateToActors, navigateToMovies, classes}) => (
  <MainView
    component={(
      <div className={classes.view}>
        <div>
          <img src={IMDb} className={''} alt="logo" height={200}/>
        </div>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h1" className={classes.headlines}>
            Welcome!
          </Typography>
          <Typography variant="headline" component="h4" className={classes.headlines}>
            If you are interested in actors and movies than that's the right place for you!
          </Typography>
          <ul>
            <li>
              <span className={classes.linkText}>{'Information about actors can be found '}</span>
              <span onClick={navigateToActors} className={classes.link}>here</span>.
            </li>
            <li>
              <span className={classes.linkText}>{'If you want to know more about movies please proceed '}</span>
              <span onClick={navigateToMovies} className={classes.link}>here</span>.
            </li>
          </ul>
        </Paper>
      </div>
    )}
    className={classes.root}
  />
);

export default withStyles(styles)(HomeView);
