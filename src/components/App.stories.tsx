import * as React from 'react';
import {storiesOf} from '@storybook/react';
import App from './App';
import {Provider} from 'react-redux';
import {store} from '../store/store';

storiesOf('App', module)
  .add('App', () => (
    <Provider store={store}>
      <App/>
    </Provider>
  ));
