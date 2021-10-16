// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';
import { IEntitiesBasicStats } from '../../../common/interfaces/entities-basic-stats.interface';

// comps:

// component>>>
const EntitiesBasicStats: VFC<IEntitiesBasicStats> = () => {
  return (
    <header className="dash-section entities-basic-stats">
      <div className="users-entity">
        <h5 className="number">6078</h5>
        <span className="txt">Users</span>
      </div>

      <div className="doors-entity">
        <h5 className="number">1006</h5>
        <span className="txt">Products</span>
      </div>

      <div className="doors-entity">
        <h5 className="number">14</h5>
        <span className="txt">Admins</span>
      </div>

      <div className="doors-entity">
        <h5 className="number">65</h5>
        <span className="txt">Moderators</span>
      </div>
    </header>
  );
};

export default EntitiesBasicStats;
