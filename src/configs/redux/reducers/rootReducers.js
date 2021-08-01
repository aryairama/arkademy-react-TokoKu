import { combineReducers } from 'redux';
import productReducer from './productReducer';
import colorReducer from './colorReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  user: userReducer,
  product: productReducer,
  color: colorReducer,
});

export default rootReducers;
