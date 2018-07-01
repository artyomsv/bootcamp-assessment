import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {IMDbActor} from '../../../../services/rest.response.types';
import Person from './../../../../assets/person.svg';

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
  },
  image: {
    width: 185,
    height: '100%',
    background: '#3f4658',
  }
});

interface ActorsGridProps {
  actors: IMDbActor[];
}

const constructPath = (path: string) => {
  if (!path) {
    return Person;
  }
  if (path && path.startsWith('http')) {
    return path;
  } else {
    return '/api/image' + path;
  }
};

const ActorsGrid: React.SFC<ActorsGridProps & WithStyles<typeof styles>> = ({actors, classes}) => (

  <div className={classes.root}>
    {
      actors.map((actor: IMDbActor) => (
        <GridListTile
          key={actor.id}
          component={'div'}
          className={classes.tile}
        >
          <img src={constructPath(actor.profile_path)} alt={actor.name} width={185} className={classes.image}/>
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
