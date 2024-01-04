import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct.jsx";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent.jsx";
import slider1 from "../../assets/images/Slider1.jpg";
import slider2 from "../../assets/images/Slider2.jpg";
import slider3 from "../../assets/images/Slider3.jpg";
import slider4 from "../../assets/images/Slider4.jpg";
import slider5 from "../../assets/images/Slider5.jpg";
import CardComponent from "../../components/CardComponent/CardComponent.jsx";

const HomePage = () => {
  const arr = ["Sách", "Báo", "Tạp chí"];
  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item}></TypeProduct>;
          })}
        </WrapperTypeProduct>
      </div>
      <div style={{ width: "100%", backgroundColor: "#efefef" }}>
        <div
          id="container"
          style={{
            margin: "0 auto",
            height: "1000px",
            width: "1270px",
          }}
        >
          <SliderComponent
            arrImg={[slider1, slider2, slider3, slider4, slider5]}
          />
          <WrapperProducts>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              style={{
                border: "1px solid rgb(11,116,129)",
                color: "rgb(11,116,129)",
                width: "240px",
                height: "38px",
                borderradius: "4px",
                alignItem: "center",
              }}
            ></WrapperButtonMore>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
