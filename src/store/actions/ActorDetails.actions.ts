import {createAction} from 'redux-actions';
import {Dispatch} from 'redux';
import {AxiosError} from 'axios';
import {actor, compose, credits} from '../../services/Rest.service';
import {IMDbActorDetails, IMDbCastMovie} from '../../services/rest.response.types';

export const ACTOR_DETAILS_START = '[Actor Details] Start Fetching';
const start = () => {
  return createAction(ACTOR_DETAILS_START)();
};

export const ACTOR_DETAILS_SUCCESS = '[Actor Details] Fetch Success';
const successActord = (data: IMDbActorDetails) => {
  return createAction(ACTOR_DETAILS_SUCCESS)(data);
};

export const ACTOR_MOVIES_SUCCESS = '[Actor Details] Movies Fetch Success';
const successMovies = (data: IMDbCastMovie) => {
  return createAction(ACTOR_MOVIES_SUCCESS)(data);
};

export const ACTOR_FETCH_FINISHED = '[Actor Details] Fetch Finished';
const finished = () => {
  return createAction(ACTOR_FETCH_FINISHED)();
};

export const ACTOR_DETAILS_FAILURE = '[Actor Details] Fetch Error';
const failure = (error: AxiosError) => {
  return createAction(ACTOR_DETAILS_FAILURE)(error);
};

export const ACTOR_DETAILS_CLEAR = '[Actor Details] Clear State';
export const clearStateAction = () => {
  return createAction(ACTOR_DETAILS_CLEAR)();
};

export const fetchActorDetailsAction = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(start());

    compose([actor(id), credits(id)])
      .then((response: any[]) => {
        dispatch(successActord(response[0].data));
        dispatch(successMovies(response[1].data.cast));
        dispatch(finished());
      })
      .catch((error: any) => {
        dispatch(failure(error));
      })


  };
};
