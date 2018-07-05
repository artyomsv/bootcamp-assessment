import {createAction} from 'redux-actions';
import {Dispatch} from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {movie, movieActors} from '../../services/Rest.service';
import {IMDbMovieDetails} from '../../services/rest.response.types';

export const MOVIE_DETAILS_START = '[Movie Details] Start Fetching';
export const MOVIE_ACTORS_DETAILS_START = '[Movie Details] Actors Start Fetching';
export const MOVIE_DETAILS_SUCCESS = '[Movie Details] Fetch Success';
export const MOVIE_ACTORS_DETAILS_SUCCESS = '[Movie Details] Actors Fetch Success';
export const MOVIE_DETAILS_FAILURE = '[Movie Details] Fetch Error';
export const MOVIE_ACTORS_DETAILS_FAILURE = '[Movie Details] Actors Fetch Error';

export const MOVIE_DETAILS_CLEAR = '[Movie Details] Clear State';
export const clearStateAction = () => {
  return createAction(MOVIE_DETAILS_CLEAR)();
};

export const fetchMovieDetailsAction = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(createAction(MOVIE_DETAILS_START)());

    movie(id)
      .then((response: AxiosResponse<IMDbMovieDetails>) => {
        dispatch(createAction(MOVIE_DETAILS_SUCCESS)(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(createAction(MOVIE_DETAILS_FAILURE)(error));
      });

  };
};

export const fetchMovieActorsAction = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(createAction(MOVIE_ACTORS_DETAILS_START)());
    movieActors(id)
      .then((response: AxiosResponse) => {
        dispatch(createAction(MOVIE_ACTORS_DETAILS_SUCCESS)(response.data.cast));
      })
      .catch((error: AxiosError) => {
        dispatch(createAction(MOVIE_ACTORS_DETAILS_FAILURE)(error));
      });

  };
};

