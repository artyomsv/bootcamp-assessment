import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import Header from './header';
import NavigationDrawer from './navigation/drawer';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch} from 'react-router';
import {history} from '../store/store';
import {AppRouting} from '../services/Routing.service';
import * as Loadable from 'react-loadable';
import ReduxToastr from 'react-redux-toastr';
import LoadingComponentProps = LoadableExport.LoadingComponentProps;
import MainView from './views/Main.view';

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

const Loading = (props: LoadingComponentProps) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <MainView isFetching={true} component={<React.Fragment/>}/>;
  } else {
    return null;
  }
};

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

            <Route
              exact
              path={AppRouting.root.path()}
              component={Loadable({
                loader: () => import(/* webpackChunkName: "home" */ './views/home'),
                loading: Loading,
              })}
            />

            <Route
              exact
              path={AppRouting.actors.path()}
              component={Loadable({
                loader: () => import(/* webpackChunkName: "actors" */ './views/actors'),
                loading: Loading,
              })}
            />

            <Route exact path={AppRouting.movies.path()}>
              <div>Films</div>
            </Route>

            <Route
              exact
              path={AppRouting.actorsById.path(':id')}
              component={Loadable({
                loader: () => import(/* webpackChunkName: "actors_details" */ './views/details/actor/index'),
                loading: Loading,
              })}
            />

            <Route
              exact
              path={AppRouting.moviesById.path(':id')}
              component={Loadable({
                loader: () => import(/* webpackChunkName: "movies_details" */ './views/details/movie/index'),
                loading: Loading,
              })}
            />

          </Switch>
        </ConnectedRouter>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
