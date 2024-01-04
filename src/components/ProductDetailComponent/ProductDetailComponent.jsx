import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/Slider1.jpg";
import imageSmall from "../../assets/images/Slider2.jpg";
import {
  WrapperAddressProduct,
  WrapperColImage,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQuantityProduct,
  WrapperStyleImage,
  WrapperStyleTextSell,
  WrapperTextProDetail,
} from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <div>
      <Row
        style={{
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
      >
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Row>
            <Image src={imageProduct} alt="image product" preview="false" />
          </Row>

          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperColImage span={4}>
              <WrapperStyleImage
                src={imageSmall}
                alt="image small"
                preview="false"
              />
            </WrapperColImage>
            <WrapperColImage span={4}>
              <WrapperStyleImage
                src={imageSmall}
                alt="image small"
                preview="false"
              />
            </WrapperColImage>
            <WrapperColImage span={4}>
              <WrapperStyleImage
                src={imageSmall}
                alt="image small"
                preview="false"
              />
            </WrapperColImage>
            <WrapperColImage span={4}>
              <WrapperStyleImage
                src={imageSmall}
                alt="image small"
                preview="false"
              />
            </WrapperColImage>
            <WrapperColImage span={4}>
              <WrapperStyleImage
                src={imageSmall}
                alt="image small"
                preview="false"
              />
            </WrapperColImage>
            <WrapperColImage span={4}>
              <WrapperStyleImage
                src={imageSmall}
                alt="image small"
                preview="false"
              />
            </WrapperColImage>
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "10px" }}>
          <WrapperTextProDetail>
            Sách-Thám tử lừng danh Conan-Combo 10 tập từ tập 81 đến tập 90
          </WrapperTextProDetail>
          <div>
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct
              style={{
                borderTop: "1px solid #e5e5e5",
                borderBottom: "1px solid #e5e5e5",
              }}
            >
              200.000 đ
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến</span>
            <span className="address">Q.1, P.Bến Nghé, Hồ Chí Minh</span>
            <span className="changeaddress"> Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <WrapperQuantityProduct>
            <div style={{ fontSize: "14px" }}>Số lượng</div>
            <div>
              <ButtonComponent
                icon={
                  <MinusOutlined style={{ color: "#000", fontSize: "10px" }} />
                }
              />
              <InputNumber
                min={1}
                max={100}
                defaultValue={3}
                onChange={onChange}
                size="lagre"
                style={{ width: "60px" }}
              />
              <ButtonComponent
                icon={
                  <PlusOutlined style={{ color: "#000", fontSize: "10px" }} />
                }
              />
            </div>
          </WrapperQuantityProduct>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <ButtonComponent
              size={40}
              style={{
                background: "rgb(255,57,69)",
                color: "#fff",
                height: "48px",
                width: "220px",
                borderRadius: "4px",
              }}
              textButton={"Chọn mua"}
            ></ButtonComponent>
            <ButtonComponent
              size={40}
              style={{
                background: "#fff",
                color: "rgb(13,92,182)",
                height: "48px",
                fontSize: "15px",
                width: "220px",
                borderRadius: "4px",
                border: "1px solid rgb(13,92,182)",
              }}
              textButton={"Mua trả sau"}
            ></ButtonComponent>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
