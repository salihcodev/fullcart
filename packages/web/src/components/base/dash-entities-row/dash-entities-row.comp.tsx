// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';
import { IDashEntitiesRow } from '../../../common/interfaces/dash-entities-row.interface';

// comps:

// component>>>
const DashEntitiesRow: VFC<IDashEntitiesRow> = ({ heading, entities }) => {
  return (
    <section className="dash-entities-row">
      <h6 className="row-heading">{heading}</h6>
      <p>---entities here---</p>
    </section>
  );
};

export default DashEntitiesRow;
