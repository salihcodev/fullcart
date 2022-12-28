// pkgs:
import { Fragment, useEffect, VFC } from 'react';

// utils:
import './style.sass';
import { IProdsCategoryCollection } from '../../../common/interfaces/prods-row.interface';
import { ProdTypes } from '../../../common/@types/prod.types';
import { unDashed } from '../../../common/utilities/dashing-dealer.util';

// comps:
import ProductCard from '../../distributed/prod-card/prod-card.comp';
import Skeleton from '../../distributed/skelton/skeleton.comp';
import NoItems from '../../distributed/no-items/no-items.comp';
import RowTitle from '../row-title/row-title.comp';

// component>>>
const ProdsCategoryCollection: VFC<IProdsCategoryCollection> = ({ stage, prods, collectionName }) => {
  return (
    <Fragment>
      {stage === `busy` ? (
        <Skeleton target="prods-collection" />
      ) : (
        <div>
          {prods.length === 0 ? (
            <NoItems pagination />
          ) : (
            <section className="prods-category-collection">
              <RowTitle whiteBkg title={unDashed(collectionName)} />
              <section className="collection-prods">
                {prods?.map(
                  (prod: ProdTypes): JSX.Element => (
                    <ProductCard key={prod._id} prod={prod} />
                  )
                )}
              </section>
            </section>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ProdsCategoryCollection;
