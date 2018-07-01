import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import NavigationMenu from './../menu';
import Slide from '@material-ui/core/Slide';

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
}

const NavigationDrawer: React.SFC<NavigationDrawerProps & WithStyles<typeof styles>> = ({checked, classes, className}) => (
  <Slide direction={'right'} in={checked} mountOnEnter unmountOnExit>
    <Drawer
      className={className}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <NavigationMenu navigateTo={(path: string) => console.log(path)}/>
    </Drawer>

  </Slide>
);

export default withStyles(styles)(NavigationDrawer);
