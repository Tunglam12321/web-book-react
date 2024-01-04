import React from "react";
import { WrapperInputForm } from "./style";

const InputForm = (props) => {
  const { placeholder = "Nhập text", ...rests } = props;
  const handleOnchangeInput = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div>
      <WrapperInputForm
        placeholder={placeholder}
        value={props.value}
        {...rests}
        onChange={handleOnchangeInput}
      />
    </div>
  );
};

export default InputForm;
