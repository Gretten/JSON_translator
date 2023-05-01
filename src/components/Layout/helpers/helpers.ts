export type ChangeInputValue = (
  value: string,
  inputValueSetter: React.Dispatch<React.SetStateAction<string>>
) => void;

export const changeInputValue: ChangeInputValue = (value, inputValueSetter) => {
  inputValueSetter(value || "");
};

export const setResult = (result, resultSetter) => {
  resultSetter(result);
};

export const onClickHandler = (input, resultSetter) => {
  const twinQuotesReplaced = input.replaceAll(/"/gi, "'");
  const keysSecondQuotesDeleted = twinQuotesReplaced.replaceAll(/':/gi, ":");
  const keysFirstQuotesDeleted = keysSecondQuotesDeleted.replaceAll(/  '/gi, "  ");
  resultSetter(keysFirstQuotesDeleted);
};

export const clearAllTextFields = (inputSetter, resultSetter) => {
  inputSetter("");
  resultSetter("");
};
