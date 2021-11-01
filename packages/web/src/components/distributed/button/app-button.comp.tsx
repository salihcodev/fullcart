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
  bkgDefault,
  bkgSecondary,
  border,
  handleEvent,
}) => {
  const buttonCursorDisability = loadState === `busy` ? `not-allowed` : `auto`;

  const handelClickEvent = () => {
    if (handleEvent) handleEvent();
  };

  const fullWidth = wide ? `100%` : `auto`;
  const color = bkgDefault ? `#f5f6f7` : bkgSecondary ? `#f5f6f7` : `#575e63`;
  const borderValue = `${border.size}px`;
  const spinnerStyle =
    bkgSecondary || bkgDefault
      ? {
          borderTopColor: `#f5f6f7`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          background: `#f5f6f733`,
        }
      : {
          borderTopColor: `#575e63`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          background: `#575e6344`,
        };

  const borderColor = bkgDefault
    ? `#474379`
    : bkgSecondary
    ? `#c48232`
    : `#f5f6f7`;
  const bkgColor = bkgDefault
    ? `#56518f`
    : bkgSecondary
    ? `#e0b989`
    : `#f5f6f7`;

  const sizeValue =
    size === `sm` ? `2.2rem` : size === `md` ? `2.5rem` : `3rem`;

  return (
    <Fragment>
      {path ? (
        <Link
          to={path}
          style={{
            width: fullWidth,
            height: sizeValue,
            border: `${borderValue} solid ${borderColor}`,
            background: bkgColor,
            color,
          }}
          className="app-button"
        >
          {value}
        </Link>
      ) : (
        <button
          type={type}
          style={{
            width: fullWidth,
            height: sizeValue,
            border: `${borderValue} solid ${borderColor}`,
            background: bkgColor,
            color,
            cursor: buttonCursorDisability,
          }}
          className="app-button"
          disabled={loadState === `busy` ? true : false}
          onClick={handelClickEvent}
        >
          <span>{value}</span>
          {loadState === `busy` ? (
            <span className="loading-spinner" style={spinnerStyle}></span>
          ) : null}
        </button>
      )}
    </Fragment>
  );
};

export default AppButton;
