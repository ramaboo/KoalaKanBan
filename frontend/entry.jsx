import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { preloadedState } from './util/preloaded_state'

document.addEventListener('DOMContentLoaded', () => {
  const Store = configureStore(preloadedState);

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={Store} />, root);
});
