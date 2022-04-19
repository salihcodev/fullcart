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
  bkgSecondary2,
  border,
  handleEvent,
  noBorder,
  icon,
  isIconBefore,
  openDetachedly,
  disabled,
}) => {
  const buttonCursorDisability = loadState === `busy` ? `not-allowed` : `pointer`;

  const handelClickEvent = () => {
    if (handleEvent) handleEvent();
  };

  const fullWidth = wide ? `100%` : `auto`;
  const color = bkgDefault ? `#f5f6f7` : bkgSecondary ? `#f5f6f7` : bkgSecondary2 ? `#f5f6f7` : `#575e63`;
  const borderValue = `${border.size}px`;
  const spinnerStyle =
    bkgSecondary || bkgDefault || bkgSecondary2
      ? {
          borderTopColor: `#faeddb`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          background: `#f5f6f733`,
        }
      : {
          borderTopColor: `#1a1a1a`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          background: `#575e6344`,
        };
  const borderColor = bkgDefault ? `#000` : bkgSecondary ? `#5624d0` : bkgSecondary2 ? `#b38420` : `#ddd`;
  const bkgColor = bkgDefault ? `#1a1a1a` : bkgSecondary ? `#673fce` : bkgSecondary2 ? `#d4ae31` : `#f5f6f7`;

  const sizeValue = size === `sm` ? `2rem` : size === `md` ? `2.5rem` : `3rem`;

  return (
    <Fragment>
      {path ? (
        <Link
          to={path}
          style={{
            width: fullWidth,
            height: sizeValue,
            border: `${borderValue} solid ${noBorder ? `transparent` : borderColor}`,
            background: bkgColor,
            color,
          }}
          className="app-button"
          target={openDetachedly ? `_blank` : `_self`}
          rel={openDetachedly ? `noopener noreferrer` : ``}
        >
          {icon && isIconBefore ? <span className="icon">{icon}</span> : null}
          <span className="value">{value}</span>
          {icon && !isIconBefore ? <span className="icon">{icon}</span> : null}
        </Link>
      ) : (
        <button
          type={type}
          style={{
            width: fullWidth,
            height: sizeValue,
            border: `${borderValue} solid ${noBorder ? `transparent` : borderColor}`,
            background: bkgColor,
            color,
            cursor: buttonCursorDisability,
          }}
          className="app-button"
          disabled={disabled || loadState === `busy` ? true : false}
          onClick={handelClickEvent}
        >
          {icon && isIconBefore ? <span className="icon">{icon}</span> : null}
          <span className="value">{value}</span>
          {icon && !isIconBefore ? <span className="icon">{icon}</span> : null}

          {loadState === `busy` ? <span className="loading-spinner" style={spinnerStyle}></span> : null}
        </button>
      )}
    </Fragment>
  );
};

export default AppButton;
