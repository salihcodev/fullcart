// pkgs:

// utils:
import './style.sass';
import { useState, useEffect } from 'react';

// comps:
import Modal from '../../../modal/modal.comp';
import SupplerLoginForm from '../../../suppler-signin-form/suppler-signin-form.comp';
import SupplerSignupForm from '../../../suppler-signup-form/suppler-signup-form.comp';

// component>>>
const SupplerLoggingModal: React.VFC<any> = ({ isModalOpen, setIsModalOpen }) => {
  const [currLoggingWrapper, setCurrLoggingWrapper] = useState<string>(`loginWrapper`);

  const albumsTabs = [
    { value: 'Login', contentName: 'loginWrapper' },
    { value: 'Signup', contentName: 'signupWrapper' },
  ];

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Modal sm state={isModalOpen} setState={setIsModalOpen}>
      <article className="suppler-logging-modal">
        <header className="tabs-wrapper">
          <h2 className="heading">Join Us</h2>
          <div className="tabs-wrapper">
            {albumsTabs.map(({ value, contentName }): JSX.Element => {
              const tabStyle = { color: `#5624d0`, borderBottom: `3px solid #1a1a1a` };
              const activeTabStyle = currLoggingWrapper === contentName ? tabStyle : {};
              return (
                <button style={activeTabStyle} onClick={() => setCurrLoggingWrapper(contentName)}>
                  {value}
                </button>
              );
            })}
          </div>
        </header>
        <section className="current-content">
          {currLoggingWrapper === `loginWrapper` ? (
            <section className="wrapper">
              <SupplerLoginForm />
            </section>
          ) : (
            <section className="wrapper">
              <SupplerSignupForm />
            </section>
          )}
        </section>
      </article>
    </Modal>
  );
};

export default SupplerLoggingModal;
