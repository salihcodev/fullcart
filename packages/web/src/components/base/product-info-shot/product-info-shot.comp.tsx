// pkgs:
import { useParams } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

// utils:
import './style.sass';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { GetSingleProdBySlug } from '../../../redux/slices/prods-collections/logic/reading.logic';

// comps:
import Alert from '../../distributed/alert/alert.comp';
import ProductImgs from './product-imgs/product-imgs.comp';
import ProductOverview from './product-overview/product-overview.comp';

// component>>>
const ProductInfoShot: React.VFC<{}> = () => {
  // use preConfigured hooks:
  const { slug }: any = useParams();
  const dispatch = useAppDispatch();
  const { stage, prod } = useAppSelector(
    (state: RootState) => state.SingleProd
  );

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(GetSingleProdBySlug(slug));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, slug]);

  return (
    <article className="product-info-shot">
      <Alert
        type=""
        title="NOTE"
        msg="Please be cautious and check with your supplier if this product is for virus protection purposes and if the (COVID-19) will affect your order."
      />
      <Fragment>
        {stage === `busy` ? (
          <section className="skeleton">
            <h1>Loading...</h1>
          </section>
        ) : (
          <div className="grid-shield">
            <ProductImgs prod={prod} />
            <ProductOverview prod={prod} />
          </div>
        )}
      </Fragment>
    </article>
  );
};

export default ProductInfoShot;
