// pkgs:

// utils:
import './style.sass';
import { ICheckoutCalculations } from '../../../common/interfaces/checkout-calculations.interface';
import toFixedNumber from '../../../common/utilities/to-fixed-number.util';

// comps:

const CheckoutCalculations: React.VFC<ICheckoutCalculations> = ({ calcs }) => {
  return (
    <section className="checkout-calculations">
      <div>
        <h6>Delivery</h6>
        <h3>
          <span>$</span> <span>{toFixedNumber(calcs?.delivery)}</span>
        </h3>
      </div>
      <div>
        <h6>Subtotal</h6>
        <h3>
          <span>$</span> <span>{toFixedNumber(calcs?.subTotal)}</span>
        </h3>
      </div>
      <div>
        <h6>Total</h6>
        <h3>
          <span>$</span> <span>{toFixedNumber(calcs?.total)}</span>
        </h3>
      </div>
    </section>
  );
};

export default CheckoutCalculations;
