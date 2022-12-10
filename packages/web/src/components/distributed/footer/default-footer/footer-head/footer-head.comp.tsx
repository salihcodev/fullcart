// pkgs:

// utils:
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../redux/hooks';
import { mailingListSubscriber } from '../../../../../redux/slices/newsletter/logic/newsletter.logic';
import { RootState } from '../../../../../redux/store';
import Container from '../../../../utils/container/container.util';
import Alert from '../../../alert/alert.comp';
import AppButton from '../../../button/app-button.comp';
import FormInput from '../../../form-input/form-input.comp';
import './style.sass';

// comps:

// component>>>
const FooterHead: React.VFC<any> = () => {
  // preConfigured hooks:
  const dispatch = useDispatch();

  // component's state extractions and handling:
  const { stage, message, status } = useAppSelector((state: RootState) => state.Newsletter);

  const [newsletterUser, setNewsletterUser] = useState<string>(``);
  const handleLoginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <section className="footer-head">
      <p>Trade alert - delivering the latest product trends and industries news straight to you inbox</p>
      <Container sm>
        {/* sending email state */}
        {status === `ok` ? (
          <Alert title="Done" type="info" msg={message} />
        ) : status === `failed` ? (
          <Alert title="Failure" type="error" msg={message} />
        ) : null}
        <section className="news-letter">
          <form onSubmit={handleLoginSubmit}>
            <div>
              <FormInput
                type="email"
                inputName="email"
                placeholder="john@example.com"
                collectInputData={(_, value: string) => setNewsletterUser(value)}
                small="W'll never share your email address with a third-party :)"
              />
            </div>
            <div>
              <AppButton
                loadState={stage}
                value="Subscribe"
                type="submit"
                wide
                size="lg"
                border={{ size: 1 }}
                noBorder
                handleEvent={() => dispatch(mailingListSubscriber(newsletterUser))}
              />
            </div>
          </form>
        </section>
      </Container>
    </section>
  );
};

export default FooterHead;
