// pkgs:
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp';
import Alert from '../../components/distributed/alert/alert.comp';

// utils:
import './style.sass';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import Container from '../../components/utils/container/container.util';
import { mailSender } from '../../redux/slices/contact-us/logic/mail-sender.logic';
import { ContactInFormTypes } from '../../common/@types/contact-form.types';
import AppButton from '../../components/distributed/button/app-button.comp';

// component>>>
const ContactPage = () => {
  // preConfigured hooks:
  const dispatch = useDispatch();

  // component's state extractions and handling:
  const { stage, message, status } = useAppSelector(
    (state: RootState) => state.ContactUsForm
  );

  const formSchema = {
    name: null,
    toMail: null,
    message: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<ContactInFormTypes>(formSchema);
  const handleContactFormSubmission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(mailSender(formData));
  };

  return (
    <main className="page contact-page">
      <Container sm>
        <h2 className="heading">Contact Us</h2>

        {/* sending email state */}
        {status === `ok` ? (
          <Alert title="Done" type="info" msg={message} />
        ) : status === `failed` ? (
          <Alert title="Failure" type="error" msg={message} />
        ) : null}

        {/* form wrapper */}
        <section className="form-wrapper">
          <form onSubmit={handleContactFormSubmission}>
            <FormInput
              type="text"
              label="Name"
              inputName="name"
              placeholder="Your name (1st, 2nd)"
              collectInputData={(name: string, value: string) =>
                setFormData({ ...formData, [name]: value })
              }
            />
            <FormInput
              type="email"
              label="Email"
              inputName="toMail"
              placeholder="john@example.com"
              collectInputData={(name: string, value: string) =>
                setFormData({ ...formData, [name]: value })
              }
            />
            <FormInput
              type="textarea"
              label="Message"
              inputName="message"
              placeholder="Write down your message..."
              collectInputData={(name: string, value: string) =>
                setFormData({ ...formData, [name]: value })
              }
            />
            <AppButton
              loadState={stage}
              value="Submit"
              type="submit"
              wide
              bkgDefault
              size="lg"
              border={{ size: 1 }}
              noBorder={false}
            />
          </form>
        </section>
      </Container>
    </main>
  );
};

export default ContactPage;
