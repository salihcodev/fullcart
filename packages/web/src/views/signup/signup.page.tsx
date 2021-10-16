// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp';

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';
import { signup } from '../../redux/slices/auth/logic/signing-utils.logic';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import AppButton from '../../components/distributed/button/app-button.comp';
import { SignupFormTypes } from '../../common/types/signup-form.types';

// component>>>
const SignupPage = () => {
  // comps info:

  // preConfigured hooks:
  const history = useHistory();
  const dispatch = useDispatch();

  // component's state extractions and handling:
  const { stage, failureMsg } = useAppSelector(
    (state: RootState) => state.Auth
  );

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
    dispatch(signup({ history, formData }));
  };

  return (
    <main className="page signup-page">
      <Container sm>
        <section className="signup-form">
          <div className="header">
            <h2 className="heading">Signup</h2>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSignupSubmit}>
              <div className="signing-names">
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
                collectInputData={(name: string, value: string) =>
                  setFormData({ ...formData, [name]: value })
                }
              />
              <FormInput
                type="password"
                label="Password"
                inputName="password"
                placeholder="Make sure to write a strong password"
                collectInputData={(name: string, value: string) =>
                  setFormData({ ...formData, [name]: value })
                }
              />
              <FormInput
                type="password"
                label="Confirm password"
                inputName="confirmPassword"
                placeholder="Type your password again"
                collectInputData={(name: string, value: string) =>
                  setFormData({ ...formData, [name]: value })
                }
              />

              <AppButton
                loadState={stage}
                value="Sign up"
                type="submit"
                wide
                size="lg"
                border={{ size: 2 }}
              />
              <p className="not-registered">
                Already have one? <Link to="/login">Signin</Link>
                now!
              </p>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default SignupPage;
