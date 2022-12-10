// pkgs:

// utils:
import { VFC } from 'react';
import './style.sass';

// comps:

// component>>>
const Arrival: VFC<any> = ({ title, miniDesc, imgs }) => {
  return (
    <section className="arrival">
      <h5 className="heading">{title}</h5>
      <p className="mini-description">{miniDesc}</p>
      <section className="imgs">
        <div className="img" style={{ background: `url(${imgs[0]}) center/contain no-repeat` }}></div>
        <div className="img" style={{ background: `url(${imgs[1]}) center/contain no-repeat` }}></div>
      </section>
    </section>
  );
};

export default Arrival;
