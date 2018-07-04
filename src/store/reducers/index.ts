import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {reducer as toastr} from 'react-redux-toastr';
import {navigationReducer} from './Navigation.reducer';
import {actorsReducer} from './Actors.reducer';
import {actorDetailsReducer} from './ActorDetails.reducer';
import {movieDetailsReducer} from './MovieDetails.reducer';
import {routerReducer} from 'react-router-redux';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
  actors: actorsReducer,
  actor: actorDetailsReducer,
  movie: movieDetailsReducer,
  toastr,
  router: routerReducer
});

export default persistReducer(rootPersistConfig, rootReducer);
