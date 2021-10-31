// pkgs:
import { VFC, useState, useRef } from 'react';

// utils:
import './style.sass';
import { GoSearch } from 'react-icons/go';

// comps:
import FormInput from '../../form-input/form-input.comp';

// component>>>
const HeaderSearch: VFC<{}> = () => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  const [headerSearcherValue, setHeaderSearcherValue] = useState<string | null>(null);

  return (
    <section className="header-search">
      <FormInput
        type="text"
        autoComplete="off"
        inputName="headerSearcherInput"
        placeholder="Searching in products by title / description / book's ISBN..."
        icon={GoSearch}
        collectInputData={(_, value: string) => setHeaderSearcherValue(value)}
      />

      {headerSearcherValue && headerSearcherValue.length > 0 ? <section className="hot-list">hot list</section> : null}
    </section>
  );
};

export default HeaderSearch;
