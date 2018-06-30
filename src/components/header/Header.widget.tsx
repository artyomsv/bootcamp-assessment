import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Theme, WithStyles} from '@material-ui/core';
import {createStyles, withStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface HeaderPropActions {
  onMenuClick(): void;
}

const Header: React.SFC<HeaderPropActions & WithStyles<typeof styles>> = ({onMenuClick, classes}) => (
  <AppBar position={'absolute'} className={classes.appBar}>
    <Toolbar>
      <IconButton className={classes.menuButton} color={'inherit'} aria-label={'Menu'} onClick={onMenuClick}>
        <MenuIcon/>
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex} noWrap>
        IMDb
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);