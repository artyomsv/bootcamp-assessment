import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as classNames from 'classnames';

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
  progress: {
    height: 5,
  }
});

interface ActorsViewProps {
  component: React.ReactNode
  isFetching?: boolean;
  className?: string;
}

class MainView extends React.Component<ActorsViewProps & WithStyles<typeof styles>> {
  render() {
    const {classes, component} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <div className={classes.progress}>
          {this.props.isFetching && <LinearProgress/>}
        </div>
        <div className={classNames(this.props.className, classes.view)}>
          {component}
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(MainView);
