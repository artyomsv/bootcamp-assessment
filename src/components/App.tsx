import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import Header from './header';
import NavigationDrawer from './navigation/drawer';
import ActorsView from './views/actors';
import {ConnectedRouter} from 'react-router-redux';
import {Switch} from 'react-router';
import {Route} from 'react-router';
import {history} from '../store/store';
// import {AppRouting} from '../services/Routing.service';
// import actors from './views/actors.mock.json';
import MainView from './views/Main.view';
import {AppRouting} from '../services/Routing.service';

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
        {/*<ActorsView actors={actors}/>*/}
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/">
              <MainView component={<div>Hello</div>} isFetching={true}/>
            </Route>
            <Route exact path={AppRouting.PEOPLE} component={ActorsView}/>
            <Route exact path={AppRouting.FILMS}>
              <MainView component={<div>Films</div>} isFetching={true}/>
            </Route>
            {/*<Route path={AppRouting.PEOPLE} component={ActorsView}/>*/}
            {/*<Route path={AppRouting.FILMS} render={() => <div>Films</div>}/>*/}
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);
