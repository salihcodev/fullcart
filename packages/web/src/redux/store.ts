// pkgs:
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// utils:
import AuthReducer from './slices/auth/Auth.slice';
import UserActionsReducer from './slices/user-actions/user-actions.slice';
import DashAsideReducer from './slices/dash-aside/dash-aside.slice';
import ContactUsReducer from './slices/contact-us/contact-us.slice';
import AlertReducer from './slices/alert/alert.slice';
import ProdsCollectionSlice from './slices/prods-collection/prods-collection.slice';
import SingleProdGetterReducer from './slices/prods-collection/get-single-prod.slice';
import SubCategoryLoaderReducer from './slices/prods-collection/sub-category-loader.slice';

// app state
export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    UserActions: UserActionsReducer,
    DashAside: DashAsideReducer,
    ContactUsForm: ContactUsReducer,
    Alert: AlertReducer,
    ProdsCollection: ProdsCollectionSlice,
    SubCategory: SubCategoryLoaderReducer,
    SingleProd: SingleProdGetterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
