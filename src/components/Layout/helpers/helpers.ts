
import {
  ChangeInputValue,
  SetResult,
  OnClickHandler,
  ClearAllTextFields,
} from "./types";

export const changeInputValue: ChangeInputValue = (value, inputValueSetter) => {
  inputValueSetter(value || "");
};

export const setResult: SetResult = (result, resultSetter) => {
  resultSetter(result);
};

export const onClickHandler: OnClickHandler = (input, resultSetter) => {
  const twinQuotesReplaced = input.replaceAll(/"/gi, "'");
  const keysSecondQuotesDeleted = twinQuotesReplaced.replaceAll(/':/gi, ":");
  const keysFirstQuotesDeleted = keysSecondQuotesDeleted.replaceAll(
    /  '/gi,
    "  "
  );
  resultSetter(keysFirstQuotesDeleted);
};

export const clearAllTextFields: ClearAllTextFields = (
  inputSetter,
  resultSetter
) => {
  inputSetter("");
  resultSetter("");
};
