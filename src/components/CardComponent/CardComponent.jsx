import { Card } from "antd";
import React from "react";
import logo from "../../assets/images/logo.jpg";
import {
  StyleNameProduct,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import { WrapperStyleTextSell } from "../ProductDetailComponent/style";

const CardComponent = () => {
  return (
    <Card
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      bodyStyle={{ padding: "10px" }}
      style={{
        width: "200px",
        margin: "10px 0",
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: "-1px",
          left: "-2px",
        }}
        alt="logo"
      />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>4.96</span>{" "}
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000 đ <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </Card>
  );
};

export default CardComponent;
