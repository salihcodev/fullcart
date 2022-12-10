// pkgs:

// utils:
import { IProdSmartCard } from '../../../common/interfaces/prod-smart-card.interface';
import './style.sass';

import t from '../../../../public/assets/images/fullcart-temp-img.svg';
import { addNewWishlistItem } from '../../../redux/slices/wishlist/logic/add.logic';
import { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { localStorageObjGetter } from '../../../common/utilities/localstorage-dealer/localstorage-getters.util';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';

// comps:

const ProdSmartCard: React.VFC<any> = ({ name, slug, priceInDollar, cover, _id, category, subCategory, height }) => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [wished, setWished] = useState<boolean>(false);
  const { stage: wishlistStage } = useAppSelector((state: RootState) => state.Wishlist);

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const handleAddToWishlist = () => {
    if (user) {
      dispatch(
        addNewWishlistItem({
          name,
          slug,
          priceInDollar,
          cover,
          _id,
          category,
          subCategory,
        })
      );
    } else {
      history.push('/auth/customer/login');
    }
  };
  return (
    <div className="prod-smart-card" style={{ height: height || `10rem` }}>
      <section className="prod-cover">
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
        <img src={t} alt="product cover" />
      </section>
      <section className="prod-info">
        <div>
          <p className="name">{name}</p>
        </div>
      </section>
    </div>
  );
};

export default ProdSmartCard;
