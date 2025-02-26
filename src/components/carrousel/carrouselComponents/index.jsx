import React from "react";
import { CarrouselComponentWrpr, CarrouselText } from "./style";

function CarrouselComponent({ data = [] }) {
  return (
    <CarrouselComponentWrpr>
      {data.map((item, index) => (
        <CarrouselText key={index}>
          &bull;
          {item}
        </CarrouselText>
      ))}
    </CarrouselComponentWrpr>
  );
}

export default CarrouselComponent;
