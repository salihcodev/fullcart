// pkgs:
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import SubCategoryCollection from '../../components/base/sub-category-collection/sub-category-collection.comp';

// component>>>
const SubCategory = () => {
  // preConfigured hooks:
  const { subCategory }: any = useParams();

  return (
    <Container xxl>
      <main className="page sub-category">
        <Breadcrumb />
        <SubCategoryCollection subCategory={subCategory} />
      </main>
    </Container>
  );
};

export default SubCategory;
