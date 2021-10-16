// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';
import { IDashMonthlyViews } from '../../../common/interfaces/dash-monthly-views.interface';

// comps:
import MonthlyViewCard from '../monthly-view-card/monthly-view-card.comp';

// component>>>
const DashMonthlyViews: VFC<IDashMonthlyViews> = () => {
  return (
    <section className="dash-section dash-monthly-views">
      <MonthlyViewCard title={'doors views'} viewNumber={178} />
      <MonthlyViewCard title={'Users Activities'} viewNumber={53} />
      <MonthlyViewCard title={'Purchasing'} viewNumber={102} />
    </section>
  );
};

export default DashMonthlyViews;
