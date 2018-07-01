import {createAction} from 'redux-actions';
import {Dispatch} from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {actors, Page} from '../../services/Rest.service';
import {IMDbActor, IMDbResponse} from '../../services/rest.response.types';

export const ACTORS_START = '[Actors] Start Fetching';
const start = () => {
  return createAction(ACTORS_START)();
};

export const ACTORS_SUCCESS = '[Actors] Fetch Success';
const success = (data: IMDbResponse<IMDbActor>) => {
  return createAction(ACTORS_SUCCESS)(data);
};

export const ACTORS_FAILURE = '[Actors] Fetch Error';
const failure = (error: AxiosError) => {
  return createAction(ACTORS_FAILURE)(error);
};

export const ACTORS_TOGGLE_VIEW = '[Actors] Toggke View';
export const toggleViewAction = () => {
  return createAction(ACTORS_TOGGLE_VIEW)();
};

export const fetchActorsAction = (page?: Page) => {
  return (dispatch: Dispatch) => {
    dispatch(start());
    actors(page)
      .then((response: AxiosResponse<IMDbResponse<IMDbActor>>) => {
        console.log('Response', response);
        dispatch(success(response.data));
      })
      .catch((error: AxiosError) => {
        console.log('Error', error);
        dispatch(failure(error));
      });
  };
};
