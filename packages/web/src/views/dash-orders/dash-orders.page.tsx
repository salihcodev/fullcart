// pkgs:

// comps:

// utils:
import DashHeader from '../../components/distributed/dash-header/dash-header.comp';
import DashboardAside from '../../components/distributed/dashboard-aside/dashboard-aside.comp';
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const DashOrders = () => {
  return (
    <main className="page dashboard-page dash-orders">
      <DashboardAside />
      <section className="dashboard-wrapper">
        <DashHeader />
        <Container fluid>
          <div>orders</div>
        </Container>
      </section>
    </main>
  );
};

export default DashOrders;
