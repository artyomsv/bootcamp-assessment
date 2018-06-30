import * as React from 'react';
import ActorsView from './actors';
import ActorsGrid from './actors/grid';
import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
import actors from './actors.mock.json';

storiesOf('Views', module)
  .add('Actors', () => (
    <ActorsView actors={actors}/>
  ))
  .add('Actors Grid', () => (
    <ActorsGrid actors={actors}/>
  ))
;
