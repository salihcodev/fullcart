// pkgs:
import { Fragment } from 'react';

// utils:
import './style.sass';
import { ILayout } from '../../../common/interfaces/layout.interface';

// comps:
import Header from '../header/header.comp';
import Footer from '../footer/footer.comp';

// component>>>
const Layout: React.VFC<ILayout> = ({ children, expanded }) => {
  return (
    <Fragment>
      <Header expanded={expanded} />
      {children}
      <Footer expanded={expanded} />
    </Fragment>
  );
};

export default Layout;
