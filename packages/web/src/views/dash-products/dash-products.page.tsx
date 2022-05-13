// pkgs:

// comps:

// utils:
import DashHeader from '../../components/distributed/dash-header/dash-header.comp';
import DashboardAside from '../../components/distributed/dashboard-aside/dashboard-aside.comp';
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const DashProducts = () => {
  return (
    <main className="page dashboard-page dash-products">
      <DashboardAside />
      <section className="dashboard-wrapper">
        <DashHeader />
        <Container fluid>
          <div className="dash-body">products</div>
        </Container>
      </section>
    </main>
  );
};

export default DashProducts;
