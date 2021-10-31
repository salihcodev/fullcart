// pkgs:
import { VFC, useState, useRef, Fragment } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';

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
const Header: VFC<IHeader> = ({ expanded }) => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const navRouteActiveStyle = {
    color: '#d1a876 ',
  };

  // mobile || side menu, you might need to create a redux slice
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);

  // depending on {expanded} so wether to view a default header or the minimal one.
  return (
    <Fragment>
      {expanded ? (
        <header className="default-header">
          <PreHeader />
          <Container fluid>
            <div className="default-header-wrapper">
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
                        {headerRouts.map(({ value, path }): JSX.Element => {
                          return (
                            <NavLink key={path} to={path} activeStyle={navRouteActiveStyle}>
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
      ) : (
        <header className="non-expanded-header">
          <Container md>
            <section className="left-wing">
              <div className="logo-dark">
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
