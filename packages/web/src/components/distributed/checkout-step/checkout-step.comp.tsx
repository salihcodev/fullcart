// pkgs:

// utils:
import toFixedNumber from '../../../common/utilities/to-fixed-number.util';
import './style.sass';

// comps:

const CheckoutStep: React.VFC<{ label: string; stageNum: number; children: any }> = ({ label, stageNum, children }) => {
  return (
    <article className='checkout-step'>
      <header className='step-head'>
        <section>
          <div>
            <small>{`stage ${stageNum} of 3`}</small>
          </div>
          <div>
            <span className='percentage'></span>
          </div>
          <div>
            <small>{toFixedNumber((stageNum * 100) / 3, 0)}%</small>
          </div>
        </section>
        <h2>{label}</h2>
      </header>

      <div className='step-wrapper'>{children}</div>
    </article>
  );
};

export default CheckoutStep;
