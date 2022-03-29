// pkgs:
import { useEffect } from 'react';
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

// component>>>
const CheckoutSimplePage = () => {
  // preConfigured hooks:
  const user = localStorageObjGetter(`@authedUser`)?.user;
  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  const dispatch = useDispatch();

  const slug = useLocation().search.slice(6);

  useEffect(() => {
    dispatch(GetSingleProdBySlug(slug));
  }, [dispatch, slug]);

  return (
    <main className="page checkout-page checkout-simple-page">
      <Container xxl>
        <header className="header">
          <h2 className="heading">Request simple for this product</h2>
        </header>
        <article className="checkout-view">
          {user ? (
            <section className="to-complete-order">user data to complete</section>
          ) : (
            <Alert
              type="warning"
              authWarning
              title="You must be signed in to continue"
              msg="Sorry, You can't go further from here without "
            />
          )}
          <aside className="curr-order-data">
            <ProdSmartCard prod={prod} />
            <ProdHighlights prod={prod} />
          </aside>
        </article>
      </Container>
    </main>
  );
};

export default CheckoutSimplePage;
