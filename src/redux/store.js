import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from "redux-persist/lib/storage";
import  authReducer  from '../redux/slices/authSlice';
import { questifyApi } from '../redux/api/questifyApi';
import authSlice from '../redux/slices/authSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];
const persistLoggedIn = {
  key: "login",
  version: 1,
  storage: storage,
};
const keepLoggedIn = persistReducer(persistLoggedIn, authSlice);


export const store = configureStore({
  reducer: {
    auth: keepLoggedIn,
    [questifyApi.reducerPath]: questifyApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: {
        ignoredActions: [PERSIST],
    },
    }).concat(questifyApi.middleware),
  devTools: true
});

setupListeners(store.dispatch)