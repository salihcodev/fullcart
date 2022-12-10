// pkgs:
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';
import { BsCartPlus } from 'react-icons/bs';
import { BsArrowsFullscreen, BsHeartFill } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// utils:
import './style.sass';
import { deleteCartItem } from '../../../redux/slices/cart/logic/delete.logic';
import { getAllCartItems } from '../../../redux/slices/cart/logic/read.logic';
import { RootState } from '../../../redux/store';
import { deleteWishlistItem } from '../../../redux/slices/wishlist/logic/delete.logic';
import { getAllWishlistItems } from '../../../redux/slices/wishlist/logic/read.logic';
import { deleteAnOrder } from '../../../redux/slices/order/logic/delete.logic';
import { getAllOrders } from '../../../redux/slices/order/logic/read.logic';
import { localStorageObjGetter } from '../../../common/utilities/localstorage-dealer/localstorage-getters.util';
import { addNewWishlistItem } from '../../../redux/slices/wishlist/logic/add.logic';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { IProdConsumeCard } from '../../../common/interfaces/prod-consume-card.interface';
import toFixedNumber from '../../../common/utilities/to-fixed-number.util';
import { addNewCartItem } from '../../../redux/slices/cart/logic/add.logic';

// comps:

const ProdConsumeCard: React.VFC<IProdConsumeCard> = ({
  name,
  forCart,
  forOrders,
  forWishlist,
  price,
  count,
  deliveryCost,
  cover,
  categoryName,
  subcategoryName,
  slug,
  id,
}) => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { stage: cartStage } = useAppSelector((state: RootState) => state.Cart);
  const { stage: orderStage } = useAppSelector((state: RootState) => state.Order);
  const { stage: wishlistStage } = useAppSelector((state: RootState) => state.Wishlist);

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const handleDeleteCartItem = () => {
    dispatch(deleteCartItem(id));
    dispatch(getAllCartItems(`?page=1`));
  };

  const handleDeleteWishlistItem = () => {
    dispatch(deleteWishlistItem(id));
    dispatch(getAllWishlistItems(`?page=1`));
  };

  const handleDeleteOrder = () => {
    dispatch(deleteAnOrder(id));
    dispatch(getAllOrders(`?page=1`));
  };

  const handleAddToCart = () => {
    dispatch(addNewCartItem({ name, slug, priceInDollar: price, cover, _id: id, categoryName, subcategoryName }));

    handleDeleteWishlistItem();
  };

  const [wished, setWished] = useState<boolean>(false);

  const handleAddToWishlist = () => {
    if (user) {
      dispatch(
        addNewWishlistItem({
          name,
          slug,
          priceInDollar: price,
          cover,
          _id: id,
          categoryName,
          subcategoryName,
        })
      );
    } else {
      history.push('/auth/customer/login');
    }
  };
  return (
    <div className="prod-consume-card">
      <section className="prod-cover">
        <div className="cover" style={{ background: `url(${cover}) center/contain no-repeat` }}>
          {forWishlist ? null : (
            <div className="button-holder">
              <button onClick={handleAddToWishlist}>
                {wishlistStage === `busy` ? (
                  <span className="spinner-for-wish loading-spinner"></span>
                ) : (
                  <span className="icon">
                    {wished ? (
                      <span className="filled">
                        <BsHeartFill />
                      </span>
                    ) : (
                      <span className="outlined">
                        <FiHeart />
                      </span>
                    )}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="prod-info">
        <div>
          <p className="name">{name}</p>
          {forCart ? (
            <div className="extra-cart-info">
              <div className="costs">
                <p>
                  <span>Price: </span>
                  <span>${toFixedNumber(Number(price) * Number(count))}</span>
                </p>
                <p>
                  <span>Delivery Cost: </span>
                  <em>{deliveryCost}</em>
                </p>
              </div>
              <div className="count">
                <p>
                  <span>Count: </span>
                  <span>{count}</span>
                </p>
              </div>
            </div>
          ) : null}
          {forWishlist ? (
            <div className="extra-wishlist-info">
              <p>
                <span>Price: </span>
                <span>$5</span>
              </p>
            </div>
          ) : null}
          {forOrders ? (
            <div className="extra-orders-info">
              <div className="costs">
                <p>
                  <span>Price: </span>
                  <span>${toFixedNumber(Number(price) * Number(count))}</span>
                </p>
                <p>
                  <span>Delivery Cost: </span>
                  <em>{deliveryCost}</em>
                </p>
                <button>
                  <small>Confirm order deliverability</small>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <section className="card-controllers">
        {forCart ? (
          <div className="cart-controllers">
            <div className="trigger-wrapper">
              <Link to={`market/${categoryName}/${subcategoryName}/${slug}`}>
                <BsArrowsFullscreen />
              </Link>
            </div>
            <div className="trigger-wrapper">
              <button onClick={handleDeleteCartItem}>
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ) : null}
        {forOrders ? (
          <div className="orders-controllers">
            <div className="trigger-wrapper">
              <button>
                <MdOutlineEdit />
              </button>
            </div>
            <div className="trigger-wrapper">
              <button onClick={handleDeleteOrder}>
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ) : null}
        {forWishlist ? (
          <div className="wishlist-controllers">
            <div className="trigger-wrapper">
              <button onClick={handleAddToCart}>
                <BsCartPlus />
              </button>
            </div>
            <div className="trigger-wrapper">
              <button onClick={handleDeleteWishlistItem}>
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default ProdConsumeCard;
