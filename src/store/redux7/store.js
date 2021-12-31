import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { authReducer } from './auth';
import { contactsReducer } from './contacts';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store7 = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor7 = persistStore(store7);
