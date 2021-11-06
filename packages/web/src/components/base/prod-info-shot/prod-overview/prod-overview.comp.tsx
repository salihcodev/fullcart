// pkgs:

// utils:
import './style.sass';
import { MdDone, MdVerifiedUser } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ProdTypes } from '../../../../common/@types/prod.types';

// comps:
import AppButton from '../../../distributed/button/app-button.comp';
import { GoPackage } from 'react-icons/go';

// component>>>
const ProductOverview: React.VFC<{ prod: ProdTypes | null }> = ({ prod }) => {
  // use preConfigured hooks:

  return (
    <section className="prod-overview">
      <section className="prod-part must-info">
        <div className="flags">
          <div className="ship">
            {prod?.isReadyToShip ? (
              <span className="value">Ready to ship</span>
            ) : null}
          </div>
          {prod?.stock! >= 10 ? (
            <div className="stock">
              <span className="icon">
                <MdDone />
              </span>
              <span className="value">In Stock</span>
            </div>
          ) : null}
          {prod?.isFastToDispatch ? (
            <div className="dispatch">
              <span className="icon">
                <MdDone />
              </span>
              <span className="value">Fast Dispatch</span>
            </div>
          ) : null}
        </div>
        <h5 className="heading">{prod?.name}</h5>
        {prod?.productInfo?.model ? (
          <span className="model">({prod?.productInfo?.model})</span>
        ) : null}
      </section>
      <section className="prod-part dozens-offers">
        {prod?.dozensOffers?.map(
          ({ dozensAmount, dozenPrice }): JSX.Element => {
            return (
              <section className="offer">
                <span>{dozensAmount}</span>
                <span>Dozens</span>
                <span>${dozenPrice}</span>
              </section>
            );
          }
        )}
      </section>
      <section className="prod-part colors-and-quantity-controllers">
        <section className="available-colors">
          <div className="flex-wrapper">
            {prod?.availableColors?.map(
              (clr): JSX.Element => (
                <span className="clr" style={{ background: clr }}></span>
              )
            )}
          </div>
        </section>
        <section className="quantity-controllers">
          <span className="fixed-prod-price">${prod?.priceInDollar}</span>
          <button>
            <AiOutlinePlus />
          </button>
          <input
            type="number"
            name="quantityController"
            id="quantityController"
            min={prod?.minimumOrder}
            max={prod?.stock! / 2}
            value={prod?.minimumOrder}
          />
          <button>
            <AiOutlineMinus />
          </button>
        </section>
      </section>
      <section className="prod-part request-simple">
        <section>
          <span>Simples</span>
        </section>
        <section>
          <p>
            {prod?.priceInDollar}
            <span>/Dozen | 1 Dozen (Min. Order)</span>
          </p>
        </section>
        <section>
          <AppButton
            loadState={`idle`}
            value="Buy Simple"
            type="button"
            wide
            size="sm"
            border={{ size: 1 }}
            noBorder
            icon={<GoPackage />}
            isIconBefore
            path="request-simple"
          />
        </section>
      </section>
      <section className="prod-part protection-cover">
        <section>
          <span>Protection</span>
        </section>
        <section>
          <p>
            <span className="icon">
              <MdVerifiedUser />
            </span>
            <span className="value">Trade Assurance</span>
            <small>protection your fullcart.com order</small>
          </p>
        </section>
      </section>
      <section className="prod-part refunding-policy">
        <p>
          <span className="icon">
            <MdDone />
          </span>
          <span className="value">Refund Policy</span>
        </p>
      </section>
    </section>
  );
};

export default ProductOverview;
