// pkgs:

// utils:
import './style.sass';
import { ICheckoutCalculations } from '../../../common/interfaces/checkout-calculations.interface';

// comps:

const CheckoutCalculations: React.VFC<ICheckoutCalculations> = ({ calcs }) => {
  return (
    <section className="checkout-calculations">
      <div>
        <h6>Delivery</h6>
        <h2>
          <span>$</span> <span>{calcs?.delivery}</span>
        </h2>
      </div>
      <div>
        <h6>Subtotal</h6>
        <h2>
          <span>$</span> <span>{calcs?.subTotal}</span>
        </h2>
      </div>
      <div>
        <h6>Total</h6>
        <h2>
          <span>$</span> <span>{calcs?.total}</span>
        </h2>
      </div>
    </section>
  );
};

export default CheckoutCalculations;
