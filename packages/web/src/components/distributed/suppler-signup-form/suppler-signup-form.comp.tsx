// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:

// utils:
import './style.sass';
import { SignupFormTypes } from '../../../common/@types/signup-form.types';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import AppButton from '../button/app-button.comp';
import FormInput from '../form-input/form-input.comp';
import { signup } from '../../../redux/slices/auth/logic/signing-utils.logic';
import Alert from '../alert/alert.comp';
import { setStage } from '../../../redux/slices/auth/Auth.slice';

// component>>>
const SupplerSignupForm = () => {
  // comps info:

  // preConfigured hooks:
  const history = useHistory();
  const dispatch = useDispatch();

  // component's state extractions and handling:
  const { stage, failureMsg } = useAppSelector((state: RootState) => state.Auth);

  const formSchema = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<SignupFormTypes>(formSchema);

  const handleSignupSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(signup({ history, role: `suppler`, formData }));
  };

  useEffect(() => {
    return () => {
      dispatch(setStage());
    };
  }, [dispatch]);

  return (
    <section className="signup-form">
      {/* auth log */}
      {stage === `rejected` ? <Alert title={failureMsg.title} type="error" msg={failureMsg.msg} /> : null}
      <form onSubmit={handleSignupSubmit}>
        <div className="group-inputs">
          <FormInput
            type="text"
            label="First Name"
            inputName="firstName"
            placeholder="John"
            collectInputData={(name: string, value: string) =>
              setFormData({
                ...formData,
                [name]: value,
              })
            }
          />
          <FormInput
            type="text"
            label="Last Name"
            inputName="lastName"
            placeholder="Doe"
            collectInputData={(name: string, value: string) =>
              setFormData({
                ...formData,
                [name]: value,
              })
            }
          />
        </div>
        <FormInput
          type="email"
          label="Email"
          inputName="email"
          placeholder="john@example.com"
          collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
        />
        <FormInput
          type="password"
          label="Password"
          inputName="password"
          placeholder="Make sure to write a strong password"
          collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
        />
        <FormInput
          type="password"
          label="Confirm password"
          inputName="confirmPassword"
          placeholder="Type your password again"
          collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
        />

        <AppButton
          loadState={stage}
          value="Sign up"
          type="submit"
          wide
          size="lg"
          bkgDefault
          border={{ size: 1 }}
          noBorder={false}
        />
        <p className="other-option">
          Already have one? <Link to="/auth/suppler/login">Signin</Link>
          now!
        </p>
      </form>
    </section>
  );
};

export default SupplerSignupForm;
