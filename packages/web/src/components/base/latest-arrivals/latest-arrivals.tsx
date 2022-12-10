// pkgs:
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import Arrival from './arrival/arrival.comp';

// utils:
import './style.sass';
import fullcartTemp from '../../../../public/assets/images/fullcart-temp-img.svg';

// comps:

// component>>>
const LatestArrivals: VFC<any> = () => {
  return (
    <section className="latest-arrivals">
      <section className="txt">
        <div>
          <h2 className="heading">Latest arrivals and trends releases</h2>
          <p>
            <span>New possibilities.</span>
            <span>Better access.</span>
          </p>
          <Link to="/">View More</Link>
        </div>
      </section>
      <section className="arrivals">
        <Arrival title="Shipping discount" miniDesc="Up to US $20 off shipping" imgs={[fullcartTemp, fullcartTemp]} />
        <Arrival title={`${new Date().getFullYear()} Trends Release`} miniDesc="Stay ahead of the curve" imgs={[fullcartTemp, fullcartTemp]} />
        <Arrival title="Verified manufactures" miniDesc="US $1m+ exports or over 100 employees" imgs={[fullcartTemp, fullcartTemp]} />
      </section>
    </section>
  );
};

export default LatestArrivals;
