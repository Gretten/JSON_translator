import { useState } from "react";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import {
  changeInputValue,
  clearAllTextFields,
  onClickHandler
} from "./helpers";
import "./index.css";

export const Layout = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  return (
    <div className="main">
      <div className="content">
        <div className="column">
          <TextField
            id={"left"}
            name={"inputField"}
            value={inputValue}
            placeholder={"Place your text here..."}
            onChangeValue={(e) =>
              changeInputValue(e.target.value, setInputValue)
            }
          />
        </div>

        <div className="centralColumn">
          <Button
            clickHandler={() => onClickHandler(inputValue, setResultValue)}
            text={"Convert"}
          />
          <Button
            clickHandler={() =>
              clearAllTextFields(setInputValue, setResultValue)
            }
            text={"Clear"}
          />
        </div>

        <div className="column">
          <TextField id={"right"} name={"inputField"} value={resultValue} />
        </div>
      </div>
    </div>
  );
};
