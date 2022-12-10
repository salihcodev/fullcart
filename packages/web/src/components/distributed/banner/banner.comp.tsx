// pkgs:

// utils:
import { Fragment } from 'react';
import { IBanner } from '../../../common/interfaces/banner.interface';
import './style.sass';

// comps:

// component>>>
const Banner: React.VFC<IBanner> = ({ view, declaration, description, feats, logo, specialLink, specialLinkTxt, bkg }) => {
  return (
    <Fragment>
      {view === 'features' ? (
        <section className="feats-banner">
          <div className="logo-wrapper">
            <div className="logo" style={{ background: `url(${logo}) center/contain no-repeat` }}></div>
          </div>
          <div>
            <ul className="feats">
              {feats?.map(({ heading, description }) => (
                <li>
                  <div>
                    <h4>{heading}</h4>
                    <p className="description">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="link">
            <a href={specialLink} target="_blank" rel="noopener noreferrer">
              {specialLinkTxt}
            </a>
          </div>
        </section>
      ) : view === 'declaration' ? (
        <section className="declaration-banner" style={{ background: `url(${bkg}) center/cover` }}>
          <div className="logo-wrapper">
            <div className="logo" style={{ background: `url(${logo}) center/contain no-repeat` }}></div>
          </div>
          <div className="middle-txt">
            <h2>{declaration}</h2>
          </div>
          <div className="link">
            <a href={specialLink} target="_blank" rel="noopener noreferrer">
              {specialLinkTxt}
            </a>
          </div>
        </section>
      ) : (
        <section className="simple-banner">simple</section>
      )}
    </Fragment>
  );
};

export default Banner;
