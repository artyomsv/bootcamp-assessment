import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import NavigationMenu from './../menu';

const drawerWidth = 200;

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

interface NavigationDrawerProps {
  className?: string
}

const NavigationDrawer: React.SFC<NavigationDrawerProps & WithStyles<typeof styles>> = ({classes, className}) => (
  <Drawer
    className={className}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <NavigationMenu navigateTo={(path: string) => console.log(path)}/>
  </Drawer>
);

export default withStyles(styles)(NavigationDrawer);