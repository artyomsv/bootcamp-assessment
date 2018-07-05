import {connect} from 'react-redux';
import NavigationDrawer from './NavigationDrawer.widget';
import {Dispatch} from 'redux';
import {ApplicationState} from '../../../store/store';
import {push} from 'react-router-redux';
import {selectViewAction} from '../../../store/actions/Navigation.actions';
import {AppRouting, AppRoutingData} from '../../../services/Routing.service';
import {AppView} from '../../../store/reducers/Navigation.reducer';
import {Location} from 'history';

const resolvePath = (location: Location | null): AppView => {
  if (location) {
    if (location.pathname.startsWith(AppRouting.actors.path())) {
      return 'actors';
    } else if (location.pathname.startsWith(AppRouting.movies.path())) {
      return 'movies';
    }
  }
  return 'home';
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    checked: state.navigation.checked,
    selectedPage: resolvePath(state.router.location),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navigateTo: (routing: AppRoutingData) => {
      dispatch(push(routing.path()));
      dispatch(selectViewAction(routing.view));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationDrawer);
