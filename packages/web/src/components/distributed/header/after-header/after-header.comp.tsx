// pkgs:
import { VFC, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// utils:
import './style.sass';
import Container from '../../../utils/container/container.util';
import CategoriesList from './categories-list/categories-list.comp';

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
        afterHeader?.add(`fixed-header`);
      } else {
        afterHeader?.remove(`fixed-header`);
      }
    };
  }, []);

  const navRouteActiveStyle = {
    color: '#d1a876 ',
  };
  return (
    <header className="after-header">
      <Container fluid>
        <div className="after-header-wrapper">
          <section className="left-wing">
            <button className="categories-selector">
              <span className="txt">Browse categories</span>
              <span className="icon icon-up">
                <IoIosArrowUp />
              </span>
              <span className="icon icon-down">
                <IoIosArrowDown />
              </span>
              <CategoriesList />
            </button>
            <div className="links-wrapper">
              <NavLink to="/bestseller" activeStyle={navRouteActiveStyle}>
                Bestseller
              </NavLink>
              <NavLink to="/coming-soon" activeStyle={navRouteActiveStyle}>
                Coming soon
              </NavLink>
              <NavLink to="/new-releases" activeStyle={navRouteActiveStyle}>
                New Releases
              </NavLink>
            </div>
          </section>
          <section className="right-wing">
            <div className="cart-info-wrapper">
              <span className="cart-total">$ 270.99</span>
              <div>
                <NavLink to="/cart" activeStyle={navRouteActiveStyle}>
                  <TiShoppingCart />
                </NavLink>
                <span className="cart-count">8</span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </header>
  );
};

export default AfterHeader;
