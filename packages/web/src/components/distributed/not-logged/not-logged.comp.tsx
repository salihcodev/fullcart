// pkgs:

// utils:
import { Link } from 'react-router-dom';
import './style.sass';

// comps:

const NotLogged: React.VFC<{ place: string }> = ({ place }) => {
  return (
    <section className="not-logged">
      <h3>
        Yous must <Link to="/auth/customer/login">login</Link> or <Link to="/auth/customer/signup">signup</Link> first,
        to view {place}.
      </h3>
    </section>
  );
};

export default NotLogged;
