// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import MarketSearcherSorter from '../../components/distributed/market-search-sort/market-searcher-sorter.comp';
import MarketProdsViewer from '../../components/base/market-prods-viewer/market-prods-viewer.comp';
import MarketProdsFilter from '../../components/base/market-prods-filter/market-prods-filter.comp';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';

// component>>>
const MarketPage = () => {
  return (
    <Container xxl>
      <main className="page market-page">
        <Breadcrumb />
        <div className="market-wrapper">
          <MarketProdsFilter />
          <section className="market-prods">
            <MarketSearcherSorter />
            <MarketProdsViewer />
          </section>
        </div>
      </main>
    </Container>
  );
};

export default MarketPage;
