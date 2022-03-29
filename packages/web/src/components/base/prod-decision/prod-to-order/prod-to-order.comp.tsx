// pkgs:
import { BiMessageDetail } from 'react-icons/bi';
import { BsCartPlus } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import { useState } from 'react';

// utils:
import './style.sass';
import { RootState } from '../../../../redux/store';
import { useAppSelector } from '../../../../redux/hooks';
import toFixedNumber from '../../../../common/utilities/to-fixed-number.util';

// comps:
import AppButton from '../../../distributed/button/app-button.comp';
import ContactSupplerModal from './contact-suppler-modal/contact-suppler-modal.comp';
import { GoPackage } from 'react-icons/go';

// component>>>
const ProdToOrder: React.VFC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  const shippingAlias = 12.99;

  // total with shipping:
  const total = prod?.count && prod?.priceInDollar && prod?.count * prod?.priceInDollar + shippingAlias;

  return (
    <section className="to-order-info">
      {prod?.count === 1 ? (
        <section className="order-limit-case">
          <h5 className="heading">Attention!</h5>
          <p>You'r acceded the minimum order limit, You can order a simple instade:)</p>
          <AppButton
            value="Buy Simple?"
            type="button"
            wide
            size="sm"
            border={{ size: 1 }}
            noBorder
            icon={<GoPackage />}
            isIconBefore
            path="/checkout/simple"
            openDetachedly
          />
        </section>
      ) : null}
      <section>
        <p className="price-and-quantity">
          <span className="default-quantity">
            <span>{prod?.count}</span> <span>Dozens</span>
          </span>
          <span className="value">${toFixedNumber(total && total - shippingAlias)}</span>
        </p>
        <p className="processing-time">
          <span className="txt">Processing time</span>
          <span className="txt2">{prod?.basicLeadingTime} day/s</span>
          <span className="icon">
            <IoIosTimer />
          </span>
        </p>
      </section>
      <section>
        <p className="shipping-price">
          <span className="title">Shipping</span>
          <span className="value">${shippingAlias}</span>
        </p>
        <p className="shipped-by">
          <span>shippedpy</span>
          <span>Aramex</span>
        </p>
      </section>
      <section>
        <p className="total">
          <span className="title">Total</span>
          <span className="value">${toFixedNumber(total)}</span>
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
          path={`/checkout/product?prod=${prod?.slug}`}
          openDetachedly
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
          handleEvent={() => setIsModalOpen(true)}
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
      <ContactSupplerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
};

export default ProdToOrder;
