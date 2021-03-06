import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import NavigationMenu from './../menu';
import Slide from '@material-ui/core/Slide';
import {AppView} from '../../../store/reducers/Navigation.reducer';
import {AppRoutingData} from '../../../services/Routing.service';

const drawerWidth = 200;

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

interface NavigationDrawerProps {
  checked: boolean
  className?: string
  selectedPage: AppView;
}

interface NavigationDrawerActions {
  navigateTo(path: AppRoutingData): void
}

const NavigationDrawer: React.SFC<NavigationDrawerProps & NavigationDrawerActions & WithStyles<typeof styles>> = (
  {navigateTo, checked, classes, selectedPage, className}
) => (
  <Slide direction={'right'} in={checked} mountOnEnter unmountOnExit>
    <Drawer
      className={className}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <NavigationMenu navigateTo={navigateTo} selectedPage={selectedPage}/>
    </Drawer>

  </Slide>
);

export default withStyles(styles)(NavigationDrawer);
