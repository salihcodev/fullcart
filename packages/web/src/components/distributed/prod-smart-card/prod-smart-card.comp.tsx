// pkgs:

// utils:
import { IProdSmartCard } from '../../../common/interfaces/prod-smart-card.interface';
import './style.sass';

import t from '../../../../public/assets/images/t.png';

// comps:

const ProdSmartCard: React.VFC<IProdSmartCard> = ({ prodName, prodCover, height }) => {
  return (
    <div className="prod-smart-card" style={{ height: height || `10rem` }}>
      <section className="prod-cover">
        <img src={t} alt="product cover" />
      </section>
      <section className="prod-info">
        <div>
          <p className="name">{prodName?.substring(0, 70) + `...`}</p>
        </div>
      </section>
    </div>
  );
};

export default ProdSmartCard;
