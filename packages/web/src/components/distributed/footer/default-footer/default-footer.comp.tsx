// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';

// comps:
import Container from '../../../utils/container/container.util';
import FooterHead from './footer-head/footer-head.comp';
import FooterLinks from './footer-links/footer-links.comp';
import FooterMiddlePortion from './footer-middle-portion/footer-middle-portion.comp';

// component>>>
const DefaultFooter: VFC<any> = ({ links }) => {
  return (
    <div className='app-footer default-footer'>
      <Container xl>
        <FooterHead />
        <FooterLinks links={links} />
        <FooterMiddlePortion />
      </Container>
      <p className='reservation'>
        <div>
          <span className='icon'>©</span>Copyright {new Date().getFullYear()}
          <span>
            <a href='https://asalih.netlify.com/me' target='_blank noopener noreferer'>
              @salihcodev
            </a>
          </span>
          All rights reserved.
        </div>
      </p>
    </div>
  );
};

export default DefaultFooter;
