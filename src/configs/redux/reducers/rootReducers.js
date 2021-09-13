import { combineReducers } from 'redux';
import productReducer from './productReducer';
import colorReducer from './colorReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import storeReducer from './storeReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducers = combineReducers({
  user: userReducer,
  product: productReducer,
  color: colorReducer,
  category: categoryReducer,
  store: storeReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducers;
