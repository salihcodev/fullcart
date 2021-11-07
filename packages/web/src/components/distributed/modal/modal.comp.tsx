// pkgs:

// utils:
import './style.sass';
import { IoCloseOutline } from 'react-icons/io5';
import { Fragment, useEffect } from 'react';

// comps:

const Modal: React.VFC<{ children: JSX.Element | JSX.Element[]; state: boolean; setState: any }> = ({
  state,
  setState,
  children,
}) => {
  useEffect(() => {
    window.onkeydown = function (e: { key: string }) {
      if (e.key === 'Escape') {
        setState(false);
      }
    };
    //  return () => {
    //    cleanup
    //  }
  }, [setState]);
  return (
    <Fragment>
      {state ? (
        <article className="modal-wrapper">
          <section className="modal-body">
            <div className="wrapper-close">
              <button type="button" onClick={() => setState(false)}>
                <IoCloseOutline />
              </button>
            </div>
            {children}
          </section>
        </article>
      ) : null}
    </Fragment>
  );
};

export default Modal;
