// pkgs:
import { Link, useParams } from 'react-router-dom';

// comps:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import Alert from '../../components/distributed/alert/alert.comp';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';

// component>>>
const CheckoutPage = () => {
  // preConfigured hooks:
  const { checkoutType }: any = useParams();

  const user = localStorageObjGetter(`@authedUser`)?.user;

  return (
    <main className="page checkout-page">
      <Container xxl>
        <header className="header">
          <h2 className="heading">
            {checkoutType === `cart-contents`
              ? `Order current cart contents`
              : checkoutType === `product`
              ? `Order this product now!`
              : `Request simple for this product`}
          </h2>
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
            {checkoutType === `cart-contents` ? `cart` : checkoutType === `product` ? `product` : `simple`}
          </aside>
        </article>
      </Container>
    </main>
  );
};

export default CheckoutPage;
