// pkgs:
import Flag from 'react-world-flags';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';

// comps:

// component>>>
const SupplerMiniInfo: React.VFC<{}> = ({}) => {
  const { stage, userData } = useAppSelector((state: RootState) => state.UserActions);

  return (
    <section className="suppler-mini-info">
      <header>
        <h5 className="heading">
          <Link to={`/suppler/${userData?._id}`}>{userData?.companyName}</Link>
        </h5>
        <span className="specialization">{userData?.specialization}</span>
      </header>
      <p>
        <span className="company-location">
          <Flag code={userData?.countryCode} height="16" />
          <span className="country">{userData?.countryCode}</span>
        </span>
        <span className="company-since">
          <b>1</b>
          <sup>YR</sup>
        </span>
      </p>
      <footer>
        <div>
          <span className="title">Response time</span>
          <h4 className="value">≤3H</h4>
        </div>
        <div>
          <span className="title">On-time delivery rate</span>
          <h4 className="value">100%</h4>
        </div>
      </footer>
    </section>
  );
};

export default SupplerMiniInfo;
