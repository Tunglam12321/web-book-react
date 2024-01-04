import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";

const ButtonInputSearch = ({ size, placeholder, textButton }) => {
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        id="search"
        size={size}
        placeholder={placeholder}
        bordered="false"
        style={{
          backgroundColor: "#fff",
          borderRadius: "0px",
        }}
      />
      <ButtonComponent
        icon={<SearchOutlined bordered="false" />}
        style={{ borderRadius: "0px", height: "40px" }}
        textButton={textButton}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
