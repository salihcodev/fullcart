// pkgs:

// comps:
import { useEffect } from 'react';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import AppButton from '../../components/distributed/button/app-button.comp';
import CheckoutCalculations from '../../components/distributed/checkout-calculations/checkout-calculations.comp';
import NoItems from '../../components/distributed/no-items/no-items.comp';
import NotLogged from '../../components/distributed/not-logged/not-logged.comp';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';
import Skeleton from '../../components/distributed/skelton/skeleton.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllCartItems } from '../../redux/slices/cart/logic/read.logic';
import { dropCollection } from '../../redux/slices/utils/wipe.logic';
import { RootState } from '../../redux/store';
import './style.sass';

// component>>>
const Cart = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const {
    stage: cartStage,
    stageForDrop: cartStageForDrop,
    items,
    message,
  } = useAppSelector((state: RootState) => state.Cart);

  useEffect(() => {
    let isMounted = true;

    if (user)
      if (isMounted) {
        dispatch(getAllCartItems(`?page=1`));
      }

    return () => {
      isMounted = false;
    };
  }, [dispatch, items.length]);

  const handleCartWipe = () => {
    dispatch(dropCollection(`cart`));
    dispatch(getAllCartItems(`?page=1`));
  };

  let subT: number = 5 * 4.2;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;
  return (
    <main className="page cart-page cart-and-wish">
      <Container xxl>
        <Breadcrumb />
        {user ? (
          <div>
            {items.length === 0 ? null : (
              <h4>
                <span>Your Cart Items</span> <span className="count">{items.length}</span>
              </h4>
            )}

            <article className="list-wrapper">
              {cartStage === `busy` ? (
                <div>
                  <Skeleton target="prod-consume-card" />
                  <Skeleton target="prod-consume-card" />
                  <Skeleton target="prod-consume-card" />
                </div>
              ) : cartStage === `idle` ? (
                <div>
                  {items.length === 0 ? (
                    <NoItems forCart />
                  ) : (
                    <section className="list-items">
                      {items.map(({ name, count, priceInDollar, cover, subCategory, category, slug, _id }: any) => (
                        <ProdConsumeCard
                          name={name}
                          height={`7rem`}
                          forCart
                          count={count}
                          price={priceInDollar}
                          deliveryCost={0.95}
                          cover={cover}
                          category={category}
                          subCategory={subCategory}
                          slug={slug}
                          id={_id}
                        />
                      ))}
                    </section>
                  )}
                </div>
              ) : cartStage === `rejected` ? (
                <section className="no-items">
                  <h2 className="heading">{message}</h2>
                </section>
              ) : null}
              <section className="declaration-and-controllers">
                <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
                <AppButton
                  loadState={cartStageForDrop}
                  value="Clear the whole cart"
                  type="button"
                  wide
                  size="lg"
                  border={{ size: 1 }}
                  noBorder
                  handleEvent={handleCartWipe}
                  disabled={items.length === 0}
                />
                <AppButton
                  value="Checkout"
                  type="button"
                  wide
                  size="lg"
                  bkgSecondary
                  border={{ size: 1 }}
                  noBorder={false}
                  path="/checkout/cart"
                />
              </section>
            </article>
          </div>
        ) : (
          <NotLogged place="your cart items" />
        )}
      </Container>
    </main>
  );
};

export default Cart;
