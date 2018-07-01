import {Action, handleActions} from 'redux-actions';
import {ACTORS_START, ACTORS_TOGGLE_VIEW} from '../actions/Actors.actions';
import {ACTORS_SUCCESS} from '../actions/Actors.actions';
import {ACTORS_FAILURE} from '../actions/Actors.actions';
import {Page} from '../../services/Rest.service';
import {IMDbActor, IMDbResponse} from '../../services/rest.response.types';

export type ActorsViewType = 'grid' | 'list';

export interface ActorsState {
  isFetching: boolean;
  actors: IMDbActor[];
  view: ActorsViewType;
  page: Page;
}

const initial: ActorsState = {
  isFetching: false,
  view: 'grid',
  actors: [],
  page: {
    page: 1
  }
};

const toggleViewValue = (view: ActorsViewType): ActorsViewType => {
  switch (view) {
    case 'grid' :
      return 'list';
    case 'list' :
      return 'grid';
    default:
      return 'grid';
  }
};

export const actorsReducer = handleActions(
  {
    [ACTORS_START]: (state: ActorsState, action: Action<any>) => ({
      ...state, isFetching: true
    } as ActorsState),

    [ACTORS_SUCCESS]: (state: ActorsState, action: Action<IMDbResponse<IMDbActor>>) => ({
      ...state, isFetching: false, actors: action.payload ? action.payload.results : []
    } as ActorsState),

    [ACTORS_FAILURE]: (state: ActorsState, action: Action<any>) => ({
      ...state, isFetching: false
    } as ActorsState),

    [ACTORS_TOGGLE_VIEW]: (state: ActorsState, action: Action<any>) => ({
      ...state, view: toggleViewValue(state.view)
    } as ActorsState),


  },
  initial
);
