import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

const preloadedState = {
  cards: [{
    id: 1,
    text: 'First'
  }, {
    id: 2,
    text: 'Second'
  }, {
    id: 3,
    text: 'Third'
  }, {
    id: 4,
    text: 'Fourth'
  }, {
    id: 5,
    text: 'Fifth'
  }, {
    id: 6,
    text: 'Sixth'
  }, {
    id: 7,
    text: 'Seventh'
  }]
};

document.addEventListener('DOMContentLoaded', () => {
  const Store = configureStore(preloadedState);

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={Store} />, root);
});
