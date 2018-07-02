import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import ActorsGrid from './grid';
import ActorsList from './list';
import MainView from './../Main.view';
import {Page} from '../../../services/Rest.service';
import {IMDbActor} from '../../../services/rest.response.types';
import Switch from '@material-ui/core/Switch';
import {ActorsViewType} from '../../../store/reducers/Actors.reducer';
import Pagination from '../../common/pagination/Pagination.widget';
import TextField from '@material-ui/core/TextField';
import * as debounce from 'lodash.debounce';

const styles = (theme: Theme) => createStyles({
  top: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export interface ActorsViewProps {
  actors: IMDbActor[];
  view: ActorsViewType;
  isFetching: boolean;
  expanded: number;
  page: Page;
  search: string;
}

export interface ActorsViewActions {
  fetchActors(search?: string, page?: Page): void;

  onQueryChange(search: string): void;

  toggleView(): void;

  expand(id: number): void;

  navigateToActor(id: number): void;

  navigateToMovie(id: number): void;
}

class ActorsView extends React.Component<ActorsViewProps & ActorsViewActions & WithStyles<typeof styles>> {

  constructor(props: ActorsViewProps & ActorsViewActions & WithStyles<typeof styles>) {
    super(props);
    this.fetchActorsDebounced = debounce(this.fetchActorsDebounced, 500);
  }

  componentDidMount(): void {
    this.props.fetchActors(this.props.search, this.props.page);
  }

  fetchActorsDebounced = (search: string) => {
    this.props.fetchActors(search, this.props.page);
  };

  handleChange = (name: string) => (event: any) => {
    const search = event.target.value;
    this.props.onQueryChange(search);
    if (search.length >= 3 || search.length === 0) {
      this.fetchActorsDebounced(search);
    }

  };

  renderActorsView = () => (
    <div>
      <div className={this.props.classes.top}>
        <div>
          <Switch
            checked={this.props.view === 'grid'}
            onChange={this.props.toggleView}
            aria-label="collapse"
          />
        </div>
        <TextField
          id="search"
          label="Search field"
          type="search"
          value={this.props.search}
          className={this.props.classes.textField}
          onChange={this.handleChange('search')}
          margin="normal"
        />
        <Pagination
          page={this.props.page}
          onChangePage={(event: any, page: number) => this.props.fetchActors(this.props.search, {
            ...this.props.page,
            page
          })}
        />
      </div>
      {
        this.props.view === 'grid' ?
          <ActorsGrid
            actors={this.props.actors}
            navigateToActor={this.props.navigateToActor}
          /> :
          <ActorsList
            actors={this.props.actors}
            expanded={this.props.expanded}
            expand={this.props.expand}
            navigateToActor={this.props.navigateToActor}
            navigateToMovie={this.props.navigateToMovie}
          />
      }
    </div>
  );

  render() {
    return (
      <MainView
        component={this.props.actors.length > 0 && this.renderActorsView()}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default withStyles(styles)(ActorsView);
