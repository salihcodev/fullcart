// pkgs:

// utils:
import { VFC } from 'react';
import './style.sass';

// comps:

// component>>>
const Feature: VFC<any> = ({ title, description, sign, examples }) => {
  return (
    <div className="feature">
      <header className="head" style={{ background: `url(${sign}) right/contain no-repeat` }}>
        <div className="txt">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="img-space-saver"></div>
      </header>
      <div className="examples">
        <div className="ex-imgs-wrapper">
          <section className="ex-wing">
            <h4 className="heading">{examples.subTitle}</h4>
            <div className="ex-imgs">
              {examples.imgs.map((img: any) => (
                <div style={{ background: `url(${img}) center/cover` }}></div>
              ))}
            </div>
          </section>
          <section className="ex-wing">
            <h4 className="heading">{examples.subTitle2}</h4>
            <div className="ex-imgs">
              {examples.imgs2.map((img: any) => (
                <div style={{ background: `url(${img}) center/cover` }}></div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Feature;
