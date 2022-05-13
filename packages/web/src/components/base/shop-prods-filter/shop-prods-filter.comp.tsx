// pkgs:
import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';

// comps:

// component>>>
const ShopProdsFilter: VFC<{}> = () => {
  // use preConfigured hooks:
  // const dispatch = useAppDispatch();

  return (
    <section className="shop-prods-filter">
      <h6>Filter</h6>
    </section>
  );
};

export default ShopProdsFilter;
