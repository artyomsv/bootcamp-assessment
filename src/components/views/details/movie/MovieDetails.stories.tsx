import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import MovieDetailsView from './MovieDetails.view';
import movie from './__mock__/movie.mock.json';
import movie2 from './__mock__/movie2.mock.json';
import actors from './__mock__/actors.mock.json';
import {MemoryRouter} from 'react-router';

storiesOf('Movie Details', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Movie Details', () => (
    <MovieDetailsView
      details={movie}
      actors={actors}
      isMovieFetching={false}
      isActorsFetching={false}
      clearState={() => action('clearState')()}
      fetchMovieDetails={(id: number) => action('fetchMovieDetails')(id)}
      fetchMovieActors={(id: number) => action('fetchMovieActors')(id)}
      navigateToActor={(id: number) => action('navigateToActor')(id)}
      navigateToMovie={(id: number) => action('navigateToMovie')(id)}
      goBack={() => action('goBack')()}
    />
  ))
  .add('Movie Details2', () => (
    <MovieDetailsView
      details={movie2}
      actors={actors}
      isMovieFetching={false}
      isActorsFetching={false}
      clearState={() => action('clearState')()}
      fetchMovieDetails={(id: number) => action('fetchMovieDetails')(id)}
      fetchMovieActors={(id: number) => action('fetchMovieActors')(id)}
      navigateToActor={(id: number) => action('navigateToActor')(id)}
      navigateToMovie={(id: number) => action('navigateToMovie')(id)}
      goBack={() => action('goBack')()}
    />
  ))
;
