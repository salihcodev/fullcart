// pkgs:

// utils:
import { IProdSmartCard } from '../../../common/interfaces/prod-smart-card.interface';
import './style.sass';

import t from '../../../../public/assets/images/t.png';

// comps:

const ProdSmartCard: React.VFC<IProdSmartCard> = ({ prod, forCart, description, height }) => {
  return (
    <div className='prod-smart-card' style={{ height: height || `10rem` }}>
      <div className='prod-cover'>
        <img src={t} alt='product cover' />
      </div>
      <div className='prod-info'>
        <div>
          <p className='name'>{prod?.name?.substring(0, 70) + `...`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProdSmartCard;
