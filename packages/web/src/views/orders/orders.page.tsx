// pkgs:

// comps:
import { useState, useEffect } from 'react';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import AppButton from '../../components/distributed/button/app-button.comp';
import NotLogged from '../../components/distributed/not-logged/not-logged.comp';
import ProdConsumeCard from '../../components/distributed/prod-consume-card/prod-consume-card.comp';
import Skeleton from '../../components/distributed/skelton/skeleton.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllOrders } from '../../redux/slices/order/logic/read.logic';
import { RootState } from '../../redux/store';
import './style.sass';

// component>>>
const OrdersPage = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const user = localStorageObjGetter(`@authedUser`)?.user;

  const [activeBtn, setActiveBtn] = useState(`all`);

  const orderBtnsData = [
    { name: `all`, value: 'All', btnCount: 15 },
    { name: `shipped`, value: 'Shipped', btnCount: 4 },
    { name: `processed`, value: 'On The Way', btnCount: 9 },
    { name: `canceled`, value: 'Canceled', btnCount: 2 },
  ];

  const { stage: orderStage, items, message } = useAppSelector((state: RootState) => state.Order);

  useEffect(() => {
    let isMounted = true;

    if (user)
      if (isMounted) {
        dispatch(getAllOrders(`?page=1`));
      }

    return () => {
      isMounted = false;
    };
  }, [dispatch, items.length]);

  return (
    <main className="page orders-page">
      <Container xxl>
        <Breadcrumb />
        {user ? (
          <div>
            <h4>
              <span>Ordered Items</span> <span className="count">{items.length}</span>
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
                    btnCount={name === `all` ? items.length : name === `shipped` ? `#` : name === `processed` ? `#` : `#`}
                    activeBkg={name === activeBtn ? `#2fa57d` : ``}
                    activeWhite={name === activeBtn}
                    handleEvent={() => setActiveBtn(name)}
                  />
                ))}
              </section>
              <section className="list-items">
                <h5 className="filteration-heading">
                  {activeBtn === `processed` ? (
                    <p>
                      <span>
                        {activeBtn} <small>On the way</small>
                      </span>
                    </p>
                  ) : (
                    activeBtn
                  )}
                </h5>
                {orderStage === `busy` ? (
                  <div>
                    <Skeleton target="prod-consume-card" />
                    <Skeleton target="prod-consume-card" />
                    <Skeleton target="prod-consume-card" />
                  </div>
                ) : orderStage === `idle` ? (
                  <div>
                    {items.length === 0 ? (
                      <section className="no-items">
                        <h2 className="heading">There's no items to view</h2>
                      </section>
                    ) : (
                      <section className="list-items">
                        {items.map(({ name, count, priceInDollar, cover, subCategory, category, slug, _id }: any) => (
                          <ProdConsumeCard
                            name={name}
                            height={`7rem`}
                            forOrders
                            price={priceInDollar}
                            deliveryCost={0.95}
                            cover={cover}
                            category={category}
                            subCategory={subCategory}
                            slug={slug}
                            id={_id}
                            count={count}
                          />
                        ))}
                      </section>
                    )}
                  </div>
                ) : orderStage === `rejected` ? (
                  <section className="no-items">
                    <h2 className="heading">{message}</h2>
                  </section>
                ) : null}
              </section>
            </article>
          </div>
        ) : (
          <NotLogged place="your orders" />
        )}
      </Container>
    </main>
  );
};

export default OrdersPage;
