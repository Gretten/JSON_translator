import React from "react";
import { ButtonProps } from "./types";
import "./index.css";

export const Button = ({
  clickHandler,
  text = "Click Me"
}: ButtonProps): React.ReactElement => {
  return (
    <button className="submitButton" onClick={clickHandler}>
      <span>{text}</span>
    </button>
  );
};
