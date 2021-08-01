import { combineReducers } from 'redux';
import productReducer from './productReducer';
import colorReducer from './colorReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';

const rootReducers = combineReducers({
  user: userReducer,
  product: productReducer,
  color: colorReducer,
  category: categoryReducer,
});

export default rootReducers;
