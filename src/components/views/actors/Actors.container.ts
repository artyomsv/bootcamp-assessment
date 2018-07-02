import {connect} from 'react-redux';
import ActorsView, {ActorsViewActions, ActorsViewProps} from './Actors.view';
import {ApplicationState} from '../../../store/store';
import {
  expandActorAction,
  fetchActorsAction,
  onQueryChangeAction,
  toggleViewAction
} from '../../../store/actions/Actors.actions';
import {Page} from '../../../services/Rest.service';
import {push} from 'react-router-redux';
import {AppRouting} from '../../../services/Routing.service';

const mapStateToProps = (state: ApplicationState) => {
  return {
    actors: state.actors.actors,
    isFetching: state.actors.isFetching,
    view: state.actors.view,
    expanded: state.actors.expanded,
    page: state.actors.page,
    search: state.actors.search,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchActors: (query?: string, page?: Page) => dispatch(fetchActorsAction(query, page)),
    toggleView: () => dispatch(toggleViewAction()),
    expand: (id: number) => dispatch(expandActorAction(id)),
    navigateToActor: (id: number) => dispatch(push(AppRouting.actorsById.path(id))),
    navigateToMovie: (id: number) => dispatch(push(AppRouting.moviesById.path(id))),
    onQueryChange: (query: string) => dispatch(onQueryChangeAction(query)),
  };
};

export default connect<ActorsViewProps, ActorsViewActions>(
  mapStateToProps,
  mapDispatchToProps,
)(ActorsView);
