import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export const persistor = persistStore(store);
