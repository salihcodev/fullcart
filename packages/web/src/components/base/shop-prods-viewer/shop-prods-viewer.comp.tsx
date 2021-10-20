// pkgs:
import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';

// comps:
import ProdsCategoryRow from '../prods-row/prods-row.comp';
import ProductCard from '../prod-card/prod-card.comp';

// component>>>
const ShopProdsViewer: VFC<{}> = () => {
  // use preConfigured hooks:
  // const dispatch = useAppDispatch();

  return (
    <section className="shop-prods-viewer">
      {false && (
        <section className="after-search">
          <h6>Results</h6>
        </section>
      )}

      <ProdsCategoryRow title="Furniture" prods={furnitureProds} />
    </section>
  );
};

export default ShopProdsViewer;

const furnitureProds = [
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
  <div className="slide">
    <ProductCard />
  </div>,
];
