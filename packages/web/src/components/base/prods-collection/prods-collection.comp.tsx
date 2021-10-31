// pkgs:
import { Fragment, VFC } from 'react';
import { Link } from 'react-router-dom';
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

// utils:
import './style.sass';
import { IProdsCategoryCollection } from '../../../common/interfaces/prods-row.interface';
import { ProdTypes } from '../../../common/@types/prod.types';

// comps:
import ProductCard from '../prod-card/prod-card.comp';

// component>>>
const ProdsCategoryCollection: VFC<IProdsCategoryCollection> = ({ title, catLink, prods, loadState }) => {
  return (
    <Fragment>
      {loadState === `busy` ? (
        <section className="skeleton">
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="prods-category-collection">
          <h5 className="collection-title">
            <Link to={catLink}>{title}</Link>
          </h5>
          <section className="collection-prods">
            {prods?.map(
              (prod: ProdTypes): JSX.Element => (
                <ProductCard key={prod._id} prod={prod} />
              )
            )}
          </section>
        </section>
      )}
    </Fragment>
  );
};

export default ProdsCategoryCollection;
