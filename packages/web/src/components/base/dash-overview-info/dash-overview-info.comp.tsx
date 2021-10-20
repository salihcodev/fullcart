// pkgs:
import { AiOutlineHistory } from 'react-icons/ai';

// comps:
import DashMonthlyViews from '../dash-monthly-views/dash-monthly-views.comp';
import DashEntitiesRow from '../dash-entities-row/dash-entities-row.comp';
import EntitiesBasicStats from '../entities-basic-stats/entities-basic-stats.comp';
import SystemStatsInChart from '../system-stats-in-chart/system-stats-in-chart.comp';

// utils:
import './style.sass';

// component>>>
const DashOverviewInfo = () => {
  return (
    <section className="dash-overview-info">
      {/* last month analysis */}
      <DashMonthlyViews />

      {/* basic stats about entities*/}
      <EntitiesBasicStats />

      {/* system representation in chart */}
      <SystemStatsInChart />

      {/* shortage history in rows */}
      <main className="dash-history">
        <h4 className="heading-dash-history">History</h4>
        {/* users row */}
        <section className="dash-section recent-new-users">
          <h5 className="heading-history-row">Recent users activity</h5>
          <DashEntitiesRow heading="Registered" entities={[]} />
          <DashEntitiesRow heading="Logged" entities={[]} />
          <DashEntitiesRow heading="Promoted" entities={[]} />
        </section>

        {/* prods row */}
        <section className="dash-section recent-prods-activity">
          <h5 className="heading-history-row">Recent prods activity</h5>
          <DashEntitiesRow heading="Added" entities={[]} />
          <DashEntitiesRow heading="Updated" entities={[]} />
          <DashEntitiesRow heading="Deleted" entities={[]} />
        </section>
      </main>
    </section>
  );
};

export default DashOverviewInfo;
