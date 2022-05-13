// pkgs:

// comps:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import Alert from '../../components/distributed/alert/alert.comp';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import CheckoutCalculations from '../../components/distributed/checkout-calculations/checkout-calculations.comp';
import ProdHighlights from '../../components/distributed/prod-highlights/prod-highlights.comp';
import ProdSmartCard from '../../components/distributed/prod-smart-card/prod-smart-card.comp';
import UserCompleteCheckout from '../../components/distributed/user-complete-checkout/user-complete-checkout.comp';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { GetSingleProdBySlug } from '../../redux/slices/prods-collection/logic/reading.logic';

// component>>>
const CheckoutCartPage = () => {
  // preConfigured hooks:
  const user = localStorageObjGetter(`@authedUser`)?.user;

  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  const dispatch = useDispatch();

  const slug = useLocation().search.slice(6);

  let subT: number = prod?.count! * prod?.priceInDollar!;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;

  useEffect(() => {
    dispatch(GetSingleProdBySlug(slug));
  }, [dispatch, slug]);
  return (
    <main className='page checkout-page checkout-cart-page'>
      <Container xxl>
        <header className='header'>
          <h3 className='heading'>You are about to checkout cart contents!</h3>
        </header>
        <article className='checkout-view'>
          {user ? (
            <UserCompleteCheckout user={user} />
          ) : (
            <Alert
              type='warning'
              authWarning
              title='You must be signed in to continue'
              msg="Sorry, You can't go further from here without "
            />
          )}
          <aside className='curr-order-data'>
            <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
            <h4>Your Picks</h4>
            <span className='gate'></span>
            <section className='cart-check-last-view'>
              <ProdSmartCard prod={prod} height={`7rem`} />
              <ProdSmartCard prod={prod} height={`7rem`} />
              <ProdSmartCard prod={prod} height={`7rem`} />
              <ProdSmartCard prod={prod} height={`7rem`} />
              <ProdSmartCard prod={prod} height={`7rem`} />
            </section>
            <span className='gate'></span>
          </aside>
        </article>
      </Container>
    </main>
  );
};

export default CheckoutCartPage;
