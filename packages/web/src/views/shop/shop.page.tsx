// pkgs:

// comps:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import ShopSearcherSorter from '../../components/distributed/shop-search-sort/shop-searcher-sorter.comp';

// component>>>
const ShopPage = () => {
  return (
    <Container xxl>
      <main className="page shop-page">
        {/* comp: todo move it*/}
        <section className="shop-doors-filter">
          <h6>filter</h6>
        </section>
        {/* comp: todo move it */}
        <section className="shop-doors-viewer">
          <ShopSearcherSorter />
        </section>
      </main>
    </Container>
  );
};

export default ShopPage;
