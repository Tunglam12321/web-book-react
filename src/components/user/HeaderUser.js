import React from "react";
import { Col, Layout } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { WrapperRowHeader } from "./style";
const { Header } = Layout;

const HeaderUser = () => {
  return (
    <>
      <WrapperRowHeader>
        <Col span={18}>
          <WrapperRowHeader>
            <Col className="col-header">Chính sách giao hàng</Col>
            <Col className="col-header">Chính sách đổi trả</Col>
            <Col className="col-header">Hướng dẫn thanh toán</Col>
            <Col className="col-header">Hướng dẫn mua hàng</Col>
            <Col className="hiden-helper-header">
              <MenuFoldOutlined />
            </Col>
          </WrapperRowHeader>
        </Col>
        <Col span={6}>Tùng Lâm</Col>
      </WrapperRowHeader>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#f0f0f0",
        }}
      ></Header>
    </>
  );
};
export default HeaderUser;
