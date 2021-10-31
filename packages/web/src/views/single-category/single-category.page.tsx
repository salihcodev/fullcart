// pkgs:
import { useParams } from 'react-router-dom';

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const SingleCategory = () => {
  // preConfigured hooks:
  const { category }: any = useParams();

  return (
    <Container xxxl>
      <main className="page single-category">
        <Breadcrumb />
        <h2>Single category {category}</h2>
      </main>
    </Container>
  );
};

export default SingleCategory;
