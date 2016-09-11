import { combineReducers } from 'redux';
import CardsReducer from './cards_reducer';

const RootReducer = combineReducers({
  cards: CardsReducer
});

export default RootReducer;
