import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css';

const store = configureStore()

render (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();