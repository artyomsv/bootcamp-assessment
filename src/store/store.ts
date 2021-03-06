import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {persistStore} from 'redux-persist';
import reducers from './reducers';
import {NavigationState} from './reducers/Navigation.reducer';
import {ToastrState} from 'react-redux-toastr';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, RouterState} from 'react-router-redux';
import {ActorsState} from './reducers/Actors.reducer';
import {ActorDetailsState} from './reducers/ActorDetails.reducer';
import {MovieDetailsState} from './reducers/MovieDetails.reducer';
import {MoviesState} from './reducers/Movies.reducer';

export const history = createHistory();

const configureStore = () => {
  const middlewares = [thunk, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const reduxStore = createStore(reducers, composedEnhancer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const newRootReducer = require('./reducers/index').default;
        reduxStore.replaceReducer(newRootReducer);
      });
    }
  }

  return reduxStore;
};

export interface ApplicationState {
  navigation: NavigationState,
  actors: ActorsState,
  actor: ActorDetailsState,
  movies: MoviesState,
  movie: MovieDetailsState,
  toastr: ToastrState,
  router: RouterState,
}

export const store: Store<ApplicationState> = configureStore();
export default persistStore(store);
