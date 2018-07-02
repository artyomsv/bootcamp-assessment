import {connect} from 'react-redux';
import HomeView from './Home.view';
import {ApplicationState} from '../../../store/store';
import {push} from 'react-router-redux';
import {AppRouting} from '../../../services/Routing.service';
import {openNavigationAction, selectViewAction} from '../../../store/actions/Navigation.actions';

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    navigateToActors: () => {
      dispatch(push(AppRouting.actors.path()));
      dispatch(openNavigationAction());
      dispatch(selectViewAction(AppRouting.actors.view));
    },
    navigateToMovies: () => {
      dispatch(push(AppRouting.movies.path()));
      dispatch(openNavigationAction());
      dispatch(selectViewAction(AppRouting.movies.view));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
