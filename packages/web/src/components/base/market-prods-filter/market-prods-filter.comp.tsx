// pkgs:
import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';

// comps:

// component>>>
const MarketProdsFilter: VFC<{}> = () => {
  // use preConfigured hooks:
  // const dispatch = useAppDispatch();

  return (
    <section className="market-prods-filter">
      <h6>Filter</h6>
    </section>
  );
};

export default MarketProdsFilter;
