import {Action, handleActions} from 'redux-actions';
import {
  ACTORS_EXPAND_ACTOR,
  ACTORS_SEARCH_TERM_CHANGED,
  ACTORS_START,
  ACTORS_TOGGLE_VIEW
} from '../actions/Actors.actions';
import {ACTORS_SUCCESS} from '../actions/Actors.actions';
import {ACTORS_FAILURE} from '../actions/Actors.actions';
import {Page} from '../../services/Rest.service';
import {IMDbActor, IMDbResponse} from '../../services/rest.response.types';

export type ActorsViewType = 'grid' | 'list';

export interface ActorsState {
  isFetching: boolean;
  actors: IMDbActor[];
  view: ActorsViewType;
  expanded: number;
  page: Page;
  search: string;
}

const initial: ActorsState = {
  isFetching: false,
  view: 'grid',
  expanded: -1,
  actors: [],
  page: {
    page: 1,
    totalResults: -1,
    totalPages: -1
  },
  search: '',
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

    [ACTORS_SUCCESS]: (state: ActorsState, action: Action<IMDbResponse<IMDbActor>>) => {
      const payload = action.payload;
      let actors: IMDbActor[] = [];
      let page = state.page;
      if (payload) {
        actors = action.payload ? action.payload.results : [];
        page = {page: payload.page, totalResults: payload.total_results, totalPages: payload.total_pages};
      }
      return {
        ...state,
        isFetching: false,
        actors,
        page,
      } as ActorsState;
    },

    [ACTORS_FAILURE]: (state: ActorsState, action: Action<any>) => ({
      ...state, isFetching: false
    } as ActorsState),

    [ACTORS_TOGGLE_VIEW]: (state: ActorsState, action: Action<any>) => ({
      ...state, view: toggleViewValue(state.view)
    } as ActorsState),


    [ACTORS_EXPAND_ACTOR]: (state: ActorsState, action: Action<number>) => ({
      ...state, expanded: action.payload ? action.payload === state.expanded ? -1 : action.payload : -1,
    } as ActorsState),

    [ACTORS_SEARCH_TERM_CHANGED]: (state: ActorsState, action: Action<string>) => ({
      ...state, search: action.payload ? action.payload : ''
    } as ActorsState),


  },
  initial
);
