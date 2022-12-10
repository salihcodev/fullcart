// pkgs:
import { useEffect, useState, VFC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { FiHeart } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { BsHeartFill, BsPaypal } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';
import { MdOutlineVerified } from 'react-icons/md';

// utils:
import './style.sass';
import { Link, useHistory } from 'react-router-dom';
import { ProdTypes } from '../../../common/@types/prod.types';
import AppButton from '../button/app-button.comp';
import { addNewCartItem } from '../../../redux/slices/cart/logic/add.logic';
import { RootState } from '../../../redux/store';
import { addNewWishlistItem } from '../../../redux/slices/wishlist/logic/add.logic';
import { localStorageObjGetter } from '../../../common/utilities/localstorage-dealer/localstorage-getters.util';

// comps:

// component>>>
const ProductCard: VFC<{ prod: ProdTypes }> = ({
  prod: { name, priceInDollar, cover, slug, categoryName, subcategoryName, suppler, basicLeadingTime, payment, warranty, warrantyIn, prodBasicInfo, _id },
}) => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { stage: cartStage } = useAppSelector((state: RootState) => state.Cart);
  const { stage: wishlistStage } = useAppSelector((state: RootState) => state.Wishlist);

  const [wished, setWished] = useState<boolean>(false);

  const user = localStorageObjGetter(`@authedUser`)?.user;
  const handleAddToCart = () => {
    if (user) {
      dispatch(addNewCartItem({ name, slug, priceInDollar, cover, _id, categoryName, subcategoryName }));
    } else {
      history.push('/auth/customer/login');
    }
  };

  const handleAddToWishlist = () => {
    if (user) {
      dispatch(addNewWishlistItem({ name, slug, priceInDollar, cover, _id, categoryName, subcategoryName }));
    } else {
      history.push('/auth/customer/login');
    }
  };

  return (
    <div className="card-wrapper">
      <section className="card-head">
        <Link
          to={`/market/${categoryName}/${subcategoryName}/${slug}`}
          title={name}
          className="prod-cover"
          style={{ background: `url(${cover}) center/contain no-repeat` }}
        ></Link>
        <section className="prod-extra-info">
          <p className="added-by">
            <span className="txt">added by</span>
            <Link to={`/suppler/${suppler?._id}`} className="author">
              <b>{suppler?.companyName?.substring(0, 11) + `...`}</b>
              <span className="img"></span>
            </Link>
          </p>
          <p className="shipping-in">
            <span className="icon">
              <BiTimeFive />
            </span>
            <span className="txt">
              <b>{basicLeadingTime}</b> leading time
            </span>
          </p>
          <p className="payment-methods">
            <span className="icon">
              <BsPaypal />
            </span>
            <span className="txt">{payment}</span>
          </p>
          <p className="warranty">
            <span className="icon">
              <MdOutlineVerified />
            </span>
            <span className="txt">
              <span>Warranty: </span>
              <b>
                {warranty}
                {warrantyIn}
              </b>
            </span>
          </p>
          <p className="shipped-as">
            <span className="icon">
              <GoPackage />
            </span>
            <span className="txt">
              shipped as <b>{prodBasicInfo?.transportPackage}</b>
            </span>
          </p>
          <section className="prod-actions">
            <AppButton
              loadState={cartStage}
              value="Add to Cart"
              type="button"
              wide={false}
              size="sm"
              bkgDefault
              border={{ size: 1 }}
              noBorder
              handleEvent={handleAddToCart}
            />
            <AppButton
              loadState={wishlistStage}
              value={
                wished ? (
                  <span className="filled">
                    <BsHeartFill />
                  </span>
                ) : (
                  <span className="outlined">
                    <FiHeart />
                  </span>
                )
              }
              type="button"
              wide={false}
              size="sm"
              border={{ size: 1 }}
              noBorder
              handleEvent={handleAddToWishlist}
            />
          </section>
        </section>
      </section>
      <section className="prod-basic-info">
        <Link to={`/market/${categoryName}/${subcategoryName}/${slug}`} className="name">
          {name}
        </Link>
        <section className="rating">
          <p className="rating-stats">stats in stars</p>
          <small className="total-votes">(total votes)</small>
        </section>
        <h6 className="price">${priceInDollar}/piece</h6>
      </section>
    </div>
  );
};

export default ProductCard;
