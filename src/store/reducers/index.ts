import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {reducer as toastr} from 'react-redux-toastr';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  toastr
});

export default persistReducer(rootPersistConfig, rootReducer);
