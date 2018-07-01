import * as React from 'react';
import Header from './Header.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

storiesOf('Header', module)
  .add('Header Bar', () => <Header onMenuClick={() => action('onMenuClick')()}/>);
