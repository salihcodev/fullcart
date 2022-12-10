// pkgs:
import { Fragment } from 'react';

// utils:
import './style.sass';

// comps:
import Alert from '../../distributed/alert/alert.comp';
import ProductImgs from './prod-imgs/prod-imgs.comp';
import ProductOverview from './prod-overview/prod-overview.comp';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import Skeleton from '../../distributed/skelton/skeleton.comp';

// component>>>
const ProdInfoShot: React.VFC<{}> = () => {
  const { stage } = useAppSelector((state: RootState) => state.SingleProd);

  return (
    <article className="product-info-shot">
      <Alert
        type=""
        title=""
        msg="Please be cautious and check with your supplier if this product is for virus protection purposes and if the (COVID-19) will affect your order."
      />
      <Fragment>
        {stage === `busy` ? (
          <Skeleton target="single-prod" />
        ) : (
          <div className="info-shot">
            <ProductImgs />
            <ProductOverview />
          </div>
        )}
      </Fragment>
    </article>
  );
};

export default ProdInfoShot;
