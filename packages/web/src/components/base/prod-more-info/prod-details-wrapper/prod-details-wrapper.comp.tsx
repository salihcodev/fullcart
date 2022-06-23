// pkgs:
import { Fragment } from 'react';

// utils:
import './style.sass';
import { ProdTypes } from '../../../../common/@types/prod.types';

// comps:

// component>>>
const ProdDetailsWrapper: React.VFC<{ prod: ProdTypes | null }> = ({ prod }) => {
  return (
    <section className="prod-details-wrapper">
      <h3 className="heading">Overview</h3>
      <section className="quick-details">
        <h6 className="heading">Quick details</h6>
        <ul>
          {prod?.prodBasicInfo &&
            Object.entries(prod?.prodBasicInfo).map((item): JSX.Element => {
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
              <img loading="lazy" src={img} alt="img" width="100%" height="auto" />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ProdDetailsWrapper;
