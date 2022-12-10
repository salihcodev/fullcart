// pkgs:

// utils:
import { VFC } from 'react';
import './style.sass';

// comps:

// component>>>
const Case: VFC<any> = ({ title, icon, prods }) => {
  return (
    <div className="case">
      <h5 className="heading">
        <span className="icon" style={{ background: `url(${icon}) center/contain no-repeat` }}></span>
        <span className="txt">{title}</span>
      </h5>
      <div className="prods">
        {prods.map(({ cover, price, subTitle }: { cover: any; price: string; subTitle: string }) => (
          <div className="prod">
            <div className="cover" style={{ background: `url(${cover}) center/cover` }}></div>
            <h6 className="price">{price}</h6>
            <span className="subtitle">{subTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case;
