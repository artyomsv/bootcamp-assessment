import {Action, handleActions} from 'redux-actions';
import {IMDbKnownActor, IMDbMovieDetails} from '../../services/rest.response.types';
import {
  MOVIE_ACTORS_DETAILS_FAILURE,
  MOVIE_ACTORS_DETAILS_START,
  MOVIE_ACTORS_DETAILS_SUCCESS,
  MOVIE_DETAILS_CLEAR,
  MOVIE_DETAILS_FAILURE,
  MOVIE_DETAILS_START,
  MOVIE_DETAILS_SUCCESS
} from '../actions/MovieDetails.actions';

export interface MovieDetailsState {
  isMovieFetching: boolean;
  isActorsFetching: boolean;
  details?: IMDbMovieDetails;
  actors?: IMDbKnownActor[];
}

const initial: MovieDetailsState = {
  isMovieFetching: false,
  isActorsFetching: false,
};

export const movieDetailsReducer = handleActions(
  {
    [MOVIE_DETAILS_START]: (state: MovieDetailsState, action: Action<any>) => ({
      ...state, isMovieFetching: true
    } as MovieDetailsState),

    [MOVIE_ACTORS_DETAILS_START]: (state: MovieDetailsState, action: Action<any>) => ({
      ...state, isActorsFetching: true
    } as MovieDetailsState),

    [MOVIE_DETAILS_SUCCESS]: (state: MovieDetailsState, action: Action<IMDbMovieDetails>) => {
      return {
        ...state,
        details: action.payload, isMovieFetching: false,
      } as MovieDetailsState;
    },

    [MOVIE_ACTORS_DETAILS_SUCCESS]: (state: MovieDetailsState, action: Action<IMDbMovieDetails>) => {
      return {
        ...state,
        actors: action.payload, isActorsFetching: false,
      } as MovieDetailsState;
    },

    [MOVIE_DETAILS_FAILURE]: (state: MovieDetailsState, action: Action<any>) => ({
      ...state, isMovieFetching: false
    } as MovieDetailsState),

    [MOVIE_ACTORS_DETAILS_FAILURE]: (state: MovieDetailsState, action: Action<any>) => ({
      ...state, isActorsFetching: false
    } as MovieDetailsState),

    [MOVIE_DETAILS_CLEAR]: (state: MovieDetailsState, action: Action<any>) => ({
      ...initial,
    } as MovieDetailsState),

  },
  initial
);
