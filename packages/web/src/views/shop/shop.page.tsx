// pkgs:

// comps:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import ShopProdsViewer from '../../components/base/shop-prods-viewer/shop-prods-viewer.comp';
import ShopProdsFilter from '../../components/base/shop-prods-filter/shop-prods-filter.comp';
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ShopSearcherSorter from '../../components/distributed/shop-search-sort/shop-searcher-sorter.comp';

// component>>>
const ShopPage = () => {
  return (
    <Container hasFilter>
      <Breadcrumb />
      <main className="page shop-page">
        <ShopProdsFilter />
        <section className="shop-prods">
          <ShopSearcherSorter />
          <ShopProdsViewer />
        </section>
      </main>
    </Container>
  );
};

export default ShopPage;
