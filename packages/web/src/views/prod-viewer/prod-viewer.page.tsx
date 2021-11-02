// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const ProductViewer = () => {
  return (
    <Container xxl>
      <main className="page product-viewer-page">
        <Breadcrumb />
        <h2>Product Viewer</h2>
      </main>
    </Container>
  );
};

export default ProductViewer;
