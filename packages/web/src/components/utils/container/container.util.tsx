// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';

// comps:

// component>>>
const Container: VFC<{
  children: JSX.Element | JSX.Element[] | any;
  fluid?: boolean;
  xxxl?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
}> = ({ fluid, xxxl, sm, md, lg, xl, xxl, children }) => {
  return (
    <div
      className={
        fluid
          ? `container-fluid`
          : sm
          ? `container-sm`
          : md
          ? `container-md`
          : lg
          ? `container-lg`
          : xl
          ? `container-xl`
          : xxl
          ? `container-xxl`
          : xxxl
          ? `container-xxxl`
          : `container`
      }
    >
      {children}
    </div>
  );
};

export default Container;
