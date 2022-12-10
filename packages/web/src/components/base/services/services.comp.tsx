// pkgs:

// utils:
import { VFC } from 'react';
import RowTitle from '../row-title/row-title.comp';
import './style.sass';
import services from '../../../common/constants/services.constant';

// comps:

// component>>>
const Services: VFC<any> = () => {
  return (
    <section className="services">
      <RowTitle whiteBkg={false} title="our trade services are here for you" />
      <div className="services-wrapper">
        {services.map(({ cover, title, subTitle, description, icon }) => (
          <div className="service-card">
            <div className="cover" style={{ background: `url(${cover}) center/cover` }}>
              <p>{description}</p>
            </div>
            <footer className="card-footer">
              <div>
                <div>
                  <h4>{title}</h4>
                  <span className="sub-title">{subTitle}</span>
                </div>
                <div>
                  <span className="icon" style={{ background: `url(${icon}) center/contain no-repeat` }}></span>
                </div>
              </div>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
