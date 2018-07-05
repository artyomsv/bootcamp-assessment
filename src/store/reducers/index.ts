import {combineReducers, Reducer} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {reducer as toastr} from 'react-redux-toastr';
import {navigationReducer} from './Navigation.reducer';
import {actorsReducer} from './Actors.reducer';
import {actorDetailsReducer} from './ActorDetails.reducer';
import {movieDetailsReducer} from './MovieDetails.reducer';
import {routerReducer} from 'react-router-redux';
import {moviesReducer} from './Movies.reducer';
import {PersistConfig} from 'redux-persist/es/types';

const rootPersistConfig: PersistConfig = {
  key: 'root',
  storage,
  blacklist: ['actor', 'movie'],
};

const rootReducer: Reducer = combineReducers({
  navigation: navigationReducer,
  actors: actorsReducer,
  actor: actorDetailsReducer,
  movies: moviesReducer,
  movie: movieDetailsReducer,
  toastr,
  router: routerReducer
});

export default persistReducer(rootPersistConfig, rootReducer);
