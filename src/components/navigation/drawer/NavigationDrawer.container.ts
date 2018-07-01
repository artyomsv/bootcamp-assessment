import {connect} from 'react-redux';
import NavigationDrawer from './NavigationDrawer.widget';
import {Dispatch} from 'redux';
import {ApplicationState} from '../../../store/store';
import {push} from 'react-router-redux';

const mapStateToProps = (state: ApplicationState) => {
  return {
    checked: state.navigation.checked,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navigateTo: (path: string) => {
      dispatch(push(path))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationDrawer);
