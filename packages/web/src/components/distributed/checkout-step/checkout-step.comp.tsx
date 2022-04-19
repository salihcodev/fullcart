// pkgs:

// utils:
import './style.sass';

// comps:

const CheckoutStep: React.VFC<{ label: string; stageNum: string; children: any }> = ({ label, stageNum, children }) => {
  return (
    <article className="checkout-step">
      <header className="step-head">
        <small>{stageNum}</small>
        <h2>{label}</h2>
      </header>

      <div className="step-wrapper">{children}</div>
    </article>
  );
};

export default CheckoutStep;
