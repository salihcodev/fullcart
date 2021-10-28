// pkgs:
import { useEffect, VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

// utils:
import './style.sass';
import { RootState } from '../../../redux/store';

// comps:
import ProdsCategoryCollection from '../prods-collection/prods-collection.comp';
import { getFurnitureProds } from '../../../redux/slices/prods-collections/furniture/logic/reading.logic';

// component>>>
const ShopProdsViewer: VFC<{}> = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const { stage, prods } = useAppSelector(
    (state: RootState) => state.FurnitureProds
  );

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(getFurnitureProds(`?category=furniture&limit=10`));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <section className="shop-prods-viewer">
      {false && (
        <section className="after-search">
          <h6>Results</h6>
        </section>
      )}

      <ProdsCategoryCollection
        title="Furniture"
        prods={prods}
        loadState={stage}
        catLink="shop/categories/furniture"
      />
    </section>
  );
};

export default ShopProdsViewer;
