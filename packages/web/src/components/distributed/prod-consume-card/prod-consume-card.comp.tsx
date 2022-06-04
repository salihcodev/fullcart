// pkgs:

// utils:
import './style.sass';

import t from '../../../../public/assets/images/t.png';
import { IProdConsumeCard } from '../../../common/interfaces/prod-consume-card.interface';

// comps:

const ProdConsumeCard: React.VFC<IProdConsumeCard> = ({
  prodName,
  prodCover,
  forCart,
  forOrders,
  forWishlist,
  height,
}) => {
  return (
    <div className="prod-consume-card" style={{ height: height || `10rem` }}>
      <section className="prod-cover">
        <img src={t} alt="product cover" />
      </section>
      <section className="prod-info">
        <div>
          <p className="name">{prodName?.substring(0, 70) + `...`}</p>
          {forCart ? <div className="extra-cart-info">cart related info</div> : null}
          {forWishlist ? <div className="extra-wishlist-info">wishlist related info</div> : null}
          {forOrders ? <div className="extra-orders-info">orders related info</div> : null}
        </div>
      </section>
      <section className="card-controllers">
        {forCart ? (
          <div className="cart-controllers">
            <button>@</button>
            <button>@</button>
            <button>@</button>
          </div>
        ) : null}
        {forOrders ? (
          <div className="wishlist-controllers">
            <button>@</button>
            <button>@</button>
          </div>
        ) : null}
        {forWishlist ? (
          <div className="orders-controllers">
            <button>@</button>
            <button>@</button>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default ProdConsumeCard;
