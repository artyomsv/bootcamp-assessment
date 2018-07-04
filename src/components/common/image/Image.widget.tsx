import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {constructPathNoFallBack} from '../../views/actors/Actors.utils';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Silent from '../../../assets/silent.svg';

const styles = (theme: Theme) => createStyles({
  image: {
    border: 'solid 1px lighgrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ImageProps {
  path: string;
  resolution: number;
  width: number;

  onClick?(): void;
}

interface ImageState {
  isLoading: boolean;
  path: string;
}

class Image extends React.Component<ImageProps & WithStyles<typeof styles>, ImageState> {

  constructor(props: ImageProps & WithStyles<typeof styles>) {
    super(props);
    this.state = {
      isLoading: true,
      path: constructPathNoFallBack(this.props.path, this.props.resolution),
    };
  }

  handleImageError = (event: any) => {
    this.setState({isLoading: false, path: Silent});
  };

  handleImageLoad = (event: any) => {
    this.setState({...this.state, isLoading: false});
  };

  render() {
    return (
      <div>
        {
          this.state.isLoading &&
          <img
            src={this.state.path}
            alt={''}
            width={0}
            onLoad={this.handleImageLoad}
            onError={this.handleImageError}
          />
        }
        <div
          style={{
            width: this.props.width,
            cursor: this.props.onClick ? 'pointer' : 'auto',
          }}
          className={this.props.classes.image}
        >
          {
            this.state.isLoading ?
              <CircularProgress size={this.props.width < 50 ? 20 : 60}/> :
              <img
                src={this.state.path}
                alt={''}
                width={this.props.width}
                onClick={this.props.onClick}
              />
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Image);
