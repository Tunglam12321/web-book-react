import { Col, Pagination, Row } from "antd";
import React from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { WrapperProductType, WrapperTypeProduct } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ width: "100%", background: "#efefef" }}>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <Row
          style={{
            padding: "0 120px",
            backgroundColor: "#efefef",
            flexWrap: "nowrap",
          }}
        >
          <WrapperTypeProduct span={4} style={{ marginTop: "10px" }}>
            <NavBarComponent />
          </WrapperTypeProduct>
          <Col span={20}>
            <WrapperProductType>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProductType>

            <Pagination
              defaultCurrent={6}
              total={500}
              onChange={onChange}
              style={{ textAlign: "center", marginTop: "10px" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TypeProductPage;
