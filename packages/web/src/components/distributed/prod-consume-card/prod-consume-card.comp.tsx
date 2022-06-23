// pkgs:
import { MdOutlineSwipe, MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';
import { BsArrowsFullscreen } from 'react-icons/bs';

// utils:
import './style.sass';

// comps:
import t from '../../../../public/assets/images/t.png';
import { IProdConsumeCard } from '../../../common/interfaces/prod-consume-card.interface';
import { Link } from 'react-router-dom';

const ProdConsumeCard: React.VFC<IProdConsumeCard> = ({
  prodName,
  prodCover,
  forCart,
  forOrders,
  forWishlist,
  height,
}) => {
  return (
    <div className="prod-consume-card">
      <section className="prod-cover">
        <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
      </section>
      <section className="prod-info">
        <div>
          <p className="name">{prodName?.substring(0, 70) + `...`}</p>
          {forCart ? (
            <div className="extra-cart-info">
              <div className="costs">
                <p>
                  <span>Price: </span>
                  <span>$5</span>
                </p>
                <p>
                  <span>Delivery Cost: </span>
                  <em>$0.99</em>
                </p>
              </div>
            </div>
          ) : null}
          {forWishlist ? (
            <div className="extra-wishlist-info">
              <p>
                <span>Price: </span>
                <b>$5</b>
              </p>
            </div>
          ) : null}
          {forOrders ? (
            <div className="extra-orders-info">
              <div className="costs">
                <p>
                  <span>Price: </span>
                  <span>$5</span>
                </p>
                <p>
                  <span>Delivery Cost: </span>
                  <em>$0.99</em>
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
            <Link to="">
              <BsArrowsFullscreen />
            </Link>
            <button>
              <MdOutlineEdit />
            </button>
            <button>
              <MdOutlineDelete />
            </button>
          </div>
        ) : null}
        {forOrders ? (
          <div className="wishlist-controllers">
            <button>
              <MdOutlineEdit />
            </button>
            <button>
              <MdOutlineDelete />
            </button>
          </div>
        ) : null}
        {forWishlist ? (
          <div className="orders-controllers">
            <button>
              <MdOutlineSwipe />
            </button>
            <button>
              <MdOutlineDelete />
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default ProdConsumeCard;
