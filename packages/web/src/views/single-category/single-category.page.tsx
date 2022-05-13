// pkgs:
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { GetCollectionOfProds } from '../../redux/slices/prods-collection/logic/reading.logic';

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ProdsCategoryCollection from '../../components/base/prods-collection/prods-collection.comp';

// component>>>
const SingleCategory = () => {
  // preConfigured hooks:
  const dispatch = useAppDispatch();
  const { category }: any = useParams();
  const { pathname }: any = useLocation();

  const [subProdsKeys, setSubProdsKeys] = useState<string[] | null>(null);
  const { stage, subProds } = useAppSelector((state: RootState) => state.ProdsCollection);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(GetCollectionOfProds(`?category=${category}&limit=10`));
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
      <main className='page single-category'>
        <Breadcrumb />
        {subProdsKeys?.map((key) => {
          return (
            <ProdsCategoryCollection title={key} prods={subProds[key]} loadState={stage} catLink={`${pathname}/${key}`} showPagination />
          );
        })}
      </main>
    </Container>
  );
};

export default SingleCategory;
