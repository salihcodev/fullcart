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
const ClassifiedCategory = () => {
  const { classification }: any = useParams();

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
      <main className="page classed-category">
        <Breadcrumb />
        <ProdsCategoryCollection stage={stage} prods={prods} collectionName={classification} />
        {/* baseOptions -> passing any custom attributes with limit&pageCount */}
        <Pagination setqueryStr={setqueryStr} baseOptions={`classification=${classification}`} />
      </main>
    </Container>
  );
};

export default ClassifiedCategory;
