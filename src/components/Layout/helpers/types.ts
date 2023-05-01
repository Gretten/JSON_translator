type StringStoreSetter = React.Dispatch<React.SetStateAction<string>>;

export type ChangeInputValue = (
  value: string,
  inputValueSetter: StringStoreSetter
) => void;

export type SetResult = (result: string, setResult: StringStoreSetter) => void;

export type OnClickHandler = (
  input: string,
  resultSetter: StringStoreSetter
) => void;

export type ClearAllTextFields = (
  inputSetter: StringStoreSetter,
  resultSetter: StringStoreSetter
) => void;
