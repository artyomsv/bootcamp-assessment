import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import HomeView from './Home.view';

storiesOf('Home Views', module)
  .add('Home View', () => (
    <HomeView
      navigateToActors={() => action('navigateToActors')()}
      navigateToMovies={() => action('navigateToMovies')()}
    />
  ))
;
