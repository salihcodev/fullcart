// pkgs:

// utils:
import { IProdSmartCard } from '../../../common/interfaces/prod-smart-card.interface';
import './style.sass';

// comps:

const ProdSmartCard: React.VFC<IProdSmartCard> = ({ prod, height }) => {
  return (
    <section className="prod-smart-card" style={{ height: height || `10rem` }}>
      <div className="prod-cover">
        <img src={prod?.cover} alt="product cover" />
      </div>
      <div className="prod-info">
        <div>
          <p className="name">{prod?.name}</p>
        </div>
      </div>
    </section>
  );
};

export default ProdSmartCard;
