import {connect} from 'react-redux';
import ActorDetailsView, {ActorDetailsActions, ActorDetailsProps} from './ActorDetails.view';
import {push, goBack} from 'react-router-redux';
import {ApplicationState} from '../../../../store/store';
import {clearStateAction, fetchActorDetailsAction} from '../../../../store/actions/ActorDetails.actions';
import {AppRouting} from '../../../../services/Routing.service';

const mapStateToProps = (state: ApplicationState) => {
  return {
    details: state.actor.details,
    movies: state.actor.movies,
    isFetching: state.actor.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchActorDetails: (id: number) => dispatch(fetchActorDetailsAction(id)),
    clearState: () => dispatch(clearStateAction()),
    navigateToMovie: (id: number) => dispatch(push(AppRouting.moviesById.path(id))),
    goBack: () => dispatch(goBack()),
  };
};

export default connect<ActorDetailsProps, ActorDetailsActions>(
  mapStateToProps,
  mapDispatchToProps,
)(ActorDetailsView);
