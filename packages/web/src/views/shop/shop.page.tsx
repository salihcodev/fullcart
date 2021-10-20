// pkgs:

// comps:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import ShopSearcherSorter from '../../components/distributed/shop-search-sort/shop-searcher-sorter.comp';
import ShopProdsViewer from '../../components/base/shop-prods-viewer/shop-prods-viewer.comp';
import ShopProdsFilter from '../../components/base/shop-prods-filter/shop-prods-filter.comp';

// component>>>
const ShopPage = () => {
  return (
    <Container hasFilter>
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
