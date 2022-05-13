// pkgs:

// comps:

// utils:
import DashHeader from '../../components/distributed/dash-header/dash-header.comp';
import DashboardAside from '../../components/distributed/dashboard-aside/dashboard-aside.comp';
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const DashUsers = () => {
  return (
    <main className="page dashboard-page dash-users">
      <DashboardAside />
      <section className="dashboard-wrapper">
        <DashHeader />
        <Container fluid>
          <div>users</div>
        </Container>
      </section>
    </main>
  );
};

export default DashUsers;
