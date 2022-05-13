// pkgs:
import { VFC } from 'react';

// comps:

// utils:
import './style.sass';
import { IDashOnTheFlyInfo } from '../../../common/interfaces/dash-entities-row.interface copy';

// component>>>
const DashOnTheFlyList: VFC<IDashOnTheFlyInfo> = ({ heading, list }) => {
  return (
    <section className="on-the-fly-list">
      <h6 className="heading">{heading}</h6>
      ---list here---
    </section>
  );
};

export default DashOnTheFlyList;
