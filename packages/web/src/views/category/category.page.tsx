// pkgs:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import ProdsCategoryCollection from '../../components/base/prods-collection/prods-collection.comp';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { GetCollectionOfProds } from '../../redux/slices/prods-collection/logic/reading.logic';
import { RootState } from '../../redux/store';
import Pagination from '../../components/distributed/pagination/pagination.comp';

// component>>>
const Category = () => {
  const { category }: any = useParams();

  // preConfigured hooks:
  const dispatch = useAppDispatch();

  const { stage, prods } = useAppSelector((state: RootState) => state.ProdsCollection);
  const [queryStr, setqueryStr] = useState<string>(``);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(GetCollectionOfProds(queryStr));
    }

    return () => {
      isMounted = false;
    };
  }, [queryStr, dispatch]);

  return (
    <Container xxl>
      <main className="page single-category">
        <Breadcrumb />
        <ProdsCategoryCollection stage={stage} prods={prods} collectionName={category} />
        <Pagination setqueryStr={setqueryStr} baseOptions={`categoryName=${category}`} />
      </main>
    </Container>
  );
};

export default Category;
