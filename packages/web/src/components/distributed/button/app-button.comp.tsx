// pkgs:

// utils:
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IAppButton } from '../../../common/interfaces/app-button.interface';
import './style.sass';

const AppButton: React.VFC<IAppButton> = ({
  loadState,
  path,
  value,
  type,
  wide,
  size,
  border,
  handleEvent,
}) => {
  const handelClickEvent = () => {
    if (handleEvent) handleEvent();
  };

  const fullWidth = wide ? `100%` : `auto`;
  const sizeValue =
    size === `sm` ? `2.2rem` : size === `md` ? `2.5rem` : `3rem`;
  const borderValue = `${border.size}px solid ${border.color || `#403c6d`}`;
  return (
    <Fragment>
      {path ? (
        <Link
          to={path}
          style={{ width: fullWidth, height: sizeValue, border: borderValue }}
          className="app-button"
        >
          {value}
        </Link>
      ) : (
        <button
          type={type}
          style={{ width: fullWidth, height: sizeValue, border: borderValue }}
          className="app-button"
          onClick={handelClickEvent}
        >
          <span>{value}</span>
          {loadState === `busy` ? (
            <span className="loading-spinner"></span>
          ) : null}
        </button>
      )}
    </Fragment>
  );
};

export default AppButton;
