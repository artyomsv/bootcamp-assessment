import {connect} from 'react-redux';
import {push, goBack} from 'react-router-redux';
import {ApplicationState} from '../../../../store/store';
import {AppRouting} from '../../../../services/Routing.service';
import {MovieDetailsActions, MovieDetailsProps} from './MovieDetails.view';
import MovieDetailsView from './MovieDetails.view';
import {clearStateAction, fetchMovieDetailsAction} from '../../../../store/actions/MovieDetails.actions';

const mapStateToProps = (state: ApplicationState) => {
  return {
    details: state.movie.details,
    isFetching: state.movie.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMovieDetails: (id: number) => dispatch(fetchMovieDetailsAction(id)),
    clearState: () => dispatch(clearStateAction()),
    navigateToActor: (id: number) => dispatch(push(AppRouting.actorById.path(id))),
    goBack: () => dispatch(goBack()),
  };
};

export default connect<MovieDetailsProps, MovieDetailsActions>(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetailsView);
