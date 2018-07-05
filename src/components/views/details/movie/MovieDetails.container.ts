import {connect} from 'react-redux';
import {push, goBack} from 'react-router-redux';
import {ApplicationState} from '../../../../store/store';
import {AppRouting} from '../../../../services/Routing.service';
import {MovieDetailsActions, MovieDetailsProps} from './MovieDetails.view';
import MovieDetailsView from './MovieDetails.view';
import {clearStateAction, fetchMovieActorsAction, fetchMovieDetailsAction} from '../../../../store/actions/MovieDetails.actions';

const mapStateToProps = (state: ApplicationState) => {
  return {
    details: state.movie.details,
    isMovieFetching: state.movie.isMovieFetching,
    actors: state.movie.actors,
    isActorsFetching: state.movie.isActorsFetching,
  } as MovieDetailsProps;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMovieDetails: (id: number) => dispatch(fetchMovieDetailsAction(id)),
    fetchMovieActors: (id: number) => dispatch(fetchMovieActorsAction(id)),
    clearState: () => dispatch(clearStateAction()),
    navigateToActor: (id: number) => dispatch(push(AppRouting.actorsById.path(id))),
    navigateToMovie: (id: number) => dispatch(push(AppRouting.moviesById.path(id))),
    goBack: () => dispatch(goBack()),
  };
};

export default connect<MovieDetailsProps, MovieDetailsActions>(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetailsView);
