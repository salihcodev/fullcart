// pkgs:
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

// utils:
import './style.sass';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IHero } from '../../../common/interfaces/hero.interface';
import { dashed } from '../../../common/utilities/dashing-dealer.util';
import marketList from '../../../common/constants/my-market-routes';
import fullcartTemp from '../../../../public/assets/images/fullcart-temp-img.svg';
import slider1 from '../../../../public/assets/images/hero/1.svg';

// comps:

// components>>>
const items = [
  <div className="item" data-value="1" style={{ background: `url(${slider1}) center/cover` }}></div>,
  <div className="item" data-value="1" style={{ background: `url(${slider1}) center/cover` }}></div>,
  <div className="item" data-value="1" style={{ background: `url(${slider1}) center/cover` }}></div>,
  <div className="item" data-value="1" style={{ background: `url(${slider1}) center/cover` }}></div>,
];
const Hero: React.VFC<IHero> = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <section className="my-market">
          <h5>
            <span className="icon"></span>
            <span className="text">My Market</span>
          </h5>
          <ul className="market-list">
            {marketList.map(({ icon, title }) => (
              <li>
                <Link to={`/${dashed(title).toLowerCase()}`}>
                  <div className="icon" style={{ background: `url(${icon}) center/contain no-repeat` }}></div>
                  <span className="title">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="slider">
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={1000}
            animationType="slide"
            infinite
            disableDotsControls
            disableButtonsControls
            items={items}
            mouseTracking
          />
        </section>
        <section className="trending">
          <section className="pro-buyer">
            <div>
              <h5 className="head">
                <span className="icon"></span>
                <span className="txt">Pro Buyer Execlusive</span>
              </h5>
            </div>
            <div>
              <p className="benifits">Get payment terms and mnuch more</p>
            </div>
            <div>
              <Link to="/" className="upgrade">
                Upgrade
              </Link>
            </div>
          </section>
          <section className="top-ranking">
            <h3 className="heading">Top-Ranking Products</h3>
            <section className="prods">
              <Link to="/" className="prod">
                <h3>popular picks</h3>
                <div className="img" style={{ background: `url(${fullcartTemp}) center/contain no-repeat` }}></div>
              </Link>
              <Link to="/" className="prod">
                <h3>Ready To Ship</h3>
                <div className="img" style={{ background: `url(${fullcartTemp}) center/contain no-repeat` }}></div>
              </Link>
              <Link to="/" className="prod">
                <h3>Browse New Arrivals </h3>
                <div className="img" style={{ background: `url(${fullcartTemp}) center/contain no-repeat` }}></div>
              </Link>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Hero;
