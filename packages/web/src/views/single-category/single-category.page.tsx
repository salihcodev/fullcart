// pkgs:
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { getFurnitureProds } from '../../redux/slices/prods-collections/logic/reading.logic';

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ProdsCategoryCollection from '../../components/base/prods-collection/prods-collection.comp';

// component>>>
const SingleCategory = () => {
  // preConfigured hooks:
  const { category }: any = useParams();
  const { pathname }: any = useLocation();
  const [subProdsKeys, setSubProdsKeys] = useState<string[] | null>(null);
  const dispatch = useAppDispatch();
  const { stage, subProds } = useAppSelector(
    (state: RootState) => state.FurnitureProds
  );

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      switch (category) {
        case `furniture`:
          dispatch(getFurnitureProds(`?category=${category}&limit=10`));
          break;

        default:
          break;
      }
    }

    return () => {
      isMounted = false;
    };
  }, [category, dispatch]);

  useEffect(() => {
    if (subProds) {
      setSubProdsKeys(Object.keys(subProds));
    }
  }, [subProds]);

  return (
    <Container xxl>
      <main className="page single-category">
        <Breadcrumb />
        <h2 className="single-category-heading">Single category {category}</h2>
        {subProdsKeys?.map((key) => {
          return (
            <ProdsCategoryCollection
              title={key}
              prods={subProds[key]}
              loadState={stage}
              catLink={`${pathname}/sub-category/${key}`}
              showPagination
            />
          );
        })}
      </main>
    </Container>
  );
};

export default SingleCategory;
