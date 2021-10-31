// pkgs:
import { VFC, useState, useRef } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { FiHeart, FiMessageSquare } from 'react-icons/fi';
import { AiOutlineExclamationCircle, AiOutlineUser } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';

// utils:
import './style.sass';
import Container from '../../../utils/container/container.util';

// comps:

// component>>>
const PreHeader: VFC<{}> = () => {
  // preConfigured hooks:
  // const history = useHistory();
  // const location = useLocation();

  // refer to toggler bars:
  // const bar1 = useRef<HTMLSpanElement>(null);

  const navRouteActiveStyle = {
    color: '#d1a876 ',
  };
  return (
    <header className="pre-header">
      <section className="help-and-contact">
        <div className="action-wrapper">
          <NavLink to="/contact" activeStyle={navRouteActiveStyle}>
            <span className="icon">
              <FiMessageSquare />
            </span>
            <span className="txt">Contact</span>
          </NavLink>
        </div>
        <div className="action-wrapper">
          <NavLink to="/help" activeStyle={navRouteActiveStyle}>
            <span className="icon">
              <AiOutlineExclamationCircle />
            </span>
            <span className="txt">Help</span>
          </NavLink>
        </div>
      </section>
      <section className="user-actions">
        <div className="action-wrapper">
          <NavLink to="/orders" activeStyle={navRouteActiveStyle}>
            <span className="icon">
              <FaRegCompass />
            </span>
            <span className="txt">Orders</span>
          </NavLink>
        </div>
        <div className="action-wrapper">
          <NavLink to="/wishlist" activeStyle={navRouteActiveStyle}>
            <span className="icon">
              <FiHeart />
            </span>
            <span className="txt">Wishlist</span>
          </NavLink>
        </div>
        <div className="action-wrapper">
          <NavLink to="/suppler-joining" activeStyle={navRouteActiveStyle}>
            <span className="icon">
              <AiOutlineUser />
            </span>
            <span className="txt">Join as a suppler</span>
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default PreHeader;
