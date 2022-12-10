// pkgs:
import { BiMessageDetail } from 'react-icons/bi';
import { BsCartPlus } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import { useState, useEffect } from 'react';

// utils:
import './style.sass';
import { RootState } from '../../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import toFixedNumber from '../../../../common/utilities/to-fixed-number.util';

// comps:
import AppButton from '../../../distributed/button/app-button.comp';
import ContactSupplerModal from './contact-suppler-modal/contact-suppler-modal.comp';
import { GoPackage } from 'react-icons/go';
import Skeleton from '../../../distributed/skelton/skeleton.comp';
import { addNewCartItem } from '../../../../redux/slices/cart/logic/add.logic';
import { getAllCartItems } from '../../../../redux/slices/cart/logic/read.logic';
import { localStorageObjGetter } from '../../../../common/utilities/localstorage-dealer/localstorage-getters.util';
import { useHistory } from 'react-router-dom';

// component>>>
const ProdToOrder: React.VFC<{}> = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { stage: singleProdStage, prod, count } = useAppSelector((state: RootState) => state.SingleProd);
  const { stage: cartStage } = useAppSelector((state: RootState) => state.Cart);

  const shippingAlias = 12.99;

  // total with shipping:
  const total = prod?.priceInDollar && count * prod?.priceInDollar + shippingAlias;

  const user = localStorageObjGetter(`@authedUser`)?.user;
  const handleAddToCart = () => {
    if (user) {
      dispatch(
        addNewCartItem({
          name: prod?.name,
          slug: prod?.slug,
          priceInDollar: prod?.priceInDollar,
          cover: prod?.cover,
          _id: prod?._id,
          categoryName: prod?.categoryName,
          subcategoryName: prod?.subcategoryName,
          count,
        })
      );
    } else {
      history.push('/auth/customer/login');
    }
  };

  return (
    <section className="to-order-info">
      {singleProdStage === `busy` ? (
        <Skeleton target="single-prod-to-order" />
      ) : (
        <div>
          {count === 1 ? (
            <section className="order-limit-case">
              <h5 className="heading">Attention!</h5>
              <p>You'r acceded the minimum order limit, You can order a simple instade:)</p>
              <AppButton
                value="Buy Simple?"
                type="button"
                wide
                size="md"
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
                <span>{count}</span> <span>Dozens</span>
              </span>
              <span className="value animate-up">${toFixedNumber(total && total - shippingAlias)}</span>
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
              <span className="value animate-down">${toFixedNumber(total)}</span>
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
              size="md"
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
              size="md"
              border={{ size: 1 }}
              noBorder={false}
              icon={<BiMessageDetail />}
              isIconBefore
              handleEvent={() => setIsModalOpen(true)}
            />
            <AppButton
              loadState={cartStage}
              value="Add To Basket"
              type="button"
              wide
              size="md"
              border={{ size: 1 }}
              noBorder
              icon={<BsCartPlus />}
              isIconBefore={false}
              handleEvent={handleAddToCart}
            />
          </section>
        </div>
      )}
      <ContactSupplerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
};

export default ProdToOrder;
