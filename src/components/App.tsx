import * as React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core';
import Header from './header';
import NavigationDrawer from './navigation/drawer';
import ActorsView from './views/actors';
import actors from './views/actors.mock.json';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
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
        <ActorsView actors={actors}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
