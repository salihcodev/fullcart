// pkgs:
import Flag from 'react-world-flags';

// utils:
import './style.sass';
import { IProdHighlights } from '../../../common/interfaces/prod-highlights.interface';

// comps:

const ProdHighlights: React.VFC<IProdHighlights> = ({ prod }) => {
  return (
    <section className="product-highlights">
      <div>
        <div>
          <h6>Count</h6>
          <h6>{prod?.count}</h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Colors</h6>
          <div className="clrs">
            {prod?.availableColors?.map((clr) => (
              <span style={{ background: clr }}></span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h6>Warranty</h6>
          <h6>{prod?.warranty}</h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Warranty In</h6>
          <h6>
            {prod?.warrantyIn === `Y`
              ? `Years`
              : prod?.warrantyIn === `M`
              ? `Months`
              : prod?.warrantyIn === `W`
              ? `Weeks`
              : `Days`}
          </h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Price</h6>
          <h6>${prod?.priceInDollar}</h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Origin</h6>
          <h6>
            <Flag code={prod?.suppler?.countryCode} height="20" />
          </h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Category</h6>
          <h6>{prod?.category}</h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Subcategory</h6>
          <h6>{prod?.subCategory}</h6>
        </div>
      </div>
    </section>
  );
};

export default ProdHighlights;
