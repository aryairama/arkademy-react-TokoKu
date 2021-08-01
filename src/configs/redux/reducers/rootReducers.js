import { combineReducers } from 'redux';
import productReducer from './productReducer';
import colorReducer from './colorReducer';

const rootReducers = combineReducers({
  product: productReducer,
  color: colorReducer
});

export default rootReducers;
