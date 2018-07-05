import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import persistedStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const render = (Component: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={'Loading...'} persistor={persistedStore}>
        {Component}
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};

render(<App/>);

if (module && module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('index.js HMR');
    const NewApp = require('./components/App').default;
    render(NewApp);
  });

}

registerServiceWorker();
