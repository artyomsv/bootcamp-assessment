import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = (theme: Theme) => createStyles({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0,
    minWidth: 0,
  },
  view: {
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

interface ActorsViewProps {
  component: React.ReactNode
  isFetching: boolean;
}

class MainView extends React.Component<ActorsViewProps & WithStyles<typeof styles>> {
  render() {
    const {classes, component} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {this.props.isFetching && <LinearProgress/>}
        <div className={classes.view}>
          {component}
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(MainView);
