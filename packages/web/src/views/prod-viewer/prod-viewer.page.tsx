// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ProdInfoShot from '../../components/base/prod-info-shot/prod-info-shot.comp';
import ProdDecision from '../../components/base/prod-decision/prod-decision.comp';
import ProdMoreInfo from '../../components/base/prod-more-info/prod-more-info.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { GetSingleProdBySlug } from '../../redux/slices/prods-collections/logic/reading.logic';
import { RootState } from '../../redux/store';

// component>>>
const ProductViewer = () => {
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
    <Container xxl>
      <main className="page product-viewer-page">
        <Breadcrumb />
        <div className="page-wrapper">
          <ProdInfoShot prod={prod} loadState={stage} />
          <ProdDecision prod={prod} loadState={stage} />
          <ProdMoreInfo prod={prod} loadState={stage} />
        </div>
      </main>
    </Container>
  );
};

export default ProductViewer;
