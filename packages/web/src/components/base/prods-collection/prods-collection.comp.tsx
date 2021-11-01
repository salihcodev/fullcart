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
const ProdsCategoryCollection: VFC<IProdsCategoryCollection> = ({
  title,
  catLink,
  prods,
  loadState,
}) => {
  return (
    <Fragment>
      {loadState === `busy` ? (
        <section className="skeleton">
          <h2>Loading...</h2>
        </section>
      ) : (
        <section className="prods-category-collection">
          <header className="prods-collection-header">
            {catLink ? (
              <h4 className="collection-title">
                <Link to={catLink}>{title}</Link>
              </h4>
            ) : null}
          </header>
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
