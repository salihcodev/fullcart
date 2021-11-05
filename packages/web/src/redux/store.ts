// pkgs:
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// utils:
import AuthReducer from './slices/auth/auth.slice';
import DashAsideReducer from './slices/dash-aside/dash-aside.slice';
import ContactUsReducer from './slices/contact-us/contact-us.slice';
import AlertReducer from './slices/alert/alert.slice';
import FurnitureSlice from './slices/prods-collections/furniture-collection.slice';
import SubCategoryLoaderSlice from './slices/prods-collections/sub-category-loader.slice';
import SingleProdGetterSlice from './slices/prods-collections/get-single-prod.slice';

// app state
export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    DashAside: DashAsideReducer,
    ContactUsForm: ContactUsReducer,
    Alert: AlertReducer,
    FurnitureProds: FurnitureSlice,
    SubCategory: SubCategoryLoaderSlice,
    SingleProd: SingleProdGetterSlice,
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
