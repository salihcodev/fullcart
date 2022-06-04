// pkgs:

// comps:

// utils:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import AppButton from '../../components/distributed/button/app-button.comp';
import CheckoutCalculations from '../../components/distributed/checkout-calculations/checkout-calculations.comp';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const Wishlist = () => {
  let subT: number = 5 * 4.2;
  const DELIVERY = 10;
  const TAXES = 1.2;
  const TOTAL = subT * TAXES + DELIVERY;

  return (
    <main className="page wishlist-page cart-and-wish">
      <Container xxl>
        <Breadcrumb />
        <h4>
          <span>Items you wished</span> <span className="count">9</span>
        </h4>
        <article className="list-wrapper">
          <section className="list-items">
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forWishlist
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forWishlist
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forWishlist
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forWishlist
            />
          </section>
          <section className="declaration-and-controllers">
            <CheckoutCalculations calcs={{ delivery: DELIVERY, subTotal: subT, total: TOTAL }} />
            <AppButton value="Clear the whole List" type="button" wide size="lg" border={{ size: 1 }} noBorder />
            <AppButton
              value="Move all Items to Cart"
              type="button"
              wide
              size="lg"
              bkgSecondary
              border={{ size: 1 }}
              noBorder={false}
            />
          </section>
        </article>
      </Container>
    </main>
  );
};

export default Wishlist;
