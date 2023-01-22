// pkgs:
import { VFC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// utils:
import './style.sass';
import Container from '../../../utils/container/container.util';
import CategoriesList from './categories-list/categories-list.comp';
import headerRouts from '../../../../common/constants/header-routes.constant';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import toFixedNumber from '../../../../common/utilities/to-fixed-number.util';

// comps:

// component>>>
const AfterHeader: VFC<{}> = () => {
  const { stage, totalCartCost, totalCartCount } = useAppSelector((state: RootState) => state.Cart);

  useEffect(() => {
    window.onscroll = () => {
      const preHeaderHeight = document.querySelector<HTMLElement>(`.pre-header`)?.offsetHeight;
      const mainHeaderHeight = document.querySelector<HTMLElement>(`.header-wrapper`)?.offsetHeight;

      // Get the class list of the header that meant to be sticky.
      const afterHeader = document.querySelector<HTMLElement>(`.after-header`)?.classList;

      // Apply the logic
      if (mainHeaderHeight && preHeaderHeight && window.scrollY >= mainHeaderHeight + preHeaderHeight) {
        afterHeader?.add(`fixed-header`);
      } else {
        afterHeader?.remove(`fixed-header`);
      }
    };
  }, []);

  const navRouteActiveStyle = {
    color: '#4a67be ',
  };
  const spinnerStyle = {
    borderTopColor: `#4a67be`,
    borderRightColor: `#4a67be`,
    borderWidth: `2px`,
    borderStyle: `solid`,
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
            <button
              onMouseEnter={() => setShowCatsList(true)}
              onClick={() => setShowCatsList((state) => !state)}
              className="categories-selector"
              style={showCatsList ? { background: `#f5f6f7` } : {}}
            >
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
            <div onMouseLeave={() => setTimeout(() => setShowCatsList(false), 1000)}>
              <CategoriesList showCatsList={showCatsList} />
            </div>
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
              <span className="cart-total" title={`$ ${toFixedNumber(totalCartCost)}`}>
                {stage === `busy` ? (
                  <div>
                    <span className="loading-spinner" style={spinnerStyle}></span>
                  </div>
                ) : (
                  `$ ${toFixedNumber(totalCartCost)}`
                )}
              </span>
              <div>
                <NavLink to="/cart" activeStyle={navRouteActiveStyle}>
                  <TiShoppingCart />
                </NavLink>
                <span className="cart-count" title={totalCartCount}>
                  {stage === `busy` ? (
                    <div>
                      <span className="loading-spinner" style={spinnerStyle}></span>
                    </div>
                  ) : totalCartCount > 9 ? (
                    `+9`
                  ) : (
                    totalCartCount
                  )}
                </span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </header>
  );
};

export default AfterHeader;
