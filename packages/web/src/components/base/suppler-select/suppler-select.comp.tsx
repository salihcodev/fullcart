// pkgs:

// utils:
import { VFC } from 'react';
import RowTitle from '../row-title/row-title.comp';
import './style.sass';

// comps:

// component>>>
const SupplerSelect: VFC<any> = () => {
  return (
    <section className="suppler-select">
      <RowTitle whiteBkg={false} title="choose you supplers by regions" />
      <p style={{ textAlign: `center` }}>this gonna be maintained later on... along with the development progress.</p>
    </section>
  );
};

export default SupplerSelect;
