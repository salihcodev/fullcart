// pkgs:

// comps:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import Alert from '../../components/distributed/alert/alert.comp';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import CheckoutCalculations from '../../components/base/checkout-calculations/checkout-calculations.comp';
import UserCompleteCheckout from '../../components/distributed/user-complete-checkout/user-complete-checkout.comp';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { Fragment, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Skeleton from '../../components/distributed/skelton/skeleton.comp';
import { useQuery } from '../../common/utilities/useQuery/useQuery.util';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';
import { getAllCartItems } from '../../redux/slices/cart/logic/read.logic';
import NoItems from '../../components/distributed/no-items/no-items.comp';

// component>>>
const CheckoutCartPage = () => {
  // preConfigured hooks
  const dispatch = useDispatch();

  // custom hooks:
  const { search } = useLocation();
  const query = useQuery(search);
  // const test = query.get(`prod`);

  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  let subT: number = prod?.count! * prod?.priceInDollar!;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const { stage: cartStage, items, message } = useAppSelector((state: RootState) => state.Cart);
  useEffect(() => {
    let isMounted = true;

    if (user)
      if (isMounted) {
        dispatch(getAllCartItems(`?page=1`));
      }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);
  return (
    <main className="page checkout-page checkout-cart-page">
      <Container xxl>
        <header className="header">
          <h3 className="heading">You are about to checkout cart contents!</h3>
        </header>
        <article className="checkout-view">
          {user ? (
            <UserCompleteCheckout user={user} />
          ) : (
            <Alert type="warning" authWarning title="You must be signed in to continue" msg="Sorry, You can't go further from here without " />
          )}
          <aside className="curr-order-data">
            {stage === `busy` ? (
              <Skeleton target="checkout-cart-info" />
            ) : (
              <Fragment>
                <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
                {/* <span className="gate"></span> */}
                {items.length === 0 ? (
                  <NoItems forCart />
                ) : (
                  <div>
                    <h6>Your Picks</h6>
                    <section className="cart-check-last-view">
                      {items.map(({ name, count, priceInDollar, cover, categoryName, subcategoryName, slug, _id }: any) => (
                        <ProdConsumeCard
                          name={name}
                          height={`7rem`}
                          forCart
                          count={count}
                          price={priceInDollar}
                          deliveryCost={0.95}
                          cover={cover}
                          categoryName={categoryName}
                          subcategoryName={subcategoryName}
                          slug={slug}
                          id={_id}
                        />
                      ))}
                    </section>
                  </div>
                )}
                <span className="gate"></span>
              </Fragment>
            )}
          </aside>
        </article>
      </Container>
    </main>
  );
};

export default CheckoutCartPage;
