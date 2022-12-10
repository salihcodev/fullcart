// pkgs:

// comps:
import DashHeader from '../../components/distributed/dash-header/dash-header.comp';
import DashboardAside from '../../components/distributed/dashboard-aside/dashboard-aside.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const DashMonthlyViews = () => {
  return (
    <main className="page dashboard-page dash-monthly-views">
      <DashboardAside />
      <section className="dashboard-wrapper">
        <DashHeader />
        <Container fluid>
          <span>dash-monthly-views</span>
        </Container>
      </section>
    </main>
  );
};

export default DashMonthlyViews;
