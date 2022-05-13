// pkgs:

// utils:
import './style.sass';
import ProdToOrder from './prod-to-order/prod-to-order.comp';
import SupplerMiniInfo from './suppler-mini-info/suppler-mini-info.comp';

// comps:

// component>>>
const ProdDecision: React.VFC<{}> = () => {
  return (
    <article className="product-decision">
      <ProdToOrder />
      <SupplerMiniInfo />
    </article>
  );
};

export default ProdDecision;
