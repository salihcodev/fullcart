// pkgs:

// utils:
import { VFC } from 'react';
import RowTitle from '../row-title/row-title.comp';
import './style.sass';

// comps:

// component>>>
const JusForYou: VFC<any> = () => {
  return (
    <section className="just-for-you">
      <RowTitle whiteBkg={false} title="just for you" />
      <p style={{ textAlign: `center` }}>this gonna be maintained later on... along with the development progress.</p>
    </section>
  );
};

export default JusForYou;
