// pkgs:
import { VFC, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// utils:
import './style.sass';
import Container from '../../../utils/container/container.util';
import CategoriesList from './categories-list/categories-list.comp';
import { MdDocumentScanner } from 'react-icons/md';
import headerRouts from '../../../../common/constants/header-routes.constant';

// comps:

// component>>>
const AfterHeader: VFC<{}> = () => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  useEffect(() => {
    window.onscroll = () => {
      const preHeaderHeight = document.querySelector<HTMLElement>(`.pre-header`)?.offsetHeight;
      const afterHeader = document.querySelector<HTMLElement>(`.after-header`)?.classList;
      const mainHeaderHeight = document.querySelector<HTMLElement>(`.default-header-wrapper`)?.offsetHeight;

      if (mainHeaderHeight && preHeaderHeight && window.scrollY >= mainHeaderHeight + preHeaderHeight) {
        //   afterHeader?.add(`fixed-header`);
        // } else {
        //   afterHeader?.remove(`fixed-header`);
      }
    };
  }, []);

  const navRouteActiveStyle = {
    color: '#4a67be ',
  };

  const [showCatsList, setShowCatsList] = useState<boolean>(false);

  useEffect(() => {
    window.onkeydown = function (e: { key: string }) {
      if (e.key === 'Escape') {
        setShowCatsList(false);
      }
    };
    return () => {
      setShowCatsList(false);
    };
  }, []);

  return (
    <header className="after-header">
      <Container xxl>
        <div className="after-header-wrapper">
          <section className="left-wing">
            <button onClick={() => setShowCatsList(!showCatsList)} className="categories-selector">
              <span className="txt">all categories</span>
              {showCatsList ? (
                <span className="icon icon-up">
                  <IoIosArrowUp />
                </span>
              ) : null}
              {!showCatsList ? (
                <span className="icon icon-down">
                  <IoIosArrowDown />
                </span>
              ) : null}
            </button>
            <CategoriesList showCatsList={showCatsList} />
            <div className="links-wrapper">
              {headerRouts.extra.map(({ value, path }): JSX.Element => {
                return (
                  <NavLink key={path} to={path} activeStyle={navRouteActiveStyle} exact>
                    {value}
                  </NavLink>
                );
              })}
            </div>
          </section>
          <section className="right-wing">
            <div className="cart-info-wrapper">
              <span className="cart-total">$ 0</span>
              <div>
                <NavLink to="/cart" activeStyle={navRouteActiveStyle}>
                  <TiShoppingCart />
                </NavLink>
                <span className="cart-count">0</span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </header>
  );
};

export default AfterHeader;
