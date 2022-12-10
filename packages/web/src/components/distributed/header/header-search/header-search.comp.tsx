// pkgs:
import { VFC, useState, useRef } from 'react';

// utils:
import './style.sass';
import { GoSearch } from 'react-icons/go';
import t from '../../../../../public/assets/images/fullcart-temp-img.svg';

// comps:
import FormInput from '../../form-input/form-input.comp';
import { Link } from 'react-router-dom';
import Skeleton from '../../skelton/skeleton.comp';

// component>>>
const HeaderSearch: VFC<{}> = () => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  const [headerSearcherValue, setHeaderSearcherValue] = useState<string | null>(null);
  const t2 = `Portable bag for cats go out breathing backpack portable pet carrier for dogs and cats small pet travel bag, breathing-backpack-portable-pet-carrier-for-dogs-and-cats-small-pet-travel-bag`;
  const stage = `busy`;

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
      {headerSearcherValue && headerSearcherValue.length > 0 ? (
        <section className="hot-list">
          <small className="recent-results">Recent results</small>
          {stage !== `busy` ? (
            <Skeleton target="hot-list-recent-results" />
          ) : (
            <ul className="recent-results">
              <li>
                <Link to="">
                  <div className="res-thumb">
                    <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
                  </div>
                  <small className="res-title">
                    {t2.substring(0, 20)} {t2.length > 20 ? `...` : null}
                  </small>
                </Link>
              </li>
              <li>
                <Link to="">
                  <div className="res-thumb">
                    <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
                  </div>
                  <small className="res-title">
                    {t2.substring(0, 20)} {t2.length > 20 ? `...` : null}
                  </small>
                </Link>
              </li>
              <li>
                <Link to="">
                  <div className="res-thumb">
                    <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
                  </div>
                  <small className="res-title">
                    {t2.substring(0, 20)} {t2.length > 20 ? `...` : null}
                  </small>
                </Link>
              </li>
            </ul>
          )}
          <section className="results">
            {stage !== `busy` ? (
              <Skeleton target="hot-list-results" />
            ) : (
              <ul className="results">
                <li>
                  <Link to="">
                    <div className="res-thumb">
                      <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
                    </div>
                    <small className="res-title">{t2}</small>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="res-thumb">
                      <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
                    </div>
                    <small className="res-title">{t2}</small>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="res-thumb">
                      <div className="cover" style={{ background: `url(${t}) center/contain no-repeat` }}></div>
                    </div>
                    <small className="res-title">{t2}</small>
                  </Link>
                </li>
              </ul>
            )}
          </section>
        </section>
      ) : null}
    </section>
  );
};

export default HeaderSearch;
