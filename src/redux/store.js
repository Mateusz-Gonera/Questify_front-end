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

import  authReducer  from '../redux/slices/authSlice';
import { questifyApi } from '../redux/api/questifyApi';


// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [questifyApi.reducerPath]: questifyApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(questifyApi.middleware),
  devTools: true
});

setupListeners(store.dispatch)