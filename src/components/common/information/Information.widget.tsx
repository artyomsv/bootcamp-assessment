import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import * as isArray from 'lodash.isarray';

const styles = (theme: Theme) => createStyles({
  label: {
    fontWeight: 500,
    textAlign: 'left',
    paddingRight: '1em',
    paddingTop: '0.5em',
  },
  value: {
    fontWeight: 200,
    paddingTop: '0.5em',
  },
  row: {
    display: 'flex',
  },
});

interface InformationProps {
  label: string;
  value: string | number | string[] | number[];
  fontSize?: number;
  width?: number;
}

const Information: React.SFC<InformationProps & WithStyles<typeof styles>> = ({label, value, fontSize = 16, width = 100, classes}) => (
  <React.Fragment>
    {
      isArray(value) ?
        (value as any[]).map((v, index) => (
          <div className={classes.row} key={`${label}|${index}`}>
            <div style={{fontSize, width, minWidth: width}} className={classes.label}>{`${index === 0 ? label + ':' : ''}`}</div>
            <div style={{fontSize}} className={classes.value}>{v}</div>
          </div>
        )) :
        <div className={classes.row}>
          <div style={{fontSize, width, minWidth: width}} className={classes.label}>{label}:</div>
          <div style={{fontSize}} className={classes.value}>{value}</div>
        </div>
    }
  </React.Fragment>
);

export default withStyles(styles)(Information);
