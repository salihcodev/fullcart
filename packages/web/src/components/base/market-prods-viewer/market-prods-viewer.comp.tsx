// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';
import consumerElectronics from '../../../../public/assets/images/cats-row/consumer-electronics.svg';
import apparel from '../../../../public/assets/images/cats-row/apparel.svg';
import vehicles from '../../../../public/assets/images/cats-row/vehicles-parts-and-accessories.svg';
import machinary from '../../../../public/assets/images/cats-row/machinary.svg';

// comps:
import CategoryRow from '../category-row/category-row.comp';

// component>>>
const MarketProdsViewer: VFC<{}> = () => {
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

  const res = [];
  return (
    <section className="market-prods-viewer">
      {res.length > 0 ? (
        <section className="after-search">
          <h6>Results</h6>
        </section>
      ) : (
        <div>
          <CategoryRow forMarket title="consumer electronics" rowImg={consumerElectronics} linkToSource="/" imgClr="#6586be" />
          <CategoryRow forMarket title="apparel" rowImg={apparel} linkToSource="/" imgClr="#a9c7c7" />
          <CategoryRow forMarket title="vehicles parts and accessories" rowImg={vehicles} linkToSource="/" imgClr="#678ca8" />
          <CategoryRow forMarket title="Machinary" rowImg={machinary} linkToSource="/" imgClr="#c1cfc1" />
        </div>
      )}
    </section>
  );
};

export default MarketProdsViewer;
