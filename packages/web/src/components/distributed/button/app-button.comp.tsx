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
  btnCount,
  activeBkg,
  activeWhite,
}) => {
  const buttonCursorDisability = loadState === `busy` ? `not-allowed` : `pointer`;

  const handelClickEvent = () => {
    if (handleEvent) handleEvent();
  };

  const fullWidth = wide ? `100%` : `auto`;
  const color = bkgDefault ? `#f5f6f7` : bkgSecondary ? `#f5f6f7` : activeWhite ? `#f5f6f7` : `#575e63`;
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
          borderTopColor: `#2fa57d`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          background: `#575e6344`,
        };
  const borderColor = bkgDefault ? `#000` : bkgSecondary ? `#22916c` : `#ddd`;
  const bkgColor = bkgDefault ? `#111` : bkgSecondary ? `#2fa57d` : `#f5f6f7`;

  const sizeValue = size === `sm` ? `2rem` : size === `md` ? `2.3rem` : `3rem`;
  const checkRadiusVal = size === `sm` ? `4px` : ``;

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
            borderRadius: checkRadiusVal,
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
            background: activeBkg ? activeBkg : bkgColor,
            color,
            cursor: buttonCursorDisability,
            borderRadius: checkRadiusVal,
            justifyContent: btnCount ? `flex-start` : `center`,
          }}
          className="app-button"
          disabled={disabled || loadState === `busy` ? true : false}
          onClick={handelClickEvent}
        >
          {icon && isIconBefore ? <span className="icon">{icon}</span> : null}
          <span className="value">{value}</span>
          {icon && !isIconBefore ? <span className="icon">{icon}</span> : null}

          {btnCount ? <span className="btn-count">{btnCount}</span> : null}

          {loadState === `busy` ? <span className="loading-spinner" style={spinnerStyle}></span> : null}
        </button>
      )}
    </Fragment>
  );
};

export default AppButton;
