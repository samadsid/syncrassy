import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
//import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import {store} from './_helpers';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
// registerServiceWorker();