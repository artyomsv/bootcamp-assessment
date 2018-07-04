import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {IMDbKnownActor} from '../../../services/rest.response.types';
import Image from '../image/Image.widget';

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
    width: 195,
    height: 288,
  },
  title: {
    fontSize: '0.8rem',
    fontWeight: 300,
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ItemsGridProps {
  values: IMDbKnownActor[];
}

interface ItemsGridActions {
  navigateTo(id: number): void;
}

const ItemsGrid: React.SFC<ItemsGridProps & ItemsGridActions & WithStyles<typeof styles>> = ({navigateTo, values, classes}) => (

  <div className={classes.root}>
    {
      values.map((value: IMDbKnownActor) => (
        <GridListTile
          key={value.id}
          component={'div'}
          className={classes.tile}
        >
          <div className={classes.image}>
            <Image
              path={value.profile_path}
              resolution={185}
              width={185}
            />
          </div>
          <GridListTileBar
            title={<span className={classes.title}>{value.name}</span>}
            actionIcon={
              <IconButton className={classes.icon} onClick={() => navigateTo(value.id)}>
                <InfoIcon/>
              </IconButton>
            }
          />
        </GridListTile>
      ))
    }
  </div>

);

export default withStyles(styles)(ItemsGrid);
