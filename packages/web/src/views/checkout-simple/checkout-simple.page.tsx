// pkgs:
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

// comps:
import ProdSmartCard from '../../components/distributed/prod-smart-card/prod-smart-card.comp';
import Alert from '../../components/distributed/alert/alert.comp';
import ProdHighlights from '../../components/distributed/prod-highlights/prod-highlights.comp';

// utils:
import './style.sass';
import { GetSingleProdBySlug } from '../../redux/slices/prods-collection/logic/reading.logic';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Container from '../../components/utils/container/container.util';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import CheckoutCalculations from '../../components/base/checkout-calculations/checkout-calculations.comp';
import UserCompleteCheckout from '../../components/distributed/user-complete-checkout/user-complete-checkout.comp';
import Skeleton from '../../components/distributed/skelton/skeleton.comp';
import { useQuery } from '../../common/utilities/useQuery/useQuery.util';

// component>>>
const CheckoutSimplePage = () => {
  // preConfigured hooks
  const dispatch = useDispatch();

  // custom hooks:
  const { search } = useLocation();
  const query = useQuery(search);

  const user = localStorageObjGetter(`@authedUser`)?.user;
  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  let subT: number = prod?.count! * prod?.priceInDollar!;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;

  const prodSlug = query.get(`prod`);
  useEffect(() => {
    if (prodSlug) dispatch(GetSingleProdBySlug(prodSlug));
  }, [dispatch, prodSlug]);

  return (
    <main className="page checkout-page checkout-simple-page">
      <Container xxl>
        <header className="header">
          <h3 className="heading">Request simple for this product</h3>
        </header>
        <article className="checkout-view">
          {user ? (
            <UserCompleteCheckout user={user} />
          ) : (
            <Alert type="warning" authWarning title="You must be signed in to continue" msg="Sorry, You can't go further from here without " />
          )}
          <aside className="curr-order-data">
            {stage === `busy` ? (
              <Skeleton target="checkout-prod-info" />
            ) : (
              <Fragment>
                <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
                <ProdSmartCard
                  name={prod?.name}
                  slug={prod?.slug}
                  priceInDollar={prod?.priceInDollar}
                  cover={prod?.cover}
                  _id={prod?._id}
                  category={prod?.categoryName}
                  subCategory={prod?.subcategoryName}
                  height={`7rem`}
                />
                <ProdHighlights prod={prod} />
              </Fragment>
            )}
          </aside>
        </article>
      </Container>
    </main>
  );
};

export default CheckoutSimplePage;
