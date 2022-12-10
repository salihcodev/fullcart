// pkgs:
import { BsType } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { FaCoins } from 'react-icons/fa';
import Flag from 'react-world-flags';

// utils:
import './style.sass';
import t from '../../../../public/assets/images/fullcart-temp-img.svg';
import Container from '../../utils/container/container.util';
import AppButton from '../../distributed/button/app-button.comp';
import companyHeroCover from '../../../../public/assets/images/company-profile/company-hero-cover.svg.svg';

// comps:

const setToRand = [
  `#2f4ca5`,
  `#53676cff`,
  `#c87137ff`,
  `#008000ff`,
  `#5d6c53ff`,
  `#660080ff`,
  `#442178ff`,
  `#668000ff`,
  `#5d6c53ff`,
  `#782167ff`,
  `#800033ff`,
  `#782144ff`,
  `#165044ff`,
  `#006680ff`,
  `#217844ff`,
  `#454837ff`,
  `#445500ff`,
];

const Ccode = `chn`;
// component>>>
const SupplerInfoHero: React.VFC<any> = () => {
  return (
    <section className="suppler-info-hero" style={{ background: setToRand[Math.floor(Math.random() * setToRand.length)] }}>
      <div className="color-bkg" style={{ background: `url(${companyHeroCover}) center/cover` }}>
        <Container xxl>
          <div className="info-wrapper">
            <section className="supp-logo">
              <div className="wrapper">
                <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
              </div>
            </section>
            <section className="supp-info">
              <div className="wrapper">
                <h2 className="name">Some freacky bikky name here</h2>
                <section className="tags">
                  <div className="origin">
                    <p>
                      <span className="origin-flag">
                        <Flag code={Ccode} height="12" />
                      </span>
                      <span className="origin-name">{Ccode}</span>
                    </p>
                  </div>
                  <div className="since">
                    <p>
                      <span className="icon">
                        <FaCoins />
                      </span>
                      <span className="text">
                        <span></span>2<span>YRS</span>
                      </span>
                    </p>
                  </div>
                  {true ? <div className="is-verified">Verified</div> : null}
                  <div className="is-trending">
                    <span className="icon">@</span>
                    <span className="text">trending Company</span>
                  </div>
                </section>
                <p className="types">
                  <span className="icon">
                    <BsType />
                  </span>
                  <span className="txt">Main Products: txt, txt, txt</span>
                </p>
              </div>
            </section>
            <section className="actions">
              <div className="wrapper">
                <AppButton
                  value="Contact Suppler"
                  type="button"
                  wide={false}
                  bkgSecondary
                  size="md"
                  border={{ size: 1 }}
                  noBorder
                  // handleEvent={() => }
                />
                <AppButton
                  value="Chat Now!"
                  type="button"
                  bkgDefault
                  wide={false}
                  size="md"
                  border={{ size: 1 }}
                  noBorder
                  // handleEvent={() => }
                />
                <AppButton
                  value="Follow"
                  type="button"
                  wide={false}
                  size="md"
                  border={{ size: 1 }}
                  noBorder
                  icon={<FiHeart />}
                  noBkg
                  // handleEvent={() => }
                />
              </div>
            </section>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SupplerInfoHero;
