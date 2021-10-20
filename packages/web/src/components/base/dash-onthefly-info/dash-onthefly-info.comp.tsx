// pkgs:

// comps:

// utils:
import './style.sass';
import DashOnTheFlyList from '../dash-onthefly-list/dash-onthefly-list.comp';

// component>>>
const DashOnTheFlyInfo = () => {
  return (
    <aside className="on-the-fly-info">
      <DashOnTheFlyList heading={'Recent added prods'} list={[]} />
      <DashOnTheFlyList heading={'Active users'} list={[]} />
    </aside>
  );
};

export default DashOnTheFlyInfo;
