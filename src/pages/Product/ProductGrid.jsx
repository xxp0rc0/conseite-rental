import { Carousel, Radio } from "antd";
import React, { useState } from "react";
import "./Product.css"

const contentStyle = {
  height: "20rem",
  width: "30rem",
  color: "#fff",
  textAlign: "center",
  background: "none",
  objectFit: "cover",
  
};

const ProImage = ({image, image2, image3}) => {
  const [dotPosition, setDotPosition] = useState("bottom");


  return (
    <>
      <Carousel autoplay dotPosition={dotPosition} effect="fade">
        <div>
          <img className="pro-img" style={contentStyle} src={image}></img>
        </div>
        <div>
          <img style={contentStyle} src={image2}></img>
        </div>
        <div>
          <img style={contentStyle} src={image3}></img>
        </div>
      </Carousel>
    </>
  );
};

export default ProImage;
