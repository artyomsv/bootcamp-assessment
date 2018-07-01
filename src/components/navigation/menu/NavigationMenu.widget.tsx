import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import Movie from '../../../assets/movie.svg';
import People from '../../../assets/people.svg';
import Home from '../../../assets/home.svg';
import {AppRouting} from '../../../services/Routing.service';
import NavigationMenuItem from '../items/NavigationMenuItem.widget';

const styles = (theme: Theme) => createStyles({
  root: {
    width: 200,
    top: 64,
  },
});

interface HeaderPropActions {
  navigateTo(path: string): void;
}

const Navigation: React.SFC<HeaderPropActions & WithStyles<typeof styles>> = ({navigateTo, classes}) => (
    <MenuList className={classes.root}>
      <NavigationMenuItem title={'Home'} icon={Home} navigateTo={() => navigateTo(AppRouting.ROOT)}/>
      <NavigationMenuItem title={'People'} icon={People} navigateTo={() => navigateTo(AppRouting.PEOPLE)}/>
      <NavigationMenuItem title={'Films'} icon={Movie} navigateTo={() => navigateTo(AppRouting.FILMS)}/>
    </MenuList>
);

export default withStyles(styles)(Navigation);
