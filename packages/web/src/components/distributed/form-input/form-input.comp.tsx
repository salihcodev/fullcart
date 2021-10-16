// pkgs:

// utils:
import { Fragment } from 'react';
import { IFormInput } from '../../../common/interfaces/form-input.interface';
import './style.sass';

// comps:

// component>>>
const FormInput: React.VFC<IFormInput> = ({
  type,
  inputName,
  label,
  collectInputData,
  ...otherProps
}) => {
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
        </Fragment>
      ) : (
        <Fragment>
          {label ? <label htmlFor={inputName}>{label}</label> : null}
          <input
            type={type}
            name={inputName}
            {...otherProps}
            onChange={(e) => collectInputData(e.target.name, e.target.value)}
          />
        </Fragment>
      )}
    </div>
  );
};

export default FormInput;
