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
import MarketPage from './views/market/market.page';
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
import AuthPage from './views/auth/auth.page';
import CheckoutCartPage from './views/checkout-cart/checkout-cart.page';
import CheckoutProductPage from './views/checkout-product/checkout-product.page';
import CheckoutSimplePage from './views/checkout-simple/checkout-simple.page';
import OrdersPage from './views/orders/orders.page';
import CompanyProfile from './views/company-profile/company-profile.page';
import CustomerProfile from './views/customer-profile/customer-profile.page';
import Category from './views/category/category.page';
import SubCategory from './views/subcategory/subcategory.page';
import { getAllCategoriesComputed } from './redux/slices/category/logic/read.logic';

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

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(getAllCategoriesComputed());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);
  return (
    <ScrollToTop>
      <Switch>
        {/* PUBLIC ROUTES */}
        <Route exact path="/suppler/:supplerId">
          <Layout view={`company`}>
            <CompanyProfile />
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
        <Route exact path="/">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <LandingPage />}</Layout>
        </Route>

        <Route exact path="/customer/:customerId">
          <Layout view={`expanded`}>{user && role === usersRoles.CUSTOMER ? <CustomerProfile /> : <Redirect to="/" />}</Layout>
        </Route>

        <Route exact path="/market">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <MarketPage />}</Layout>
        </Route>

        <Route exact path="/market/:category/:SingleCategory/:slug">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <ProductViewer />}</Layout>
        </Route>

        <Route exact path="/market/:category">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <Category />}</Layout>
        </Route>

        <Route exact path="/market/:category/:subCategory">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <SubCategory />}</Layout>
        </Route>

        <Route exact path="/contact">
          <Layout view={`minimal`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <ContactPage />}</Layout>
        </Route>

        <Route exact path="/wishlist">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <Wishlist />}</Layout>
        </Route>

        <Route exact path="/cart">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <Cart />}</Layout>
        </Route>

        <Route exact path="/orders">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <OrdersPage />}</Layout>
        </Route>

        <Route exact path="/auth/:userType/:authAction">
          <Layout view={`minimal`}>{user ? <Redirect to="/" /> : <AuthPage />}</Layout>
        </Route>

        <Route exact path="/checkout/simple">
          <Layout view={`expanded`}>
            <CheckoutSimplePage />
          </Layout>
        </Route>

        <Route exact path="/checkout/product">
          <Layout view={`expanded`}>
            <CheckoutProductPage />
          </Layout>
        </Route>
        <Route exact path="/checkout/cart">
          <Layout view={`expanded`}>
            <CheckoutCartPage />
          </Layout>
        </Route>

        <Route exact path="/terms">
          <Layout view={`expanded`}>{user && role === usersRoles.SUPPLER ? <Redirect to="/dashboard" /> : <TermsPage />}</Layout>
        </Route>

        {/* 404 */}
        <Route path="*">
          <Layout view={`minimal`}>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </ScrollToTop>
  );
};

export default App;
