// pkgs:

// comps:
import DashHeader from '../../components/distributed/dash-header/dash-header.comp';
import DashboardAside from '../../components/distributed/dashboard-aside/dashboard-aside.comp';
import ProdInfoFiller from '../../components/distributed/prod-info-filler/prod-info-filler.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const DashManageProducts = () => {
  return (
    <main className="page dashboard-page dash-manage-products">
      <DashboardAside />
      <section className="dashboard-wrapper">
        <DashHeader />
        <Container fluid>
          <section className="adding-sections-containers">
            <h4>Add New Product</h4>
            <div className="containers-wrapper">
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
              <ProdInfoFiller title={`basic info section`} />
            </div>
          </section>
        </Container>
      </section>
    </main>
  );
};

export default DashManageProducts;
