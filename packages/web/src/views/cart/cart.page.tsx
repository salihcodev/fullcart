// pkgs:

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const Cart = () => {
  return (
    <main className='page contact-page'>
      <Container xxl>
        <Breadcrumb />
        <h2>Cart</h2>
      </Container>
    </main>
  );
};

export default Cart;
