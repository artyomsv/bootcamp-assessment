import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import Header from './header';
import NavigationDrawer from './navigation/drawer';
import ActorsView from './views/actors';
import HomeView from './views/home';
import {ConnectedRouter} from 'react-router-redux';
import {Switch} from 'react-router';
import {Route} from 'react-router';
import {history} from '../store/store';
import MainView from './views/Main.view';
import {AppRouting} from '../services/Routing.service';
import ActorDetailsView from './views/details/actor/index'

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component<WithStyles<typeof styles>> {

  constructor(props: WithStyles<typeof styles>) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Header/>
        <NavigationDrawer/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={AppRouting.root.path()} component={HomeView}/>
            <Route exact path={AppRouting.actors.path()} component={ActorsView}/>
            <Route exact path={AppRouting.movies.path()}>
              <MainView component={<div>Films</div>} isFetching={true}/>
            </Route>
            <Route exact path={AppRouting.actorsById.path(':id')} component={ActorDetailsView}/>
            <Route exact path={AppRouting.moviesById.path(':id')}>
              <MainView component={<div>Movie Details</div>} isFetching={true}/>
            </Route>
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);
