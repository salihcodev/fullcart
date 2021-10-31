// pkgs:
import { Link } from 'react-router-dom';
import { Fragment, VFC } from 'react';

// utils:
import './style.sass';
import Container from '../../utils/container/container.util';
import { IFooter } from '../../../common/interfaces/footer.interface';

// comps:

// component>>>
const Footer: VFC<IFooter> = ({ expanded }) => {
  return (
    <Fragment>
      {expanded ? (
        <footer className="default-footer">
          <Container xxl>
            <p className="reservation">
              <span className="icon">©</span>Copyright {new Date().getFullYear()}
              <span>
                <a href="https://asalih.netlify.com/me" target="_blank noopener noreferer">
                  @salihcodev
                </a>
              </span>
              All rights reserved.
            </p>
          </Container>
        </footer>
      ) : (
        <footer className="non-expanded-footer">
          <Container sm>
            <ul>
              {links.row1.map(({ value, path }) => (
                <li key={path}>
                  <Link key={path} to={path}>
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {links.row2.map(({ value, path }) => (
                <li key={path}>
                  <Link key={path} to={path}>
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="reservation">
              <span className="icon">©</span>Copyright {new Date().getFullYear()}
              <span>
                <a href="https://asalih.netlify.com/me" target="_blank noopener noreferer">
                  @salihcodev
                </a>
              </span>
              All rights reserved.
            </p>
          </Container>
        </footer>
      )}
    </Fragment>
  );
};

export default Footer;

const links = {
  row1: [
    { value: `About Us`, path: `/about` },
    { value: ` FAQ`, path: `/fqa` },
    { value: ` Help`, path: `/help` },
    { value: `Site Map`, path: `/site-map` },
    { value: `Contact Us`, path: `/contact` },
    { value: ` Mobile Site`, path: `/mobile-site` },
  ],
  row2: [
    { value: `Terms & Conditions`, path: `/terms-and-conditions` },
    { value: ` Declaration`, path: `/declaration` },
    { value: `Privacy Policy`, path: `/privacy-and-policy` },
  ],
};
