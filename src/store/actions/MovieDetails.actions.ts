import {createAction} from 'redux-actions';
import {Dispatch} from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {movie} from '../../services/Rest.service';
import {IMDbMovieDetails} from '../../services/rest.response.types';

export const MOVIE_DETAILS_START = '[Movie Details] Start Fetching';
const start = () => {
  return createAction(MOVIE_DETAILS_START)();
};

export const MOVIE_DETAILS_SUCCESS = '[Movie Details] Fetch Success';
const success = (data: IMDbMovieDetails) => {
  return createAction(MOVIE_DETAILS_SUCCESS)(data);
};

export const MOVIE_DETAILS_FAILURE = '[Movie Details] Fetch Error';
const failure = (error: AxiosError) => {
  return createAction(MOVIE_DETAILS_FAILURE)(error);
};

export const MOVIE_DETAILS_CLEAR = '[Movie Details] Clear State';
export const clearStateAction = () => {
  return createAction(MOVIE_DETAILS_CLEAR)();
};

export const fetchMovieDetailsAction = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(start());

    movie(id)
      .then((response: AxiosResponse<IMDbMovieDetails>) => {
        dispatch(success(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(failure(error));
      });

    // compose([actor(id), movies(id)])
    //   .then((response: any[]) => {
    //     dispatch(successActord(response[0].data));
    //     dispatch(successMovies(response[1].data.cast));
    //     dispatch(finished());
    //   })
    //   .catch((error: any) => {
    //     dispatch(failure(error));
    //   });


  };
};
