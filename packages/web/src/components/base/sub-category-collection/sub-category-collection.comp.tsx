// pkgs:
import { Fragment, useEffect, VFC } from 'react';
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

// utils:
import './style.sass';
import { ProdTypes } from '../../../common/@types/prod.types';
import { RootState } from '../../../redux/store';
import unDashed from '../../../common/utilities/undashed.util';

// comps:
import ProductCard from '../prod-card/prod-card.comp';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { LoadSubCategory } from '../../../redux/slices/prods-collection/logic/reading.logic';

// component>>>
const SubCategoryCollection: VFC<any> = ({ subCategory }) => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const { stage, prods } = useAppSelector((state: RootState) => state.SubCategory);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(LoadSubCategory(`?subCategory=${subCategory}&limit=10`));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, subCategory]);

  return (
    <Fragment>
      {stage === `busy` ? (
        <section className='skeleton'>
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className='sub-category-loader'>
          <section className='sub-category-header'>
            <h3 className='category-title'>
              <div>{unDashed(subCategory)}</div>
              <div>
                <span></span>
              </div>
            </h3>
          </section>
          <section className='category-prods'>
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

export default SubCategoryCollection;
