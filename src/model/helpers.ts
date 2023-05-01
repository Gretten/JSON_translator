export const changeInputValue = (event, inputValueSetter) => {
  inputValueSetter(event.target.value);
};

export const setResult = (result, resultSetter) => {
  resultSetter(result);
};

export const onClickHandler = (input, resultSetter) => {
  const firstReplace = input.replaceAll(/"/gi, "'");
  const secondReplace = firstReplace.replaceAll(/':/gi, ":");
  const thirdReplace = secondReplace.replaceAll(/  '/gi, "  ");
  resultSetter(thirdReplace);
};

export const clearAllTextFields = (inputSetter, resultSetter) => {
  inputSetter("");
  resultSetter("");
};
