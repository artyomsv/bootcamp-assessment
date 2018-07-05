import {Action, handleActions} from 'redux-actions';
import {Page} from '../../services/Rest.service';
import {IMDbMovie, IMDbResponse} from '../../services/rest.response.types';
import {MOVIES_FAILURE, MOVIES_SEARCH_TERM_CHANGED, MOVIES_START, MOVIES_SUCCESS} from '../actions/Movies.actions';

export type ActorsViewType = 'grid' | 'list';

export interface MoviesState {
  isFetching: boolean;
  movies: IMDbMovie[];
  page: Page;
  search: string;
}

const initial: MoviesState = {
  isFetching: false,
  movies: [],
  page: {page: 1, totalResults: -1, totalPages: -1},
  search: '',
};

export const moviesReducer = handleActions(
  {
    [MOVIES_START]: (state: MoviesState, action: Action<any>): MoviesState => ({
      ...state, isFetching: true
    }),

    [MOVIES_SUCCESS]: (state: MoviesState, action: Action<IMDbResponse<IMDbMovie>>): MoviesState => {
      const payload = action.payload;
      let movies: IMDbMovie[] = [];
      let page = state.page;
      if (payload) {
        movies = action.payload ? action.payload.results : [];
        page = {page: payload.page, totalResults: payload.total_results, totalPages: payload.total_pages};
      }
      return {
        ...state,
        isFetching: false,
        movies,
        page,
      };
    },

    [MOVIES_FAILURE]: (state: MoviesState, action: Action<any>): MoviesState => ({
      ...state, isFetching: false
    }),

    [MOVIES_SEARCH_TERM_CHANGED]: (state: MoviesState, action: Action<string>): MoviesState => ({
      ...state, search: action.payload ? action.payload : ''
    }),


  },
  initial
);
