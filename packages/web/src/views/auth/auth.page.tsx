// pkgs:
import { Link, useParams } from 'react-router-dom';

// comps:
import CustomerLoginForm from '../../components/distributed/customer-signin-form/customer-signin-form.comp';
import CustomerSignupForm from '../../components/distributed/customer-signup-form/customer-signup-form.comp';
import SupplerLoginForm from '../../components/distributed/suppler-signin-form/suppler-signin-form.comp';
import SupplerSignupForm from '../../components/distributed/suppler-signup-form/suppler-signup-form.comp';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';

// component>>>
const AuthPage = () => {
  // comps info:

  // preConfigured hooks:
  const { userType, authAction }: any = useParams();

  return (
    <main className="page auth-page">
      <Container sm>
        <article className="login-form">
          <header className="header">
            <h2 className="heading">{authAction === `login` ? `login` : `signup`}</h2>
            {userType !== `suppler` ? <Link to="/auth/suppler/login">Are you a suppler?</Link> : null}
          </header>
          <section className="auth-forms">
            {userType === `customer` ? (
              <div className="customer-forms">
                {authAction === `login` ? <CustomerLoginForm /> : <CustomerSignupForm />}
              </div>
            ) : (
              <div className="suppler-forms">
                {authAction === `login` ? <SupplerLoginForm /> : <SupplerSignupForm />}
              </div>
            )}
          </section>
        </article>
      </Container>
    </main>
  );
};

export default AuthPage;
