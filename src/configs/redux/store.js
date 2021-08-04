import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'TokoKu',
  storage,
  whitelist: ['user', 'cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
