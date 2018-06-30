import * as React from 'react';
import NavigationMenu from './menu';
import NavigationMenuItem from './items';
import NavigationDrawer from './drawer';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Movie from '../../assets/movie.svg';
import People from '../../assets/people.svg';
import {AppRouting} from '../../services/Routing.service';

storiesOf('Navigation', module)
  .add('Navigation', () => (
    <NavigationMenu navigateTo={(path: string) => action('navigateTo')(path)}/>
  ))
  .add('Navigation Drawer', () => (
    <NavigationDrawer/>
  ))
  .add('Item [People]', () => (
    <NavigationMenuItem
      title={'People'}
      icon={People}
      navigateTo={() => action('navigateTo')(AppRouting.PEOPLE)}
    />
  ))
  .add('Item [Films]', () => (
    <NavigationMenuItem
      title={'Films'}
      icon={Movie}
      navigateTo={() => action('navigateTo')(AppRouting.FILMS)}
    />
  ))
;
