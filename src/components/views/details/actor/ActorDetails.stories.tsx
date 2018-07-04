import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import ActorDetailsView from './ActorDetails.view';
import details from './__mock__/actor.mock.json';
import movies from './__mock__/movies.mock.json';
import {MemoryRouter} from 'react-router';

storiesOf('Actor Details', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Actor Details', () => (
    <ActorDetailsView
      details={details}
      isFetching={false}
      clearState={() => action('clearState')()}
      fetchActorDetails={(id: number) => action('fetchActorDetails')(id)}
      movies={movies.cast}
      navigateToMovie={(id: number) => action('navigateToMovie')(id)}
      goBack={() => action('goBack')()}
    />
  ))
;
