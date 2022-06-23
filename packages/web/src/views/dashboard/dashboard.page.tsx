// pkgs:

// comps:
import DashOnTheFlyInfo from '../../components/base/dash-onthefly-info/dash-onthefly-info.comp';
import DashOverviewInfo from '../../components/base/dash-overview-info/dash-overview-info.comp';
import DashHeader from '../../components/distributed/dash-header/dash-header.comp';
import DashboardAside from '../../components/distributed/dashboard-aside/dashboard-aside.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const Dashboard = () => {
  return (
    <main className="page dashboard-page">
      <DashboardAside />
      <section className="dashboard-wrapper">
        <DashHeader />
        <Container fluid>
          <section className="dash-body">
            <DashOverviewInfo />
            <DashOnTheFlyInfo />
          </section>
        </Container>
      </section>
    </main>
  );
};

export default Dashboard;
