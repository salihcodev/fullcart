// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';
import { IFooter } from '../../../common/interfaces/footer.interface';
import defaultFooterRoutes, { noneExpandedFooterRoutes } from '../../../common/constants/footer-routes.constant';
// comps:
import DefaultFooter from './default-footer/default-footer.comp';
import NoneExpandedFooter from './none-expanded-footer/none-expanded-footer.comp';

// component>>>
const Footer: VFC<IFooter> = ({ view }) => {
  return (
    <footer>
      {view === `expanded` ? (
        <DefaultFooter links={defaultFooterRoutes} />
      ) : (
        <NoneExpandedFooter links={noneExpandedFooterRoutes} />
      )}
    </footer>
  );
};

export default Footer;
