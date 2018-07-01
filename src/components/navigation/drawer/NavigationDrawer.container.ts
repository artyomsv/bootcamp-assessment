import {connect} from 'react-redux';
import NavigationDrawer from './NavigationDrawer.widget';
import {Dispatch} from 'redux';
import {toggleNavigationAction} from '../../../store/actions/Navigation.actions';
import {ApplicationState} from '../../../store/store';

const mapStateToProps = (state: ApplicationState) => {
  return {
    checked: state.navigation.checked,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleNavigation: () => {
      dispatch(toggleNavigationAction())
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationDrawer);
