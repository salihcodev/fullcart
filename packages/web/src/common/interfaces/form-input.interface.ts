export interface IFormInput {
  type: string;
  label?: string;
  inputName: string;
  placeholder?: string;
  collectInputData: (name: string, value: string) => void;
  otherProps?: any;
  autoComplete?: string;
}
