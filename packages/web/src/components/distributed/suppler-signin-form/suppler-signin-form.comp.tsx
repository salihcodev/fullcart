// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../form-input/form-input.comp';
import AppButton from '../button/app-button.comp';

// utils:
import './style.sass';
import { signin } from '../../../redux/slices/auth/logic/signing-utils.logic';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { SignInFormTypes } from '../../../common/@types/signin-form.types';
import Alert from '../alert/alert.comp';
import { setStage } from '../../../redux/slices/auth/Auth.slice';

// component>>>
const SupplerLoginForm = () => {
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
    dispatch(signin({ history, role: `suppler`, formData }));
  };
  useEffect(() => {
    return () => {
      dispatch(setStage());
    };
  }, [dispatch]);

  return (
    <section className="login-form">
      {/* auth log */}
      {stage === `rejected` ? <Alert title={failureMsg.title} type="error" msg={failureMsg.msg} /> : null}

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
        <AppButton
          loadState={stage}
          value="Sign in"
          type="submit"
          wide
          size="lg"
          bkgDefault
          border={{ size: 1 }}
          noBorder={false}
        />

        <p className="other-option">
          Dont't have one.. no worries
          <Link to="/auth/suppler/signup">Signup</Link>
          now!
        </p>
      </form>
    </section>
  );
};

export default SupplerLoginForm;
