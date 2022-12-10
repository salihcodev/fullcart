// pkgs:

// utils:
import { VFC } from 'react';
import './style.sass';

// comps:

// component>>>
const RowTitle: VFC<any> = ({ title, whiteBkg, subTitle, icon }) => {
  return (
    <section className="row-title">
      <header className="category-row-header">
        <h3 className="category-title">
          {icon ? <span className="icon" style={icon ? { background: `url(${icon}) center/cover` } : {}}></span> : null}
          <span className="title" style={whiteBkg ? { background: `#fff` } : {}}>
            {title}
          </span>
          {subTitle ? <span className="subtitle">{subTitle}</span> : null}
        </h3>
      </header>
    </section>
  );
};

export default RowTitle;
