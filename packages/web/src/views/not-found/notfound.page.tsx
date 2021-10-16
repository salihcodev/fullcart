// pkgs:
import { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import Container from '../../components/utils/container/container.util';

// comps:

// utils:
import './style.sass';

// component>>>
const NotFound = () => {
  // preConfigured hooks:
  const history = useHistory();

  const [redirectionCountDown, setRedirectionCountDown] = useState<number>(5);

  useEffect(() => {
    setTimeout(() => setRedirectionCountDown(redirectionCountDown - 1), 1000);
    if (redirectionCountDown === 0) {
      history.push('/');
    }

    // clear the effect
    return () => {
      if (redirectionCountDown === 0) {
        setRedirectionCountDown(5);
      }
    };
  }, [history, redirectionCountDown]);

  return (
    <main className="page notfound-page">
      <Container>
        <div className="page-wrapper">
          <div className="flex-shield">
            <h2 className="notfound-number h1">404</h2>
            <p className="notfound-description">
              May you hits a broken/not existed route, Sadness
            </p>
            <Link to="/" className="redirect-home">
              <span>Back home</span>
              <b>{redirectionCountDown}</b>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
