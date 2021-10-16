import { useEffect } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

// auto scroll to top, smoothly.
const _ScrollToTop = ({ children }: any) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return children;
};

const ScrollToTop = withRouter(_ScrollToTop);

export default ScrollToTop;
