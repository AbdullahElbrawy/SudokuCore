// src/app/store.ts
import {configureStore} from '@reduxJs/toolkit'
import loginReducer from './reducers/loginReducer';
const rootReducer = {
    login: loginReducer,
    // otherFeature: otherFeatureReducer,
  };
  
export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
