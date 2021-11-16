// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';

// comps:

// component>>>
const ShopProdsViewer: VFC<{}> = () => {
  // use preConfigured hooks:
  // const dispatch = useAppDispatch();
  // const { stage, prods: furnitureProds } = useAppSelector((state: RootState) => state.FurnitureProds);

  // useEffect(() => {
  //   let isMounted = true;

  //   if (isMounted) {
  //     dispatch(GetCollectionOfProds(`?category=furniture&limit=10`));
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [dispatch]);

  return (
    <section className="shop-prods-viewer">
      {false && (
        <section className="after-search">
          <h6>Results</h6>
        </section>
      )}
    </section>
  );
};

export default ShopProdsViewer;
