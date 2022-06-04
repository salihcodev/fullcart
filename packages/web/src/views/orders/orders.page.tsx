// pkgs:

// comps:
import { useState } from 'react';
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import AppButton from '../../components/distributed/button/app-button.comp';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const OrdersPage = () => {
  const [activeBtn, setActiveBtn] = useState(`all`);

  const orderBtnsData = [
    { name: `all`, value: 'All', btnCount: 15 },
    { name: `shipped`, value: 'Shipped', btnCount: 4 },
    { name: `on the way`, value: 'On The Way', btnCount: 9 },
    { name: `canceled`, value: 'Canceled', btnCount: 2 },
  ];

  return (
    <main className="page orders-page">
      <Container xxl>
        <Breadcrumb />
        <h4>
          <span>Ordered Items</span> <span className="count">15</span>
        </h4>
        <article className="list-wrapper">
          <section className="router">
            {orderBtnsData.map(({ name, value, btnCount }) => (
              <AppButton
                value={value}
                type="button"
                wide
                size="md"
                border={{ size: 1 }}
                noBorder
                btnCount={btnCount}
                activeBkg={name === activeBtn ? `#2fa57d` : ``}
                activeWhite={name === activeBtn}
                handleEvent={() => setActiveBtn(name)}
              />
            ))}
          </section>
          <section className="list-items">
            <h5 className="filteration-heading">{activeBtn}</h5>
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forOrders
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forOrders
            />
            <ProdConsumeCard
              prodName={`Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag`}
              prodCover={``}
              height={`7rem`}
              forOrders
            />
          </section>
        </article>
      </Container>
    </main>
  );
};

export default OrdersPage;
