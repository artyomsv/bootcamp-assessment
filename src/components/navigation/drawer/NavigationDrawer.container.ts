import {connect} from 'react-redux';
import NavigationDrawer from './NavigationDrawer.widget';
import {Dispatch} from 'redux';
import {ApplicationState} from '../../../store/store';
import {push} from 'react-router-redux';
import {selectViewAction} from '../../../store/actions/Navigation.actions';
import {AppRoutingData} from '../../../services/Routing.service';

const mapStateToProps = (state: ApplicationState) => {
  return {
    checked: state.navigation.checked,
    selectedPage: state.navigation.selectedPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navigateTo: (routing: AppRoutingData) => {
      dispatch(push(routing.path()));
      dispatch(selectViewAction(routing.view))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationDrawer);
