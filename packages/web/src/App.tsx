// pkgs: installed libs like react, axios etc..
import { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// utils: utilities that you prepared your self
import './common/styles/app.sass';
import { jwtDecoder } from './common/utilities/jwt-decoder.util';
import { logout } from './redux/slices/auth/logic/signing-utils.logic';
import ScrollToTop from './common/utilities/scroll-to-top/scroll-to-top.util';

// comps:
import Layout from './components/distributed/layout/layout.comp';
import ContactPage from './views/contact/contact.page';
import Dashboard from './views/dashboard/dashboard.page';
import { localStorageObjGetter } from './common/utilities/localstorage-dealer/localstorage-getters.util';

// views/pages:
import LandingPage from './views/landing/landing.page';
import NotFound from './views/not-found/notfound.page';
import ShopPage from './views/shop/shop.page';
import TermsPage from './views/terms/terms.page';
import Wishlist from './views/wishlist/wishlist.page';
import Cart from './views/cart/cart.page';
import ProductViewer from './views/prod-viewer/prod-viewer.page';
import usersRoles from './common/constants/users-roles.constant';
import DashUsers from './views/dash-users/dash-users.page';
import DashProducts from './views/dash-products/dash-products.page';
import DashOrders from './views/dash-orders/dash-orders.page';
import DashMonthlyViews from './views/dash-monthly-views/dash-monthly-views.page';
import DashManageProducts from './views/dash-manage-products/dash-manage-products.page';
import SingleCategory from './views/single-category/single-category.page';
import SubCategory from './views/sub-category/sub-category.page';
import AuthPage from './views/auth/auth.page';
import CheckoutPage from './views/checkout/checkout.page';

// component>>>
const App = () => {
  // preConfigured hooks:
  const dispatch = useDispatch();
  const location = useLocation();

  const role = jwtDecoder()?.role;

  // get some data to help authing the routes
  const user = localStorageObjGetter(`@authedUser`)?.user;

  useEffect(() => {
    const exp = jwtDecoder()?.exp;

    if (exp && exp * 1000 < new Date().getTime()) {
      dispatch(logout());
    }
  }, [location, dispatch]);

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/">
          <Layout expanded>
            {user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <LandingPage />}
          </Layout>
        </Route>

        {/* DASHBOARD ROUTES */}
        <Route exact path="/dashboard">
          {user && role === usersRoles.SUPPLER ? <Dashboard /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/dashboard/users">
          {user && role === usersRoles.SUPPLER ? <DashUsers /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/dashboard/products">
          {user && role === usersRoles.SUPPLER ? <DashProducts /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/dashboard/manage-products/:actionType">
          {user && role === usersRoles.SUPPLER ? <DashManageProducts /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/dashboard/monthly-views">
          {user && role === usersRoles.SUPPLER ? <DashMonthlyViews /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/dashboard/orders">
          {user && role === usersRoles.SUPPLER ? <DashOrders /> : <Redirect to="/" />}
        </Route>

        {/* ROUTES FOR CUSTOMER */}
        <Route exact path="/shop">
          <Layout expanded>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <ShopPage />}</Layout>
        </Route>

        <Route exact path="/shop/:category/:subCategory/:slug">
          <Layout expanded>
            {user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <ProductViewer />}
          </Layout>
        </Route>

        <Route exact path="/shop/:category">
          <Layout expanded>
            {user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <SingleCategory />}
          </Layout>
        </Route>

        <Route exact path="/shop/:category/:subCategory">
          <Layout expanded>
            {user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <SubCategory />}
          </Layout>
        </Route>

        <Route exact path="/contact">
          <Layout expanded={false}>
            {user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <ContactPage />}
          </Layout>
        </Route>

        <Route exact path="/wishlist">
          <Layout expanded>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <Wishlist />}</Layout>
        </Route>

        <Route exact path="/cart">
          <Layout expanded>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <Cart />}</Layout>
        </Route>

        <Route exact path="/auth/:userType/:authAction">
          <Layout expanded={false}>{user ? <Redirect to="/" /> : <AuthPage />}</Layout>
        </Route>

        <Route exact path="/checkout/:checkoutType">
          <Layout expanded={true}>
            <CheckoutPage />
          </Layout>
        </Route>

        <Route exact path="/terms">
          <Layout expanded>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <TermsPage />}</Layout>
        </Route>

        {/* 404 */}
        <Route path="*">
          <Layout expanded={false}>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </ScrollToTop>
  );
};

export default App;
