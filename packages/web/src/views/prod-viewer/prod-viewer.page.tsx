// pkgs:

// comps:
import ProductDecision from '../../components/base/product-decision/product-decision.comp';
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import Alert from '../../components/distributed/alert/alert.comp';
import ProductInfoShot from '../../components/base/product-info-shot/product-info-shot.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const ProductViewer = () => {
  return (
    <Container xxl>
      <main className="page product-viewer-page">
        <Breadcrumb />
        <div className="page-wrapper">
          <ProductInfoShot />
          <ProductDecision />
        </div>
      </main>
    </Container>
  );
};

export default ProductViewer;
