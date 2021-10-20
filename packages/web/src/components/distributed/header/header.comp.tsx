// pkgs:
import { VFC, useState, useRef, Fragment } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

// utils:
import './style.sass';
import headerRouts from '../../../common/constants/header-routes.constant';
import Container from '../../utils/container/container.util';
import UserAvatar from '../user-avatar/user-avatar.comp';
import { localStorageObjGetter } from '../../../common/utilities/localstorage-dealer/localstorage-getters.util';
import { IHeader } from '../../../common/interfaces/header.interface';

// comps:

// component>>>
const Header: VFC<IHeader> = ({ expanded }) => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  const navRouteActiveStyle = {
    color: '#444179 ',
  };

  // mobile || side menu, you might need to create a redux slice
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);

  // refer to toggler bars:
  const bar1 = useRef<HTMLSpanElement>(null);
  const bar2 = useRef<HTMLSpanElement>(null);
  const bar3 = useRef<HTMLSpanElement>(null);

  if (isSideMenuOpened) {
    if (null !== bar1.current) {
      bar1.current.style.transform = 'rotate(45deg)';
      bar1.current.style.margin = '1px 0px';
    }

    if (null !== bar2.current) {
      bar2.current.style.display = 'none';
    }

    if (null !== bar3.current) {
      bar3.current.style.transform = 'rotate(-45deg)';
      bar3.current.style.margin = '-1px 0px';
    }
  } else {
    if (null !== bar1.current) {
      bar1.current.style.transform = 'rotate(0)';
    }

    if (null !== bar2.current) {
      bar2.current.style.display = 'block';
    }

    if (null !== bar3.current) {
      bar3.current.style.transform = 'rotate(0)';
    }
  }

  const user = localStorageObjGetter(`@authedUser`)?.user;

  // depending on {expanded} so wether to view a default header or the minimal one.
  return (
    <Fragment>
      {expanded ? (
        <header className="default-header">
          <Container xxl>
            <div className="header-wrapper">
              <section className="left-wing">
                <div className="logo">
                  <Link to="/"></Link>
                </div>
              </section>
              <section className="middle-wing">
                <div className="header-search">
                  <input
                    type="text"
                    name="searchingInprods"
                    id="searchingInprods"
                    placeholder="Searching in prods e.g. black metal prod, woody cupper prod..."
                  />
                </div>
              </section>
              <section className="right-wing">
                <section className="main-routes-list">
                  <section className="routes-list">
                    {headerRouts.map(({ value, path }): JSX.Element => {
                      return (
                        <NavLink key={path} to={path} activeStyle={navRouteActiveStyle}>
                          {value}
                        </NavLink>
                      );
                    })}
                    {/* auth area/user area */}
                    {user ? (
                      <UserAvatar user={user} />
                    ) : (
                      <section className="auth-area">
                        <NavLink to="/login" activeStyle={navRouteActiveStyle}>
                          login
                        </NavLink>
                        <NavLink to="/signup" activeStyle={navRouteActiveStyle}>
                          join for free
                        </NavLink>
                      </section>
                    )}
                    <section className="user-actions">
                      <NavLink to="/wishlist" activeStyle={navRouteActiveStyle}>
                        <FiHeart />
                      </NavLink>
                      <NavLink to="/cart" activeStyle={navRouteActiveStyle}>
                        <FiShoppingCart />
                      </NavLink>
                    </section>
                  </section>
                </section>
                {/* xs-screens routes list */}
                <section className="xs-screens-routes-list">
                  {isSideMenuOpened ? (
                    <ul className="routes-list">
                      {headerRouts.map(({ value, path }): JSX.Element => {
                        return (
                          <NavLink key={path} to={path} activeStyle={navRouteActiveStyle}>
                            <li key={path}>{value}</li>
                          </NavLink>
                        );
                      })}
                    </ul>
                  ) : null}
                  <button
                    className="xs-menu-toggler"
                    onClick={() => setIsSideMenuOpened(!isSideMenuOpened)}
                  >
                    <span ref={bar1}></span>
                    <span ref={bar2}></span>
                    <span ref={bar3}></span>
                  </button>
                </section>
              </section>
            </div>
          </Container>
        </header>
      ) : (
        <header className="non-expanded-header">
          <Container md>
            <section className="left-wing">
              <div className="logo">
                <Link to="/"></Link>
              </div>
            </section>
            <section className="right-wing"></section>
          </Container>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
