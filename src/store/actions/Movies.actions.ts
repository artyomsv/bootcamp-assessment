import {createAction} from 'redux-actions';
import {Dispatch} from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {movies, Page} from '../../services/Rest.service';
import {IMDbMovie, IMDbResponse} from '../../services/rest.response.types';

export const MOVIES_START = '[Movies] Start Fetching';
const start = () => {
  return createAction(MOVIES_START)();
};

export const MOVIES_SUCCESS = '[Movies] Fetch Success';
const success = (data: IMDbResponse<IMDbMovie>) => {
  return createAction(MOVIES_SUCCESS)(data);
};

export const MOVIES_FAILURE = '[Movies] Fetch Error';
const failure = (error: AxiosError) => {
  return createAction(MOVIES_FAILURE)(error);
};

export const MOVIES_SEARCH_TERM_CHANGED = '[Movies] Search Term Changed';
export const onQueryChangeAction = (search?: string) => {
  return createAction(MOVIES_SEARCH_TERM_CHANGED)(search);
};


export const fetchMoviesAction = (query?: string, page?: Page) => {
  return (dispatch: Dispatch) => {
    dispatch(start());
    movies(query, page)
      .then((response: AxiosResponse<IMDbResponse<IMDbMovie>>) => {
        dispatch(success(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(failure(error));
      });
  };
};
