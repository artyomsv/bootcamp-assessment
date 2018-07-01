import {connect} from 'react-redux';
import ActorsView from './Actors.view';
import {ApplicationState} from '../../../store/store';
import {fetchActorsAction, toggleViewAction} from '../../../store/actions/Actors.actions';
import {Page} from '../../../services/Rest.service';

const mapStateToProps = (state: ApplicationState) => {
  return {
    actors: state.actors.actors,
    isFetching: state.actors.isFetching,
    view: state.actors.view,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchActors: (page?: Page) => dispatch(fetchActorsAction(page)),
    toggleView: () => dispatch(toggleViewAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActorsView);
