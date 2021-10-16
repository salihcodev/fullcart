// pkgs:

// utils:
import { IBanner } from '../../../common/interfaces/banner.interface';
import './style.sass';

// comps:

// component>>>
const Banner: React.VFC<IBanner> = ({ heading, description }) => {
  return (
    <section className="banner">
      <h2 className="banner-heading">{heading}</h2>
      {description ? <p className="banner-desc">{description}</p> : null}
    </section>
  );
};

export default Banner;
