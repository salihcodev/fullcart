// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ShopSearcherSorter from '../../components/distributed/shop-search-sort/shop-searcher-sorter.comp';
import ShopProdsViewer from '../../components/base/shop-prods-viewer/shop-prods-viewer.comp';
import ShopProdsFilter from '../../components/base/shop-prods-filter/shop-prods-filter.comp';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';

// component>>>
const ShopPage = () => {
  return (
    <Container xxl>
      <main className='page shop-page'>
        <Breadcrumb />
        <div className='shop-wrapper'>
          <ShopProdsFilter />
          <section className='shop-prods'>
            <ShopSearcherSorter />
            <ShopProdsViewer />
          </section>
        </div>
      </main>
    </Container>
  );
};

export default ShopPage;
