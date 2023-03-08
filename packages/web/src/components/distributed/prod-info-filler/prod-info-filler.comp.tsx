// pkgs:

// utils:
import { useState } from 'react';
import './style.sass';

// comps:

const ProdInfoFiller: React.VFC<any> = ({ title }) => {
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);

  return (
    <section className="filler-section">
      <button onClick={() => setIsSectionOpen((state) => !state)}>{title}</button>
      {isSectionOpen ? <div className="basic-info-section">basic-info-section</div> : null}
    </section>
  );
};

export default ProdInfoFiller;
