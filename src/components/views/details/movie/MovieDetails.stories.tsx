import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import MovieDetailsView from './MovieDetails.view';
import movie from './__mock__/movie.mock.json';
import movie2 from './__mock__/movie2.mock.json';
import {MemoryRouter} from 'react-router';

storiesOf('Movie Details', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Movie Details', () => (
    <MovieDetailsView
      details={movie}
      isFetching={false}
      clearState={() => action('clearState')()}
      fetchMovieDetails={(id: number) => action('fetchMovieDetails')(id)}
      navigateToActor={(id: number) => action('navigateToActor')(id)}
      goBack={() => action('goBack')()}
    />
  ))
  .add('Movie Details2', () => (
    <MovieDetailsView
      details={movie2}
      isFetching={false}
      clearState={() => action('clearState')()}
      fetchMovieDetails={(id: number) => action('fetchMovieDetails')(id)}
      navigateToActor={(id: number) => action('navigateToActor')(id)}
      goBack={() => action('goBack')()}
    />
  ))
;
