// pkgs:
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// utils:
import AuthReducer from './slices/auth/Auth.slice';
import UserActionsReducer from './slices/user-actions/user-actions.slice';
import DashAsideReducer from './slices/dash-aside/dash-aside.slice';
import ContactUsReducer from './slices/contact-us/contact-us.slice';
import ProdsCollectionSlice from './slices/prods-collection/prods-collection.slice';
import SingleProdGetterReducer from './slices/prods-collection/get-single-prod.slice';
import NewsletterSubscriptionReducer from './slices/newsletter/newsletter.slice';
import CartReducer from './slices/cart/cart.slice';
import WishlistReducer from './slices/wishlist/wishlist.slice';
import OrderReducer from './slices/order/order.slice';
import CategoriesReducer from './slices/category/category.slice';

// app state
export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    UserActions: UserActionsReducer,
    DashAside: DashAsideReducer,
    ContactUsForm: ContactUsReducer,
    ProdsCollection: ProdsCollectionSlice,
    SingleProd: SingleProdGetterReducer,
    Newsletter: NewsletterSubscriptionReducer,
    Cart: CartReducer,
    Wishlist: WishlistReducer,
    Order: OrderReducer,
    Categories: CategoriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
