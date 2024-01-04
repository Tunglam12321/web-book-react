import { Image } from "antd";
import React from "react";
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({ arrImg }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <WrapperSliderStyle {...settings}>
      {arrImg.map((img) => {
        return (
          <Image
            key={img}
            src={img}
            alt="slider"
            preview={false}
            width="100%"
            height="300px"
          />
        );
      })}
    </WrapperSliderStyle>
  );
};

export default SliderComponent;
