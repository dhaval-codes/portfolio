import React, { useState } from "react";
import { ServiceCardWrpr, ServiceDescription, ServiceHeading } from "./style";

function ServiceCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ServiceCardWrpr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <data.icon height={150} color={isHovered ? "#fff" : "#0077FF"} />
      <ServiceHeading>{data.label}</ServiceHeading>
      <ServiceDescription>{data.description}</ServiceDescription>
      <ServiceDescription
        style={{ fontWeight: 600, textDecoration: "underline" }}
      >
        Learn More
      </ServiceDescription>
    </ServiceCardWrpr>
  );
}

export default ServiceCard;
