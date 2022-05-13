// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ProdInfoShot from '../../components/base/prod-info-shot/prod-info-shot.comp';
import ProdDecision from '../../components/base/prod-decision/prod-decision.comp';
import ProdMoreInfo from '../../components/base/prod-more-info/prod-more-info.comp';
import { useParams } from 'react-router-dom';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getInfo } from '../../redux/slices/user-actions/logic/crud.logic';
import { RootState } from '../../redux/store';
import { GetSingleProdBySlug } from '../../redux/slices/prods-collection/logic/reading.logic';

// component>>>
const ProductViewer = () => {
  // use preConfigured hooks:
  const { slug }: any = useParams();
  const dispatch = useAppDispatch();
  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(GetSingleProdBySlug(slug));

      if (prod?.suppler?._id) {
        dispatch(getInfo({ id: prod?.suppler?._id, role: `suppler`, fields: `?fields=-password` }));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, prod?.suppler?._id, slug]);

  return (
    <Container xxl>
      <main className="page product-viewer-page">
        <Breadcrumb />
        <div className="page-wrapper">
          <ProdInfoShot />
          <ProdDecision />
          <ProdMoreInfo />
        </div>
      </main>
    </Container>
  );
};

export default ProductViewer;
