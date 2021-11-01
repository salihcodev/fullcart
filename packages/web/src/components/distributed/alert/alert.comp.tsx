// pkgs:
import { Fragment, useEffect, useState, VFC } from 'react';
import { IoClose } from 'react-icons/io5';

// utils:
import './style.sass';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { closeAlert } from '../../../redux/slices/alert/alert.slice';
import { useDispatch } from 'react-redux';
import { IAlert } from '../../../common/interfaces/alert.interface';

// comps:

// component>>>
const Alert: VFC<IAlert> = ({ type, title, msg }) => {
  // preConfigured hooks:
  const dispatch = useDispatch();

  // comp's locals:
  const stylesSchema = { one: null, two: null };
  const [styles, setStyles] = useState<any>(stylesSchema);

  const { isAlertOpened } = useAppSelector((state: RootState) => state.Alert);

  useEffect(() => {
    // change the alert box theme AKA `one, two`
    switch (type) {
      case `info`:
        setStyles({ one: `#65a365`, two: `#bdf7bd` });
        break;
      case `warning`:
        setStyles({ one: `#c4ac50`, two: `#ecdfac` });
        break;
      case `error`:
        setStyles({ one: `#d85656`, two: `#eeb1b1` });
        break;
      default:
        setStyles({ one: `#858585`, two: `#fff` });
        break;
    }
  }, [type]);

  return (
    <Fragment>
      {isAlertOpened ? (
        <section
          className="alert"
          style={{
            backgroundColor: styles.two,
            border: `1px solid ${styles.one}`,
          }}
        >
          {/* the wrapper */}
          <div className="alert-wrapper">
            <h6 className="heading" style={{ color: styles.one }}>
              {title}
            </h6>
            <p className="msg" style={{ color: styles.one }}>
              {msg}
            </p>
          </div>
          <button
            className="alert-closer"
            style={{ color: styles.one }}
            onClick={() => dispatch(closeAlert())}
          >
            <IoClose />
          </button>
        </section>
      ) : null}
    </Fragment>
  );
};

export default Alert;
