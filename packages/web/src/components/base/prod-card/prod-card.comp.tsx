// pkgs:
import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

// utils:
import './style.sass';
import { Link } from 'react-router-dom';
import { ProdTypes } from '../../../common/@types/prod.types';

// comps:

// component>>>
const ProductCard: VFC<{ prod: ProdTypes }> = ({ prod: { name, price, slug } }) => {
  // use preConfigured hooks:
  // const dispatch = useAppDispatch();

  return (
    <div className="card-wrapper">
      <Link to={`/shop/${slug}`} title={name} className="prod-card">
        <div className="user-actions">controllers</div>
      </Link>
      <div className="prod-info">
        <p className="description">{name}</p>
        <h6 className="price">${price}/piece</h6>
      </div>
    </div>
  );
};

export default ProductCard;
