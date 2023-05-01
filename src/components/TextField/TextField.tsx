import React from "react";
import "./index.css";
import { TextFieldProps } from "./types";

export const TextField = ({
  name,
  id,
  value,
  onChangeValue,
  placeholder = "",
  maxWidth = "600px"
}: TextFieldProps): React.ReactElement => {
  return (
    <div style={{ maxWidth }} className="textareaContainer">
      <textarea
        className="textField"
        name={name}
        id={id}
        cols={30}
        rows={10}
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder}
      />
    </div>
  );
};
