import {Action, handleActions} from 'redux-actions';
import {IMDbActorDetails, IMDbMovie} from '../../services/rest.response.types';
import {
  ACTOR_DETAILS_CLEAR,
  ACTOR_DETAILS_FAILURE,
  ACTOR_DETAILS_START,
  ACTOR_DETAILS_SUCCESS, ACTOR_FETCH_FINISHED,
  ACTOR_MOVIES_SUCCESS
} from '../actions/ActorDetails.actions';

export interface ActorDetailsState {
  isFetching: boolean;
  details?: IMDbActorDetails;
  movies?: IMDbMovie[];
}

const initial: ActorDetailsState = {
  isFetching: false,
};

export const actorDetailsReducer = handleActions(
  {
    [ACTOR_DETAILS_START]: (state: ActorDetailsState, action: Action<any>) => ({
      ...state, isFetching: true
    } as ActorDetailsState),

    [ACTOR_DETAILS_SUCCESS]: (state: ActorDetailsState, action: Action<IMDbActorDetails>) => {
      return {
        ...state,
        details: action.payload,
      } as ActorDetailsState;
    },

    [ACTOR_MOVIES_SUCCESS]: (state: ActorDetailsState, action: Action<IMDbMovie>) => {
      return {
        ...state,
        movies: action.payload
      } as ActorDetailsState;
    },

    [ACTOR_FETCH_FINISHED]: (state: ActorDetailsState, action: Action<any>) => ({
      ...state, isFetching: false
    } as ActorDetailsState),

    [ACTOR_DETAILS_FAILURE]: (state: ActorDetailsState, action: Action<any>) => ({
      ...state, isFetching: false
    } as ActorDetailsState),

    [ACTOR_DETAILS_CLEAR]: (state: ActorDetailsState, action: Action<any>) => ({
      ...initial,
    } as ActorDetailsState),

  },
  initial
);
