import React, { useState } from "react";
import {
  CarrouselButtonWrpr,
  CarrouselCont,
  CarrouselContentWrpr,
} from "./style";
import Button from "../button";
import CarrouselComponent from "./carrouselComponents";

function Carrousel({ data = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <CarrouselCont>
      <CarrouselButtonWrpr>
        {data.map((item, index) => {
          return (
            <Button
              key={index}
              label={item.label}
              buttonType={selectedIndex === index ? "primary" : "secondary"}
              onClick={() => setSelectedIndex(index)}
            />
          );
        })}
      </CarrouselButtonWrpr>
      <CarrouselContentWrpr>
        <CarrouselComponent data={data[selectedIndex].data} />
      </CarrouselContentWrpr>
    </CarrouselCont>
  );
}

export default Carrousel;
