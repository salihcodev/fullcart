// pkgs:
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowsFullscreen } from 'react-icons/bs';

// utils:
import './style.sass';
import { IMonthlyViewCard } from '../../../common/interfaces/monthly-view-card.interface';

// comps:

// component>>>
const MonthlyViewCard: VFC<IMonthlyViewCard> = ({ title, viewNumber }) => {
  return (
    <div className="monthly-view-card">
      <div className="to-center-contents">
        <h5 className="view-card-heading">{title}</h5>
        <small>In this month</small>
        <h2 className="h1 view-card-number">{viewNumber}</h2>
        <Link to="dashboard/monthly-views" className="view-to-full-page">
          <small className="txt">Full page</small>
          <span className="icon">
            <BsArrowsFullscreen />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MonthlyViewCard;
