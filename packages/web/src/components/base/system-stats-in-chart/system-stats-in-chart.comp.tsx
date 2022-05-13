// pkgs:
import { VFC } from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';

// utils:
import './style.sass';
import { ISystemStatsInChart } from '../../../common/interfaces/system-stats-in-chart.interface';

// comps:

// component>>>
const SystemStatsInChart: VFC<ISystemStatsInChart> = () => {
  return (
    <section className="dash-section system-stats-in-chart">
      <h5 className="chart-heading">
        <span className="icon">
          <IoStatsChartOutline />
        </span>
        Statistics for ({new Date().getFullYear()})
      </h5>
    </section>
  );
};

export default SystemStatsInChart;
