// pkgs:

// utils:
import { useState } from 'react';
import Container from '../../../../utils/container/container.util';
import AppButton from '../../../button/app-button.comp';
import FormInput from '../../../form-input/form-input.comp';
import './style.sass';

// comps:

// component>>>
const FooterHead: React.VFC<any> = () => {
  const [newsLetterUser, setNewsLetterUser] = useState<string | null>(null);
  const handleLoginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <section className='footer-head'>
      <p>Trade alert - delivering the latest product trends and industries news straight to you inbox</p>
      <Container sm>
        <section className='news-letter'>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <FormInput
                type='email'
                inputName='email'
                placeholder='john@example.com'
                collectInputData={(_, value: string) => setNewsLetterUser(value)}
                small="W'll never share your email address with a third-party :)"
              />
            </div>
            <div>
              <AppButton loadState={'idle'} value='Subscribe' type='submit' wide size='lg' border={{ size: 1 }} noBorder />
            </div>
          </form>
        </section>
      </Container>
    </section>
  );
};

export default FooterHead;
