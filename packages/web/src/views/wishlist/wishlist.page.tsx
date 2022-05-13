// pkgs:

// comps:

// utils:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const Wishlist = () => {
  return (
    <main className='page contact-page'>
      <Container xxl>
        <Breadcrumb />
        <h2>Wishlist</h2>
      </Container>
    </main>
  );
};

export default Wishlist;
