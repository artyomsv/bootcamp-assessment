import {Action, handleActions} from 'redux-actions';
import {TOGGLE_NAVIGATION} from '../actions/Navigation.actions';

export interface NavigationState {
  checked: boolean;
  selectedPage: 'home' | 'actors' | 'movies';
}

const initial: NavigationState = {
  checked: true,
  selectedPage: 'home',
};

export const navigationReducer = handleActions(
  {
    [TOGGLE_NAVIGATION]: (state: NavigationState, action: Action<any>) => ({
      ...state, checked: !state.checked
    } as NavigationState)
  },
  initial
);
