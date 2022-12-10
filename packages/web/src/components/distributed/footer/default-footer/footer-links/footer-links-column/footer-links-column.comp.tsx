// pkgs:

// utils:
import { Link } from 'react-router-dom';
import './style.sass';

// comps:

// component>>>
const FooterLinksColumn: React.VFC<any> = ({ columnTitle, column }) => {
  return (
    <div className="links-column">
      <h3 className="heading">{columnTitle}</h3>
      <ul>
        {column.map(({ value, path }: { value: string; path: string }) => (
          <li key={value}>
            <Link to={path}>{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksColumn;
