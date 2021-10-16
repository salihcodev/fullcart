// pkgs:
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// utils:
import XCollectionReducer from './slices/x-collection/x-collection.slice';
import AuthReducer from './slices/auth/auth.slice';
import DashAsideReducer from './slices/dash-aside/dash-aside.slice';
import ContactUsReducer from './slices/contact-us/contact-us.slice';
import AlertReducer from './slices/alert/alert.slice';

// app state
export const store = configureStore({
  reducer: {
    XCollection: XCollectionReducer,
    Auth: AuthReducer,
    DashAside: DashAsideReducer,
    ContactUsForm: ContactUsReducer,
    Alert: AlertReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
