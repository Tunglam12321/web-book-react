import { Badge, Col, Row } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAcount,
  WrapperText,
  WrapperTextHeader,
} from "./style";
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNavLogin = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6} style={{ margin: "0 auto" }}>
          <WrapperText>BookStore</WrapperText>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            placeholder="Tìm kiếm"
            textButton="Tìm kiếm"
            style={{ borderRadius: "none" }}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: 20 }}>
          <Row style={{ width: "100%" }}>
            <Col span={14}>
              <WrapperHeaderAcount>
                <UserOutlined style={{ fontSize: "30px" }} />
                <div onClick={handleNavLogin} style={{ cursor: "pointer" }}>
                  <WrapperTextHeader>Đăng nhập/Đăng ký</WrapperTextHeader>
                  <div>
                    <WrapperTextHeader>Tài khoản</WrapperTextHeader>
                    <CaretDownOutlined />
                  </div>
                </div>
              </WrapperHeaderAcount>
            </Col>
            <Col span={10}>
              <div>
                <Badge count={4} size="small">
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px", color: "#fff" }}
                  />
                </Badge>
                <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
              </div>
            </Col>
          </Row>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
