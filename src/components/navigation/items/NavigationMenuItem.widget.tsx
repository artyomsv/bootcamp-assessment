import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme: Theme) => createStyles({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {
    width: 24,
    height: 24,
  },
});

interface NavigationMenuItemProps {
  title: string;
  icon: string;
  selected: boolean;
}

interface NavigationMenuItemActions {
  navigateTo(): void;
}

const NavigationMenuItem: React.SFC<NavigationMenuItemProps & NavigationMenuItemActions & WithStyles<typeof styles>> = (props) => (
  <MenuItem className={props.classes.menuItem} onClick={props.navigateTo} selected={props.selected}>
    <ListItemIcon className={props.classes.icon}>
      <img src={props.icon} className={props.classes.icon} alt="logo"/>
    </ListItemIcon>
    <ListItemText
      classes={{primary: props.classes.primary}}
      inset
      primary={props.title}
    />
  </MenuItem>
);

export default withStyles(styles)(NavigationMenuItem);
