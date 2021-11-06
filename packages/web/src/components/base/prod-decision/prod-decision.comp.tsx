// pkgs:
import { BiMessageDetail } from 'react-icons/bi';
import { BsCartPlus } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';

// utils:
import './style.sass';
import { ProdTypes } from '../../../common/@types/prod.types';
import { LoadStateTypes } from '../../../common/@types/load-state.types';

// comps:
import AppButton from '../../distributed/button/app-button.comp';

// component>>>
const ProdDecision: React.VFC<{
  prod: ProdTypes | null;
  loadState: LoadStateTypes;
}> = ({ prod, loadState }) => {
  return (
    <article className="product-decision">
      <section className="to-order-info">
        <section>
          <p className="price-and-quantity">
            <span className="default-quantity">
              <span>2</span> <span>Dozens</span>
            </span>
            <span className="value">$9</span>
          </p>
          <p className="processing-time">
            <span className="txt">Processing time</span>
            <span className="txt2">12 day/s</span>
            <span className="icon">
              <IoIosTimer />
            </span>
          </p>
        </section>
        <section>
          <p className="shipping-price">
            <span className="title">Shipping</span>
            <span className="value">$11.98</span>
          </p>
          <p className="shipped-by">shippedpy</p>
        </section>
        <section>
          <p className="total">
            <span className="title">Total</span>
            <span className="value">$20.98</span>
          </p>
          <p className="estimated-delivery">
            <span className="title">Estimated delivery</span>
            <span className="value">11/25 2021</span>
          </p>
        </section>
        <section className="order-actions">
          <AppButton
            value="Start Order"
            type="button"
            wide
            size="sm"
            bkgDefault
            border={{ size: 1 }}
            noBorder={false}
            path="/orders"
          />
          <AppButton
            value="Contact Suppler"
            type="button"
            wide
            size="sm"
            border={{ size: 1 }}
            noBorder={false}
            icon={<BiMessageDetail />}
            isIconBefore
            path="/contact-suppler?src=supplerName"
          />
          <AppButton
            loadState={`idle`}
            value="Add To Basket"
            type="button"
            wide
            size="sm"
            border={{ size: 1 }}
            noBorder
            icon={<BsCartPlus />}
            isIconBefore={false}
          />
        </section>
      </section>
    </article>
  );
};

export default ProdDecision;
