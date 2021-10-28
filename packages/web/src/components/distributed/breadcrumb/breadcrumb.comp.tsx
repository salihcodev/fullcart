// pkgs:
import { BsChevronRight } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';

// comps:

const Breadcrumb: React.VFC<{}> = () => {
  const { pathname } = useLocation();

  // ignore the first white-space
  const [ignore, ...rest]: any = pathname.split('/');

  const pathParts = rest.map((path: any) => {
    const activePathStyle =
      path === rest[rest.length - 1] ? ` #999` : `#575758`;

    return (
      <span className="link-part-wrapper" key={path}>
        <small className="path-arrow">
          <BsChevronRight />
        </small>

        <span className="path" style={{ color: activePathStyle }}>
          {path.substring(0, 40)}
          {path.length >= 40 ? `...` : null}
        </span>
        {/* <Link className="path-part" to={path} key={path}>
          {path}
        </Link> */}
      </span>
    );
  });

  return (
    <section className="breadcrumb">
      <Link to="/" className="home-icon">
        Home
      </Link>
      {pathParts}
    </section>
  );
};

export default Breadcrumb;
