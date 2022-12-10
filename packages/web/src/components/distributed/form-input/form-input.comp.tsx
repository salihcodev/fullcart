// pkgs:

// utils:
import { Fragment } from 'react';
import { IFormInput } from '../../../common/interfaces/form-input.interface';
import './style.sass';

// comps:

// component>>>
const FormInput: React.VFC<IFormInput> = ({ type, inputName, label, icon, collectInputData, small, ...otherProps }) => {
  const iconInputPadding = icon ? { paddingLeft: `3rem` } : {};

  return (
    <div className="input-wrapper">
      {type === `textarea` ? (
        <Fragment>
          {label ? <label htmlFor={inputName}>{label}</label> : null}
          <textarea
            name={inputName}
            {...otherProps}
            onChange={(e) => collectInputData(e.target.name, e.target.value)}
          />
          {small ? <small>{small}</small> : null}
        </Fragment>
      ) : (
        <Fragment>
          {label ? <label htmlFor={inputName}>{label}</label> : null}
          <div className="the-input">
            {icon ? <span className="input-icon">{icon()}</span> : null}

            <input
              type={type}
              name={inputName}
              {...otherProps}
              style={iconInputPadding}
              onChange={(e) => collectInputData(e.target.name, e.target.value)}
            />
            {small ? <small>{small}</small> : null}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default FormInput;
