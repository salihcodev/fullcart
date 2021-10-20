// pkgs:
import { useParams } from 'react-router-dom';

// comps:

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const SingleCategory = () => {
  // preConfigured hooks:
  const { category }: any = useParams();

  return (
    <main className="page single-category">
      <Container>
        <h2>Single category {category}</h2>
      </Container>
    </main>
  );
};

export default SingleCategory;
