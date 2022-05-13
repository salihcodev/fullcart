// pkgs:

// utils:
import './style.sass';
import { IoCloseOutline } from 'react-icons/io5';
import { Fragment, useEffect } from 'react';
import Container from '../../utils/container/container.util';

// comps:

const Modal: React.VFC<{
  children: JSX.Element | JSX.Element[];
  state: boolean;
  setState: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
}> = ({ state, setState, children, sm, md, lg, xl, xxl }) => {
  useEffect(() => {
    window.onkeydown = function (e: { key: string }) {
      if (e.key === 'Escape') {
        setState(false);
      }
    };
    return () => {
      setState(false);
    };
  }, [setState]);

  return (
    <Fragment>
      {state ? (
        <article className='modal-wrapper'>
          <Container sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
            <section className='modal-body'>
              <div className='wrapper-close'>
                <button type='button' onClick={() => setState(false)}>
                  <IoCloseOutline />
                </button>
              </div>
              {children}
            </section>
          </Container>
        </article>
      ) : null}
    </Fragment>
  );
};

export default Modal;
