import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import ActorsGrid from './grid';
import MainView from './../Main.view';
import {Page} from '../../../services/Rest.service';
import {IMDbActor} from '../../../services/rest.response.types';
import Switch from '@material-ui/core/Switch';
import {ActorsViewType} from '../../../store/reducers/Actors.reducer';

const styles = (theme: Theme) => createStyles({
  content: {},
});

interface ActorsViewProps {
  actors: IMDbActor[];
  view: ActorsViewType;
  isFetching: boolean;
}

interface ActorsViewActions {
  fetchActors(page?: Page): void;

  toggleView(): void;
}

class ActorsView extends React.Component<ActorsViewProps & ActorsViewActions & WithStyles<typeof styles>> {

  componentDidMount(): void {
    this.props.fetchActors();
  }

  renderActorsView = () => (
    <div>
      <Switch checked={this.props.view === 'grid'} onChange={this.props.toggleView} aria-label="collapse"/>
      {
        this.props.view === 'grid' ?
          <ActorsGrid actors={this.props.actors}/> :
          this.props.actors.map((actor) => <div key={actor.id}>{actor.name}</div>)
      }

    </div>
  );

  render() {
    return (
      <MainView
        component={!this.props.isFetching && this.renderActorsView()}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default withStyles(styles)(ActorsView);
