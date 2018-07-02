import {Action, handleActions} from 'redux-actions';
import {OPEN_NAVIGATION, SELECT_VIEW, TOGGLE_NAVIGATION} from '../actions/Navigation.actions';

export type AppView = 'home' | 'actors' | 'movies'

export interface NavigationState {
  checked: boolean;
  selectedPage: AppView;
}

const initial: NavigationState = {
  checked: true,
  selectedPage: 'home',
};

export const navigationReducer = handleActions(
  {
    [TOGGLE_NAVIGATION]: (state: NavigationState, action: Action<any>) => ({
      ...state, checked: !state.checked
    } as NavigationState),

    [OPEN_NAVIGATION]: (state: NavigationState, action: Action<any>) => ({
      ...state, checked: true
    } as NavigationState),

    [SELECT_VIEW]: (state: NavigationState, action: Action<AppView>) => ({
      ...state, selectedPage: action.payload
    } as NavigationState),
  },
  initial
);
