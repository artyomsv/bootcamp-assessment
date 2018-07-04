import {AppView} from '../store/reducers/Navigation.reducer';

export interface PathParams {
  id: number;
}

export interface AppRoutingData {
  path: (id?: number | string) => string;
  view: AppView;
}

export const AppRouting: { [id: string]: AppRoutingData } = {
  root: {
    path: () => '/',
    view: 'home' as AppView,
  },
  actors: {
    path: () => '/actors',
    view: 'actors' as AppView,
  },
  actorsById: {
    path: (id?: number | string): string => `${AppRouting.actors.path()}/${!!id ? id : ':id'}`,
    view: 'actors' as AppView,
  },
  movies: {
    path: () => '/movies',
    view: 'movies' as AppView,
  },
  moviesById: {
    path: (id?: number | string): string => `${AppRouting.movies.path()}/${!!id ? id : ':id'}`,
    view: 'movies' as AppView,
  }
};
