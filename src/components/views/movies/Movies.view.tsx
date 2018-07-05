import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import ItemsGrid from '../../common/grid';
import MainView from './../Main.view';
import {Page} from '../../../services/Rest.service';
import {IMDbMovie} from '../../../services/rest.response.types';
import Pagination from '../../common/pagination/Pagination.widget';
import TextField from '@material-ui/core/TextField';
import * as debounce from 'lodash.debounce';

const styles = (theme: Theme) => createStyles({
  top: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 80,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    marginTop: 0,
    marginBottom: 18,
  },
});

export interface MoviesViewProps {
  movies: IMDbMovie[];
  isFetching: boolean;
  page: Page;
  search: string;
}

export interface MoviesViewActions {
  fetchMovies(search?: string, page?: Page): void;

  onQueryChange(search: string): void;

  navigateToMovie(id: number): void;
}

class ActorsView extends React.Component<MoviesViewProps & MoviesViewActions & WithStyles<typeof styles>> {

  constructor(props: MoviesViewProps & MoviesViewActions & WithStyles<typeof styles>) {
    super(props);
    this.fetchMoviesDebounced = debounce(this.fetchMoviesDebounced, 500);
  }

  componentDidMount(): void {
    this.props.fetchMovies(this.props.search, this.props.page);
  }

  fetchMoviesDebounced = (search: string) => {
    this.props.fetchMovies(search, this.props.page);
  };

  handleChange = (name: string) => (event: any) => {
    const search = event.target.value;
    this.props.onQueryChange(search);
    if (search.length >= 3 || search.length === 0) {
      this.fetchMoviesDebounced(search);
    }
  };

  render() {
    return (
      <MainView
        component={(
          <div>
            <div className={this.props.classes.top}>
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
                onChangePage={(event: any, page: number) => this.props.fetchMovies(this.props.search, {
                  ...this.props.page,
                  page
                })}
              />
            </div>
            <ItemsGrid values={this.props.movies} navigateTo={this.props.navigateToMovie}
            />
          </div>
        )}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default withStyles(styles)(ActorsView);
