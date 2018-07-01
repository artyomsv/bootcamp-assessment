import {connect} from 'react-redux';
import Header from './Header.widget';
import {Dispatch} from 'redux';
import {toggleNavigationAction} from '../../store/actions/Navigation.actions';
import {ApplicationState} from '../../store/store';

const mapStateToProps = (state: ApplicationState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onMenuClick: () => {
      dispatch(toggleNavigationAction())
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
