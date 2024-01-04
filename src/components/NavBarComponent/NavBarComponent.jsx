import React from "react";
import { WrapperContent, WrapperNavBarText, WrapperTextValue } from "./style";

const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "category":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "bookfamous":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      default:
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
    }
  };
  return (
    <div>
      <WrapperNavBarText>Label</WrapperNavBarText>
      <WrapperContent>
        {renderContent("category", [
          "Truyện tranh",
          "Tiểu thuyết",
          "Trinh thám",
          "Tình cảm",
        ])}

        {renderContent("bookfamous", [
          "Chiến tranh và hòa bình",
          "Thép đã tôi thế đấy",
          "Đề thi đẫm máu",
          "Rừng Nauy",
        ])}
        {renderContent("", ["O'Henry", "Tolstoy", "Heigoshi", "Bằng Việt"])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
