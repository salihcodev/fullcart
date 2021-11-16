// pkgs:
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

// comps:

// utils:
import './style.sass';
import dashAsideRoutes from '../../../common/constants/dash-aside-routes.constant';
import { toggleAsideState } from '../../../redux/slices/dash-aside/dash-aside.slice';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';

// component>>>
const DashboardAside = () => {
  const { isAsideOpened } = useAppSelector((state: RootState) => state.DashAside);

  // preConfigured hooks:
  const dispatch = useDispatch();
  const location = useLocation();

  const navRouteActiveStyle = {
    color: '#1a1a1a',
    background: '#ececec',
  };

  return (
    <aside className="dash-sidebar" style={{ minWidth: isAsideOpened ? `12rem` : `4rem` }}>
      <button className="aside-toggler" onClick={() => dispatch(toggleAsideState())}>
        <AiOutlineMenuUnfold />
      </button>
      <div className="aside-wrapper">
        <section className="logos-wrapper">
          {isAsideOpened ? (
            <div className="logo">
              <Link to="/dashboard"></Link>
            </div>
          ) : (
            <div className="sm-logo">
              <NavLink to="/dashboard"></NavLink>
            </div>
          )}
        </section>
        <section className="routes">
          {isAsideOpened ? (
            <ul className="full-routes">
              {dashAsideRoutes.map(({ icon, value, path }: any): JSX.Element => {
                return (
                  <li key={path} className="aside-route">
                    <NavLink exact activeStyle={navRouteActiveStyle} to={path}>
                      <span className="icon">{icon()}</span> <span className="route-name">{value}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="icons-only-routes">
              {dashAsideRoutes.map(({ value, icon, path }: any): JSX.Element => {
                const activeIconRoute = location.pathname === path ? `active-icon-route` : null;
                return (
                  <li key={path} className={`aside-route ${activeIconRoute}`}>
                    <NavLink exact to={path}>
                      <span className="icon">{icon()}</span>
                    </NavLink>
                    <span className="hover-title">
                      <small>{value}</small>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </aside>
  );
};

export default DashboardAside;
