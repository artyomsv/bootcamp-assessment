import {createAction} from 'redux-actions';
import {AppView} from '../reducers/Navigation.reducer';

export const TOGGLE_NAVIGATION = '[Navigation] Toggle menu';
export const toggleNavigationAction = () => {
  return createAction(TOGGLE_NAVIGATION)();
};

export const OPEN_NAVIGATION = '[Navigation] Open menu';
export const openNavigationAction = () => {
  return createAction(OPEN_NAVIGATION)();
};

export const SELECT_VIEW = '[Navigation] Select view';
export const selectViewAction = (view: AppView) => {
  return createAction(SELECT_VIEW)(view);
};
