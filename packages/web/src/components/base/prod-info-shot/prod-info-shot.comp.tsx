// pkgs:
import { Fragment } from 'react';

// utils:
import './style.sass';
import { ProdTypes } from '../../../common/@types/prod.types';
import { LoadStateTypes } from '../../../common/@types/load-state.types';

// comps:
import Alert from '../../distributed/alert/alert.comp';
import ProductImgs from './prod-imgs/prod-imgs.comp';
import ProductOverview from './prod-overview/prod-overview.comp';

// component>>>
const ProdInfoShot: React.VFC<{
  prod: ProdTypes | null;
  loadState: LoadStateTypes;
}> = ({ prod, loadState }) => {
  return (
    <article className="product-info-shot">
      <Alert
        type=""
        title="NOTE"
        msg="Please be cautious and check with your supplier if this product is for virus protection purposes and if the (COVID-19) will affect your order."
      />
      <Fragment>
        {loadState === `busy` ? (
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

export default ProdInfoShot;
