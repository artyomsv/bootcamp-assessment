import {connect} from 'react-redux';
import {ApplicationState} from '../../../store/store';
import {Page} from '../../../services/Rest.service';
import {push} from 'react-router-redux';
import {AppRouting} from '../../../services/Routing.service';
import MoviesView, {MoviesViewActions, MoviesViewProps} from './Movies.view';
import {fetchMoviesAction, onQueryChangeAction} from '../../../store/actions/Movies.actions';

const mapStateToProps = (state: ApplicationState) => {
  return {
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
    page: state.movies.page,
    search: state.movies.search,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMovies: (query?: string, page?: Page) => dispatch(fetchMoviesAction(query, page)),
    navigateToMovie: (id: number) => dispatch(push(AppRouting.moviesById.path(id))),
    onQueryChange: (query: string) => dispatch(onQueryChangeAction(query)),
  };
};

export default connect<MoviesViewProps, MoviesViewActions>(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesView);
