// pkgs:
import { VFC, useState, useRef, Fragment, useEffect } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCashOutline } from 'react-icons/io5';

// utils:
import './style.sass';
import headerRouts from '../../../common/constants/header-routes.constant';
import Container from '../../utils/container/container.util';
import { IHeader } from '../../../common/interfaces/header.interface';
import { VscChromeClose } from 'react-icons/vsc';
import { localStorageObjGetter } from '../../../common/utilities/localstorage-dealer/localstorage-getters.util';

// comps:
import UserAvatar from '../user-avatar/user-avatar.comp';
import PreHeader from './pre-header/pre-header.comp';
import AfterHeader from './after-header/after-header.comp';
import HeaderSearch from './header-search/header-search.comp';

// component>>>
const Header: VFC<IHeader> = ({ view }) => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const navRouteActiveStyle = {
    color: '#4a67be ',
  };

  // mobile || side menu, you might need to create a redux slice
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('keydown', (e: any) => {
      if (e.keyCode === 27) {
        setIsSideMenuOpened(false);
      }
    });
  }, []);

  // depending on {expanded} so wether to view a default header or the minimal one.
  return (
    <Fragment>
      {view === `expanded` ? (
        <header className="default-header">
          <PreHeader />
          <Container xxl>
            <div className="header-wrapper">
              <section className="left-wing">
                <div className="logo">
                  <Link to="/"></Link>
                </div>
              </section>
              <section className="middle-wing">
                <HeaderSearch />
              </section>
              <section className="right-wing">
                <section className="main-routes-list">
                  <section className="routes-list">
                    {headerRouts.main.map(({ value, path }): JSX.Element => {
                      return (
                        <NavLink key={path} to={path} activeStyle={navRouteActiveStyle} exact>
                          {value}
                        </NavLink>
                      );
                    })}
                    {/* auth area/user area */}
                    {user ? (
                      <UserAvatar user={user} />
                    ) : (
                      <section className="auth-area">
                        <NavLink to="/auth/customer/login" activeStyle={navRouteActiveStyle}>
                          Login
                        </NavLink>
                        <NavLink to="/auth/customer/signup" activeStyle={navRouteActiveStyle}>
                          Join Free
                        </NavLink>
                      </section>
                    )}
                  </section>
                </section>
                {/* xs-screens routes list */}
                <section className="xs-screens-routes-list">
                  {isSideMenuOpened ? (
                    <ul className="routes-list">
                      <button className="routes-list-closer" onClick={() => setIsSideMenuOpened(false)}>
                        <VscChromeClose />
                      </button>
                      <div className="routes-wrapper">
                        {headerRouts.main.map(({ value, path }): JSX.Element => {
                          return (
                            <NavLink key={path} to={path} activeStyle={navRouteActiveStyle} exact>
                              <li key={path}>{value}</li>
                            </NavLink>
                          );
                        })}
                      </div>
                    </ul>
                  ) : null}
                  <button className="xs-menu-toggler" onClick={() => setIsSideMenuOpened(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </section>
              </section>
            </div>
          </Container>
          <AfterHeader />
        </header>
      ) : view === `minimal` ? (
        <header className="non-expanded-header">
          <Container md>
            <div className="logo-wrapper">
              <div className="logo-dark">
                <Link to="/"></Link>
              </div>
            </div>
          </Container>
        </header>
      ) : (
        <header className="suppler-header">
          <Container xxl>
            <div className="header-wrapper">
              <section className="left-wing">
                <div className="logo">
                  <Link to="/"></Link>
                </div>
              </section>
              <section className="right-wing">
                <section className="routes-list">
                  {headerRouts.suppler.map(({ value, path }): JSX.Element => {
                    return (
                      <NavLink key={path} to={path} activeStyle={navRouteActiveStyle} exact>
                        {value}
                      </NavLink>
                    );
                  })}
                </section>
                <section className="user-actions">
                  <NavLink to="path" activeStyle={navRouteActiveStyle} exact>
                    <span className="icon">
                      <GoSearch />
                    </span>
                    <span className="txt">On fullcart</span>
                  </NavLink>
                  <NavLink to="path" activeStyle={navRouteActiveStyle} exact>
                    Login / Signup
                  </NavLink>
                  <NavLink to="path" activeStyle={navRouteActiveStyle} exact>
                    <span className="icon">
                      <IoCashOutline />
                    </span>
                    <span className="txt">Orders</span>
                    <span className="icon info-icon">0</span>
                  </NavLink>
                  <NavLink to="path" activeStyle={navRouteActiveStyle} exact>
                    <FiHeart />
                  </NavLink>
                </section>
              </section>
            </div>
          </Container>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
