import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const Store = configureStore();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={Store} />, root);
});
