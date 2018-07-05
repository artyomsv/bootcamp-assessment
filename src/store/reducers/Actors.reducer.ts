import {Action, handleActions} from 'redux-actions';
import {ACTORS_EXPAND_ACTOR, ACTORS_FAILURE, ACTORS_SEARCH_TERM_CHANGED, ACTORS_START, ACTORS_SUCCESS, ACTORS_TOGGLE_VIEW} from '../actions/Actors.actions';
import {Page} from '../../services/Rest.service';
import {IMDbKnownActor, IMDbResponse} from '../../services/rest.response.types';

export type ActorsViewType = 'grid' | 'list';

export interface ActorsState {
  isFetching: boolean;
  actors: IMDbKnownActor[];
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
  page: {page: 1, totalResults: -1, totalPages: -1},
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
    [ACTORS_START]: (state: ActorsState, action: Action<any>): ActorsState => ({
      ...state, isFetching: true
    }),

    [ACTORS_SUCCESS]: (state: ActorsState, action: Action<IMDbResponse<IMDbKnownActor>>): ActorsState => {
      const payload = action.payload;
      let actors: IMDbKnownActor[] = [];
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
      };
    },

    [ACTORS_FAILURE]: (state: ActorsState, action: Action<any>): ActorsState => ({
      ...state, isFetching: false
    }),

    [ACTORS_TOGGLE_VIEW]: (state: ActorsState, action: Action<any>): ActorsState => ({
      ...state, view: toggleViewValue(state.view)
    }),


    [ACTORS_EXPAND_ACTOR]: (state: ActorsState, action: Action<number>): ActorsState => ({
      ...state, expanded: action.payload ? action.payload === state.expanded ? -1 : action.payload : -1,
    }),

    [ACTORS_SEARCH_TERM_CHANGED]: (state: ActorsState, action: Action<string>): ActorsState => ({
      ...state, search: action.payload ? action.payload : ''
    }),


  },
  initial
);
