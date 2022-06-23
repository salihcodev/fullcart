// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import AppButton from '../../components/distributed/button/app-button.comp';
import CheckoutCalculations from '../../components/distributed/checkout-calculations/checkout-calculations.comp';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const Cart = () => {
  let subT: number = 5 * 4.2;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;
  return (
    <main className="page cart-page cart-and-wish">
      <Container xxl>
        <Breadcrumb />
        <h4>
          <span>Your Cart Items</span> <span className="count">4</span>
        </h4>
        <article className="list-wrapper">
          <section className="list-items">
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forCart
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forCart
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forCart
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forCart
            />
          </section>
          <section className="declaration-and-controllers">
            <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
            <AppButton value="Clear the whole cart" type="button" wide size="lg" border={{ size: 1 }} noBorder />
            <AppButton
              value="Checkout"
              type="button"
              wide
              size="lg"
              bkgSecondary
              border={{ size: 1 }}
              noBorder={false}
              path="/"
            />
          </section>
        </article>
      </Container>
    </main>
  );
};

export default Cart;
