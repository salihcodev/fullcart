// pkgs:

// utils:
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import RowTitle from '../row-title/row-title.comp';
import './style.sass';

// comps:

// component>>>
const CategoryRow: VFC<any> = ({ title, linkToSource, rowImg, imgClr, forMarket }) => {
  return (
    <section className="category-row">
      <RowTitle whiteBkg={false} title={title} />
      {forMarket ? (
        <div className="for-market">
          <section className="market-category-wrapper">
            <div className="color-bkg" style={{ background: imgClr }}>
              <section className="img style-header" style={{ background: `url(${rowImg}) center/contain no-repeat` }}>
                <Link to={linkToSource}>Source Now</Link>
              </section>
            </div>
            <section className="category-prods">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </section>
          </section>
        </div>
      ) : (
        <div>
          <section className="category-wrapper">
            <div className="color-bkg" style={{ background: imgClr }}>
              <section className="img style-header" style={{ background: `url(${rowImg}) center/contain no-repeat` }}>
                <Link to={linkToSource}>Source Now</Link>
              </section>
            </div>
            <section className="heghlights">
              <div className="OEM">OEM</div>
              <div className="DDP">DDP</div>
            </section>
            <section className="tops">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </section>
          </section>
          <section className="tops-in-xsm">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </section>
        </div>
      )}
    </section>
  );
};

export default CategoryRow;
