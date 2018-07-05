import {Action, handleActions} from 'redux-actions';
import {IMDbMovieDetails} from '../../services/rest.response.types';
import {MOVIE_DETAILS_CLEAR, MOVIE_DETAILS_FAILURE, MOVIE_DETAILS_START, MOVIE_DETAILS_SUCCESS} from '../actions/MovieDetails.actions';

export interface MovieDetailsState {
  isFetching: boolean;
  details?: IMDbMovieDetails;
}

const initial: MovieDetailsState = {
  isFetching: false,
};

export const movieDetailsReducer = handleActions(
  {
    [MOVIE_DETAILS_START]: (state: MovieDetailsState, action: Action<any>) => ({
      ...state, isFetching: true
    } as MovieDetailsState),

    [MOVIE_DETAILS_SUCCESS]: (state: MovieDetailsState, action: Action<IMDbMovieDetails>) => {
      return {
        ...state,
        details: action.payload, isFetching: false,
      } as MovieDetailsState;
    },

    [MOVIE_DETAILS_FAILURE]: (state: MovieDetailsState, action: Action<any>) => ({
      ...state, isFetching: false
    } as MovieDetailsState),

    [MOVIE_DETAILS_CLEAR]: (state: MovieDetailsState, action: Action<any>) => ({
      ...initial,
    } as MovieDetailsState),

  },
  initial
);
