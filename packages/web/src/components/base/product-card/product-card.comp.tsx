// pkgs:
import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

// utils:
import './style.sass';
import { Link } from 'react-router-dom';

// comps:

// component>>>
const ProductCard: VFC<{}> = () => {
  // use preConfigured hooks:
  // const dispatch = useAppDispatch();

  return (
    <div className="card-wrapper">
      {/* <Link to={`/shop/doors/${id}`} title={name} className="door-card">
        <div className="user-actions">controllers</div>
      </Link> */}
      {/* <div className="door-info">
        <p className="description">{name}</p>
        <h6 className="price">${price}/piece</h6>
      </div> */}
    </div>
  );
};

export default ProductCard;
