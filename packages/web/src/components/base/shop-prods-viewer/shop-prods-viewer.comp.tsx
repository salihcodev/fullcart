// pkgs:
import { useEffect, VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

// utils:
import './style.sass';
import { RootState } from '../../../redux/store';

// comps:
import ProdsCategoryRow from '../prods-row/prods-row.comp';
import ProductCard from '../prod-card/prod-card.comp';
import { getFurnitureProds } from '../../../redux/slices/prods-collections/furniture/logic/reading.logic';

// component>>>
const ShopProdsViewer: VFC<{}> = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const { stage, prods: furnitureProds } = useAppSelector(
    (state: RootState) => state.FurnitureProds
  );

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(
        getFurnitureProds({
          category: `furniture`,
          filterOptions: `?page=1&limit=10`,
        })
      );
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  // FILL THE DATA:
  // furniture prods filling
  const furnProds = furnitureProds?.map(
    (prod): JSX.Element => (
      <div className="slide">
        <ProductCard prod={prod} />
      </div>
    )
  );

  return (
    <section className="shop-prods-viewer">
      {false && (
        <section className="after-search">
          <h6>Results</h6>
        </section>
      )}

      <ProdsCategoryRow
        title="Furniture"
        prods={furnProds}
        loadState={stage}
        catLink="shop/categories/furniture/all"
      />
    </section>
  );
};

export default ShopProdsViewer;
