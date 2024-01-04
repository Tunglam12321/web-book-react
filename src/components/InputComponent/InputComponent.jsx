import { Input } from "antd";
import React from "react";

const InputComponent = ({ size, placeholder, bordered, ...rests }) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      bordered={bordered}
      {...rests}
    />
  );
};

export default InputComponent;
