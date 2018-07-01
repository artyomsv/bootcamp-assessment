import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {reducer as toastr} from 'react-redux-toastr';
import {navigationReducer} from './Navigation.reducer';
import {actorsReducer} from './Actors.reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
  actors: actorsReducer,
  toastr
});

export default persistReducer(rootPersistConfig, rootReducer);
