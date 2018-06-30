import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {Actor} from '../Actors.view';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tile: {
    padding: 10,
  },
  title: {
    fontSize: '0.8rem',
    fontWeight: 300,
  }
});

interface ActorsGridProps {
  actors: Actor[];
}

const ActorsGrid: React.SFC<ActorsGridProps & WithStyles<typeof styles>> = ({actors, classes}) => (

  <div className={classes.root}>
    {
      actors.map((actor: Actor) => (
        <GridListTile key={actor.id} component={'div'} className={classes.tile}>
          <img src={actor.profile} alt={actor.name}/>
          <GridListTileBar
            title={<span className={classes.title}>{actor.name}</span>}
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon/>
              </IconButton>
            }
          />
        </GridListTile>
      ))
    }
  </div>

);

export default withStyles(styles)(ActorsGrid);