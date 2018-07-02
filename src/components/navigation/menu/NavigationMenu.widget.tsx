import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import Movie from '../../../assets/movie.svg';
import People from '../../../assets/people.svg';
import Home from '../../../assets/home.svg';
import {AppRouting, AppRoutingData} from '../../../services/Routing.service';
import NavigationMenuItem from '../items/NavigationMenuItem.widget';
import {AppView} from '../../../store/reducers/Navigation.reducer';

const styles = (theme: Theme) => createStyles({
  root: {
    width: 200,
    top: 64,
  },
});

interface HeaderProps {
  selectedPage: AppView;
}

interface HeaderActions {
  navigateTo(path: AppRoutingData): void;
}

const Navigation: React.SFC<HeaderProps & HeaderActions & WithStyles<typeof styles>> = ({navigateTo, selectedPage, classes}) => (
  <MenuList className={classes.root}>
    <NavigationMenuItem
      selected={selectedPage === 'home'}
      title={'Home'}
      icon={Home}
      navigateTo={() => navigateTo(AppRouting.root)}
    />

    <NavigationMenuItem
      selected={selectedPage === 'actors'}
      title={'Actors'}
      icon={People}
      navigateTo={() => navigateTo(AppRouting.actors)}
    />

    <NavigationMenuItem
      selected={selectedPage === 'movies'}
      title={'Movies'}
      icon={Movie}
      navigateTo={() => navigateTo(AppRouting.movies)}
    />
  </MenuList>
);

export default withStyles(styles)(Navigation);
