// pkgs:
import { Link } from 'react-router-dom';
import { VFC } from 'react';

// utils:
import './style.sass';
import Container from '../../../utils/container/container.util';

// comps:

// component>>>
const NoneExpandedFooter: VFC<any> = ({ links }) => {
  return (
    <div className='app-footer non-expanded-footer'>
      <Container sm>
        <ul>
          {links.row1.map(({ value, path }: { value: string; path: string }) => (
            <li key={path}>
              <Link key={path} to={path}>
                {value}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {links.row2.map(({ value, path }: { value: string; path: string }) => (
            <li key={path}>
              <Link key={path} to={path}>
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <p className='reservation'>
        <span className='icon'>©</span>Copyright {new Date().getFullYear()}
        <span>
          <a href='https://asalih.netlify.com/me' target='_blank noopener noreferer'>
            @salihcodev
          </a>
        </span>
        All rights reserved.
      </p>
    </div>
  );
};

export default NoneExpandedFooter;
