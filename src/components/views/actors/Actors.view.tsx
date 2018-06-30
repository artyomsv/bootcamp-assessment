import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import ActorsGrid from './grid';

const styles = (theme: Theme) => createStyles({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

export interface Actor {
  id: number;
  name: string;
  profile: string;
  popularity: number;
}

interface ActorsViewProps {
  actors: Actor[];
}

const ActorsView: React.SFC<ActorsViewProps & WithStyles<typeof styles>> = ({actors, classes}) => (
  <main className={classes.content}>
    <div className={classes.toolbar}/>
    <ActorsGrid actors={actors}/>
  </main>
);

export default withStyles(styles)(ActorsView);