import {createAction} from 'redux-actions';
import {Dispatch} from 'redux';
import {AxiosError, AxiosResponse} from 'axios';
import {actors, Page} from '../../services/Rest.service';
import {IMDbKnownActor, IMDbResponse} from '../../services/rest.response.types';

export const ACTORS_START = '[Actors] Start Fetching';
const start = () => {
  return createAction(ACTORS_START)();
};

export const ACTORS_SUCCESS = '[Actors] Fetch Success';
const success = (data: IMDbResponse<IMDbKnownActor>) => {
  return createAction(ACTORS_SUCCESS)(data);
};

export const ACTORS_FAILURE = '[Actors] Fetch Error';
const failure = (error: AxiosError) => {
  return createAction(ACTORS_FAILURE)(error);
};

export const ACTORS_TOGGLE_VIEW = '[Actors] Toggle View';
export const toggleViewAction = () => {
  return createAction(ACTORS_TOGGLE_VIEW)();
};

export const ACTORS_EXPAND_ACTOR = '[Actors] Expand Actor';
export const expandActorAction = (id: number) => {
  return createAction(ACTORS_EXPAND_ACTOR)(id);
};

export const ACTORS_SEARCH_TERM_CHANGED = '[Actors] Search Term Changed';
export const onQueryChangeAction = (search?: string) => {
  return createAction(ACTORS_SEARCH_TERM_CHANGED)(search);
};


export const fetchActorsAction = (query?: string, page?: Page) => {
  return (dispatch: Dispatch) => {
    dispatch(start());
    actors(query, page)
      .then((response: AxiosResponse<IMDbResponse<IMDbKnownActor>>) => {
        dispatch(success(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(failure(error));
      });
  };
};
