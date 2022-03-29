// pkgs:
import { useEffect, useState, VFC } from 'react';
import { IoClose } from 'react-icons/io5';

// utils:
import './style.sass';
import { IAlert } from '../../../common/interfaces/alert.interface';
import { Link } from 'react-router-dom';

// comps:

// component>>>
const Alert: VFC<IAlert> = ({ type, title, msg, authWarning, list }) => {
  // preConfigured hooks:
  const [alertState, setAlertState] = useState<boolean>(true);

  // comp's locals:
  const [styles, setStyles] = useState<string>(``);

  useEffect(() => {
    // change the alert box theme AKA `one, two`
    switch (type) {
      case `info`:
        setStyles(`#50b950`);
        break;
      case `warning`:
        setStyles(`#ad901c`);
        break;
      case `error`:
        setStyles(`#a54646`);
        break;
      default:
        setStyles(`#858585`);
        break;
    }
  }, [type]);
  useEffect(() => {
    return () => {
      setAlertState(true);
    };
  }, []);

  const defaultTitleColor = type === `` ? `#101010` : styles;

  return (
    <div>
      {alertState ? (
        <section className="alert">
          {/* the controller */}
          <button className="alert-closer" style={{ color: styles }} onClick={() => setAlertState(false)}>
            <IoClose />
          </button>

          {/* the wrapper */}
          <div className="alert-wrapper">
            <h6 className="heading" style={{ color: defaultTitleColor }}>
              {title ? `${type && type + `:`} ${title}` : `Note`}
            </h6>
            <p className="msg" style={{ color: styles }}>
              {msg}
              {authWarning ? (
                <div className="auth-warning">
                  <Link to="/auth/customer/login">
                    <b>signin</b>
                  </Link>
                  <span>or</span>
                  <Link to="/auth/customer/signup">
                    <b>signup</b>
                  </Link>
                </div>
              ) : null}
            </p>
            {list ? (
              <ul>
                {list.map((li) => (
                  <li>{li}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Alert;
