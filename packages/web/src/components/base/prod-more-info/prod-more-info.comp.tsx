// pkgs:
import { Fragment, useEffect, useState } from 'react';

// utils:
import './style.sass';
import { LoadStateTypes } from '../../../common/@types/load-state.types';
import { ProdTypes } from '../../../common/@types/prod.types';

// comps:

// component>>>
const ProdMoreInfo: React.VFC<{
  prod: ProdTypes | null;
  loadState: LoadStateTypes;
}> = ({ prod, loadState }) => {
  const [currDetailsWrapper, setCurrDetailsWrapper] = useState<string>(`prodWrapper`);

  const tabStyle = { color: `#4b6483`, border: `3px solid #4b6483` };
  const prodActiveTabStyle = currDetailsWrapper === `prodWrapper` ? tabStyle : {};
  const supplerActiveTabStyle = currDetailsWrapper === `supplerWrapper` ? tabStyle : {};

  return (
    <article className="prod-more-info">
      <header className="more-info-switcher">
        <button style={prodActiveTabStyle} onClick={() => setCurrDetailsWrapper(`prodWrapper`)}>
          Product Details
        </button>
        <button style={supplerActiveTabStyle} onClick={() => setCurrDetailsWrapper(`supplerWrapper`)}>
          Suppler Details
        </button>
      </header>
      <article className="details-wrapper">
        {currDetailsWrapper === `prodWrapper` ? (
          <section className="prod-details-wrapper">
            <h3 className="heading">Overview</h3>
            <section className="quick-details">
              <h6 className="heading">Quick details</h6>
              <ul>
                {prod?.productInfo &&
                  Object.entries(prod?.productInfo).map((item): JSX.Element => {
                    return (
                      <li className="prop">
                        <span className="title">{item[0]}</span>
                        <span className="value">{item[1] === '' ? '—' : item[1]}</span>
                      </li>
                    );
                  })}
              </ul>
            </section>
            <section className="features">
              <h6 className="heading">Features</h6>
              <ul>
                {prod?.features?.map(
                  (feat: string): JSX.Element => (
                    <li className="feat">{feat}</li>
                  )
                )}
              </ul>
            </section>
            <section className="package-and-delivery">
              <Fragment>
                <h6 className="heading">Packaging & Delivery</h6>
                <ul>
                  {prod?.deliveryPackage &&
                    Object.entries(prod?.deliveryPackage).map((item): JSX.Element => {
                      return (
                        <li className="prop">
                          <span className="title">{item[0]}</span>
                          <span className="value">{item[1] === '' ? '—' : item[1]}</span>
                        </li>
                      );
                    })}
                  <li className="prop">
                    <span className="title">Leading time</span>
                    <div className="estimation-table">
                      <header className="table-header">
                        <span className="quantity">Quantity(Dozens)</span>
                        <span className="duration">Est. Time(days)</span>
                      </header>
                      {prod?.leadingTime.map(
                        ({ dozensAmount, estimationTime }): JSX.Element => (
                          <div className="table-row">
                            <span className="quantity">{dozensAmount}</span>
                            <span className="duration">{estimationTime}</span>
                          </div>
                        )
                      )}
                    </div>
                  </li>
                </ul>
              </Fragment>
            </section>
            <section className="prod-full-width-imgs">
              {prod?.images?.map((img): JSX.Element => {
                return (
                  <div>
                    <img src={img} alt="img" width="100%" height="auto" />;
                  </div>
                );
              })}
            </section>
          </section>
        ) : (
          <section className="suppler-details-wrapper">
            <h4 className="heading">Company Overview</h4>
          </section>
        )}
      </article>
    </article>
  );
};

export default ProdMoreInfo;
