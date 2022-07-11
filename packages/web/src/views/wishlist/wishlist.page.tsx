// pkgs:

// comps:

// utils:
import { useEffect } from 'react';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import AppButton from '../../components/distributed/button/app-button.comp';
import CheckoutCalculations from '../../components/distributed/checkout-calculations/checkout-calculations.comp';
import NoItems from '../../components/distributed/no-items/no-items.comp';
import NotLogged from '../../components/distributed/not-logged/not-logged.comp';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';
import Skeleton from '../../components/distributed/skelton/skeleton.comp';
import Container from '../../components/utils/container/container.util';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { dropCollection } from '../../redux/slices/utils/wipe.logic';
import { getAllWishlistItems } from '../../redux/slices/wishlist/logic/read.logic';
import { RootState } from '../../redux/store';
import './style.sass';

// component>>>
const Wishlist = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const user = localStorageObjGetter(`@authedUser`)?.user;

  let subT: number = 5 * 4.2;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;

  const { stage: wishlistStage, stageForDrop: wishlistStageForDrop, items, message } = useAppSelector((state: RootState) => state.Wishlist);

  useEffect(() => {
    let isMounted = true;

    if (user)
      if (isMounted) {
        dispatch(getAllWishlistItems(`?page=1`));
      }

    return () => {
      isMounted = false;
    };
  }, [dispatch, items.length]);

  const handleWishlistWipe = () => {
    dispatch(dropCollection(`wishlist`));
    dispatch(getAllWishlistItems(`?page=1`));
  };
  return (
    <main className="page wishlist-page cart-and-wish">
      <Container xxl>
        <Breadcrumb />
        {user ? (
          <div>
            {items.length === 0 ? null : (
              <h4>
                <span>Items you wished</span> <span className="count">{items.length}</span>
              </h4>
            )}
            <article className="list-wrapper">
              {wishlistStage === `busy` ? (
                <div>
                  <Skeleton target="prod-consume-card" />
                  <Skeleton target="prod-consume-card" />
                  <Skeleton target="prod-consume-card" />
                </div>
              ) : wishlistStage === `idle` ? (
                <div>
                  {items.length === 0 ? (
                    <NoItems forWish />
                  ) : (
                    <section className="list-items">
                      {items.map(({ name, count, priceInDollar, cover, subCategory, category, slug, _id }: any) => (
                        <ProdConsumeCard
                          name={name}
                          height={`7rem`}
                          forWishlist
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
              ) : wishlistStage === `rejected` ? (
                <section className="no-items">
                  <h2 className="heading">{message}</h2>
                </section>
              ) : null}
              <section className="declaration-and-controllers">
                <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
                <AppButton
                  loadState={wishlistStageForDrop}
                  value="Clear the whole List"
                  type="button"
                  wide
                  size="lg"
                  border={{ size: 1 }}
                  noBorder
                  handleEvent={handleWishlistWipe}
                  disabled={items.length === 0}
                />
                <AppButton
                  value="Move all Items to Wishlist"
                  type="button"
                  wide
                  size="lg"
                  bkgSecondary
                  border={{ size: 1 }}
                  noBorder={false}
                />
              </section>
            </article>
          </div>
        ) : (
          <NotLogged place="your wishlist items" />
        )}
      </Container>
    </main>
  );
};

export default Wishlist;
