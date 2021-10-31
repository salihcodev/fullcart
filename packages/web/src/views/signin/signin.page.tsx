// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import { signin } from '../../redux/slices/auth/logic/signing-utils.logic';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import AppButton from '../../components/distributed/button/app-button.comp';
import { SignInFormTypes } from '../../common/@types/signin-form.types';

// component>>>
const LoginPage = () => {
  // comps info:

  // preConfigured hooks:
  const history = useHistory();
  const dispatch = useDispatch();

  // component's state extractions and handling:
  const { stage, failureMsg } = useAppSelector((state: RootState) => state.Auth);

  const formSchema = {
    email: null,
    password: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<SignInFormTypes>(formSchema);

  const handleLoginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(signin({ history, formData }));
  };

  return (
    <main className="page login-page">
      <Container sm>
        <section className="login-form">
          <div className="header">
            <h2 className="heading">login</h2>
          </div>
          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <FormInput
                type="email"
                label="Email"
                inputName="email"
                placeholder="john@example.com"
                collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
              />
              <FormInput
                type="password"
                label="password"
                inputName="password"
                placeholder="Your password"
                collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
              />
              {/* submitter btn */}
              <AppButton loadState={stage} value="Sign in" type="submit" wide size="lg" bkgDefault border={{ size: 2 }} />

              <p className="not-registered">
                Dont't have one.. no worries
                <Link to="/signup">Signup</Link>
                now!
              </p>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default LoginPage;
